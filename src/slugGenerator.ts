import esMain from 'es-main';

export function slugGenerator(str: string) {
  // Remove any special chars, ignoring any spaces or hyphens
  let slug = str.replace(/[^a-zA-Z0-9 -]/g, '');

  // Replace any spaces with hyphens
  // slug = slug.split(' ').join('-');
  slug = slug
    .split(/(?=[A-Z])/)
    .join('-')
    .split(' ')
    .join('-');

  // Chuck it back into lowercase
  slug = slug.toLowerCase();

  // Valiate out any multiple inline hyphens
  slug = slug.split(/-+/).join('-');

  const lastChar = slug.substring(slug.length - 1, slug.length);
  if (lastChar == '-') {
    slug = slug.substring(0, slug.length - 1);
  }
  return slug;
}

export default slugGenerator;

const isRequireMain = typeof require !== 'undefined' && require.main === module;
const isEsMain = esMain(import.meta);

if (isRequireMain || isEsMain) {
  const str = 'Deprecated WebSecurityConfigurerAdapter Solution';
  const slug = slugGenerator(str);
  // Dump it back to the destination input
  console.log(slug == 'deprecated-web-security-configurer-adapter-solution');
  console.log(slug);
}
