import cheerio, { AnyNode } from 'cheerio';
import flatten from 'lodash.flatten';
import queryString from 'querystring';
import request from 'request';
// var fs = require('fs');

const baseURL = 'http://images.google.com/search?';

const imageFileExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'];

export default function gis(
  opts: { searchTerm: string; queryStringAddition?: any; filterOutDomains?: ConcatArray<string>; userAgent?: string },
  done?: (error: Error, result?: { url: string; width: number; height: number }[] | undefined) => void
) {
  let searchTerm;
  let queryStringAddition;
  let filterOutDomains = ['gstatic.com'];
  let userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/117.0';
  opts = Object.assign({ queryStringAddition, filterOutDomains, userAgent }, opts);

  if (typeof opts === 'string') {
    searchTerm = opts;
  } else {
    searchTerm = opts.searchTerm;
    queryStringAddition = opts.queryStringAddition;
    if (opts.filterOutDomains) {
      filterOutDomains = filterOutDomains.concat(opts.filterOutDomains);
    }
    if (opts.userAgent) {
      userAgent = opts.userAgent;
    }
  }

  let url =
    baseURL +
    queryString.stringify({
      tbm: 'isch',
      q: searchTerm
    });

  if (filterOutDomains) {
    url += encodeURIComponent(' ' + filterOutDomains.map(addSiteExcludePrefix).join(' '));
  }

  if (queryStringAddition) {
    url += queryStringAddition;
  }
  const reqOpts = {
    url,
    headers: {
      'User-Agent': userAgent
    }
  };

  // console.log(reqOpts.url);
  request(reqOpts, parseGISResponse);

  function parseGISResponse(error: any, response: request.Response, body: string | AnyNode | AnyNode[] | Buffer) {
    if (error) {
      if (typeof done == 'function') done(error);
      return;
    }
    const $ = cheerio.load(body);
    const scripts = $('script');
    const scriptContents = [] as string[];
    for (let i = 0; i < scripts.length; ++i) {
      if (scripts[i].children.length > 0) {
        const child = scripts[i].children[0] as unknown as ChildNode & Record<string, any>;
        const content = child.data;
        if (containsAnyImageFileExtension(content)) {
          scriptContents.push(content);
        }
      }
    }

    if (typeof done == 'function') done(error, flatten(scriptContents.map(collectImageRefs)));

    function collectImageRefs(content: string) {
      const refs = [];
      const re = /\["(http.+?)",(\d+),(\d+)\]/g;
      let result;
      while ((result = re.exec(content)) !== null) {
        if (result.length > 3) {
          const ref = {
            url: result[1],
            width: +result[3],
            height: +result[2]
          };
          if (domainIsOK(ref.url)) {
            refs.push(ref);
          }
        }
      }
      // if (refs.length < 1) {
      //   fs.writeFileSync('content.txt', content, { encoding: 'utf8' });
      // }
      return refs;
    }

    function domainIsOK(url: string | any[]) {
      if (!filterOutDomains) {
        return true;
      } else {
        return filterOutDomains.every(skipDomainIsNotInURL);
      }

      function skipDomainIsNotInURL(skipDomain: string) {
        return url.indexOf(skipDomain) === -1;
      }
    }
  }
}

function addSiteExcludePrefix(s: string) {
  return '-site:' + s;
}

function containsAnyImageFileExtension(s: string) {
  const lowercase = s.toLowerCase();
  return imageFileExtensions.some(containsImageFileExtension);

  function containsImageFileExtension(ext: string) {
    return lowercase.includes(ext);
  }
}
