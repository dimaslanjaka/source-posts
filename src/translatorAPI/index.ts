import { stringify } from 'querystring';
import { Dispatcher, request } from 'undici';
import languages, { getISOCode, isSupported } from './languages';
import { generate } from './tokenGenerator';

interface TranslateOption {
  /** The language name/ISO 639-1 code to translate from. If none is given, it will auto detect the source language. */
  from?: string;
  /** The language name/ISO 639-1 code to translate to. If none is given, it will translate to English. */
  to?: string;
  /** If `true`, it will return the raw output that was received from Google Translate. */
  raw?: boolean;
}

interface TranslateResponse {
  /** The translated text */
  text: string;
  from: {
    language: {
      /** Whether or not the API suggest a correction in the source language. */
      didYouMean: boolean;
      /** The ISO 639-1 code of the language that the API has recognized in the text. */
      iso: string;
    };
    text: {
      /** Whether or not the API has auto corrected the original text. */
      autoCorrected: boolean;
      /** The auto corrected text or the text with suggested corrections. Only returned if `from.text.autoCorrected` or `from.text.didYouMean` is `true`. */
      value: string;
      /** Wherether or not the API has suggested corrections to the text. */
      didYouMean: boolean;
    };
  };
  /** The raw response from Google Translate servers. Only returned if `options.raw` is `true` in the request options. */
  raw: string;
}

interface CustomError extends Error {
  [key: string]: any;
}

/**
 * @function translate
 * @param text The text to be translated.
 * @param options The options object for the translator.
 * @returns The result containing the translation.
 */
export async function translate(text: string, options: TranslateOption): Promise<TranslateResponse> {
  if (typeof options !== 'object') options = {};
  text = String(text);

  // Check if a lanugage is in supported; if not, throw an error object.
  let error: CustomError | null = null;
  [options.from, options.to].forEach((lang) => {
    if (lang && !isSupported(lang)) {
      error = new Error() as CustomError;
      error.code = 400;
      error.message = `The language '${lang}' is not supported.`;
    }
  });
  if (error) throw error;

  // If options object doesn"t have "from" language, set it to "auto".
  if (!Object.prototype.hasOwnProperty.call(options, 'from')) options.from = 'auto';
  // If options object doesn"t have "to" language, set it to "en".
  if (!Object.prototype.hasOwnProperty.call(options, 'to')) options.to = 'en';
  // If options object has a "raw" property evaluating to true, set it to true.
  options.raw = Boolean(options.raw);

  // Get ISO 639-1 codes for the languages.
  options.from = getISOCode(options.from) as string;
  options.to = getISOCode(options.to) as string;

  // Generate Google Translate token for the text to be translated.
  const token = await generate(text);

  // URL & query string required by Google Translate.
  const baseUrl = 'https://translate.google.com/translate_a/single';
  const data = {
    client: 'gtx',
    sl: options.from,
    tl: options.to,
    hl: options.to,
    dt: ['at', 'bd', 'ex', 'ld', 'md', 'qca', 'rw', 'rm', 'ss', 't'],
    ie: 'UTF-8',
    oe: 'UTF-8',
    otf: 1,
    ssel: 0,
    tsel: 0,
    kc: 7,
    q: text,
    [token.name]: token.value
  };

  // Append query string to the request URL.
  const url = `${baseUrl}?${stringify(data)}`;

  // let requestOptions;
  let response: Promise<Dispatcher.ResponseData>;
  // If request URL is greater than 2048 characters, use POST method.
  if (url.length > 2048) {
    delete (data as Partial<typeof data>).q;
    // requestOptions = [
    //   `${baseUrl}?${stringify(data)}`,
    //   {
    //     method: 'POST',
    //     body: new URLSearchParams({ q: text }).toString(),
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    //     }
    //   }
    // ];
    response = request(`${baseUrl}?${stringify(data)}`, {
      method: 'POST',
      body: new URLSearchParams({ q: text }).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    });
  } else {
    // requestOptions = [url];
    response = request(url);
  }

  // Request translation from Google Translate.
  // const response = await request(...requestOptions);
  const body: any = await (await response).body.json();

  const result = {
    text: '',
    from: {
      language: {
        didYouMean: false,
        iso: ''
      },
      text: {
        autoCorrected: false,
        value: '',
        didYouMean: false
      }
    },
    raw: ''
  };

  // If user requested a raw output, add the raw response to the result
  if (options.raw && body) {
    if (typeof body == 'string') {
      result.raw = body;
    } else {
      result.raw = JSON.stringify(body, null, 2);
    }
  }

  // Parse body and add it to the result object.
  body[0].forEach((obj: string[]) => {
    if (obj[0]) {
      result.text += obj[0];
    }
  });

  if (body[2] === body[8][0][0]) {
    result.from.language.iso = body[2];
  } else {
    result.from.language.didYouMean = true;
    result.from.language.iso = body[8][0][0];
  }

  if (body[7] && body[7][0]) {
    let str = body[7][0];

    str = str.replace(/<b><i>/g, '[');
    str = str.replace(/<\/i><\/b>/g, ']');

    result.from.text.value = str;

    if (body[7][5] === true) {
      result.from.text.autoCorrected = true;
    } else {
      result.from.text.didYouMean = true;
    }
  }

  return result;
}

export default translate;
const _languages = languages;
export { _languages as languages };
