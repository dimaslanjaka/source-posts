import Bluebird from 'bluebird';
import https from 'https';
import { SocksProxyAgent } from 'socks-proxy-agent';
import { readProxy } from '../../src/utils/proxy';

// const agent = new SocksProxyAgent('socks://username:password@45.192.223.93:33544');

(async () => {
  const proxies = readProxy();

  while (proxies.length > 0) {
    const proxy = proxies.shift();
    if (!proxy) continue;
    const agent = new SocksProxyAgent('socks://' + proxy);

    await new Bluebird((resolve) => {
      https
        .get('https://ip.me', { agent }, (res) => {
          console.log(proxy, res.statusCode);
          resolve();
        })
        .on('error', (e) => {
          console.log(proxy, e.message);
          // const regex = /ECONNREFUSED/g;
          // if (regex.test(e.message)) removeProxy(proxy);
          resolve();
        })
        .on('end', function () {
          resolve();
        });
    });
  }
})();
