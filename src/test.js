// import translate from '@iamtraction/google-translate';

import * as translate from './translatorAPI/index';

/** @type {Parameters<typeof translate>[1]} */
const options = {
  to: 'es',
  from: 'id'
};
const text = 'halo dunia';
translate.default(text, options).then(console.log).catch(console.error);
