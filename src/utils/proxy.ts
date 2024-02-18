import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

/** read proxy from proxy.txt */
export function readProxy() {
  const file = join(process.cwd(), 'proxy.txt');
  const text = readFileSync(file, 'utf-8');
  const regex =
    /(\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b):?(\d{2,5})/gm;
  let m: RegExpExecArray | null;
  const proxies = [] as string[];

  while ((m = regex.exec(text)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    if (m[0]) proxies.push(m[0]);
  }
  return proxies;
}

/** get random proxy from list */
export function randomProxy() {
  const proxies = readProxy();
  return proxies[Math.floor(Math.random() * proxies.length)];
}

/** remove proxy from list */
export function removeProxy(str: string) {
  const proxies = readProxy();
  const index = proxies.findIndex((proxy) => proxy == str);
  if (index !== -1) {
    delete proxies[index];
  }
  const file = join(process.cwd(), 'proxy.txt');
  writeFileSync(file, proxies.join('\n'));
}
