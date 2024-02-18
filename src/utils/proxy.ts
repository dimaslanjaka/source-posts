import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

export function readProxy() {
  const file = join(process.cwd(), 'proxy.txt');
  return readFileSync(file, 'utf-8')
    .split(/\r?\n/gm)
    .map((str) => str.trim())
    .filter((str) => str.length > 0);
}

export function randomProxy() {
  return readProxy()[Math.floor(Math.random() * readProxy().length)];
}

export function removeProxy(str: string) {
  const proxies = readProxy();
  const index = proxies.findIndex((proxy) => proxy == str);
  if (index !== -1) {
    delete proxies[index];
  }
  const file = join(process.cwd(), 'proxy.txt');
  writeFileSync(file, proxies.join('\n'));
}
