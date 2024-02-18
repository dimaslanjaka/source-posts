import { join } from 'path';
import { fs, writefile } from 'sbg-utility';

/** read proxy from proxy.txt */
export function readProxy() {
  const file = join(process.cwd(), 'proxy.txt');
  // create proxy.txt
  if (!fs.existsSync(file)) writefile(file, '');
  // read proxy.txt
  const text = fs.readFileSync(file, 'utf-8');
  // parse content of proxy.txt
  const lines = text.split(/\r?\n/gm);
  const proxies = [] as string[];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const regexIpPort =
      /((\b(.*)\b:\b(.*)\b@)?\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b):?(\d{2,5})/gm;
    let m: RegExpExecArray | null;

    while ((m = regexIpPort.exec(line)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regexIpPort.lastIndex) {
        regexIpPort.lastIndex++;
      }
      if (m[0] && !proxies.includes(m[0])) proxies.push(m[0]);
    }

    const regexIpSpacePort =
      /(\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b)(?:.*)(\b\d{2,5}\b)/gm;
    while ((m = regexIpSpacePort.exec(line)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regexIpSpacePort.lastIndex) {
        regexIpSpacePort.lastIndex++;
      }
      if (m[1] && m[2]) {
        const proxy = m[1].trim() + ':' + m[2].trim();
        if (!proxies.includes(proxy)) proxies.push(proxy);
      }
    }
  }

  const proxyText = proxies.join('\n');

  // rewrite proxy
  if (proxyText != text) {
    writefile(file, proxyText);
  }

  return proxies;
}

/** get random proxy from list */
export function randomProxy() {
  const proxies = readProxy();
  return proxies[Math.floor(Math.random() * proxies.length)];
}

/** remove proxy from list */
export function removeProxy(str?: string) {
  if (!str) return;
  const proxies = readProxy();
  const index = proxies.findIndex((proxy) => proxy == str);
  if (index !== -1) {
    delete proxies[index];
  }
  const file = join(process.cwd(), 'proxy.txt');
  writefile(file, proxies.filter((str) => str.length > 0).join('\n'));
}
