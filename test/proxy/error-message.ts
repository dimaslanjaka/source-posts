const proxyResult = `http://5.75.161.31:41761 failed Navigation timeout of 40000 ms exceeded
socks5://5.75.161.31:41761 failed net::ERR_TIMED_OUT at http://www.google.com
https://5.75.161.31:41761 failed net::ERR_TIMED_OUT at http://www.google.com
socks://5.75.161.31:41761 failed net::ERR_TIMED_OUT at http://www.google.com
socks4://5.75.161.31:41761 failed net::ERR_TIMED_OUT at http://www.google.com`.split(/\r?\n/);
const proxyError =
  /^net::ERR_CONNECTION_RESET|net::ERR_TIMED_OUT|net::ERR_TUNNEL_CONNECTION_FAILED|net::ERR_PROXY_CONNECTION_FAILED|net::ERR_INVALID_AUTH_CREDENTIALS|net::ERR_SOCKS_CONNECTION_FAILED/gim;
const hasError = proxyResult.filter((s) => proxyError.test(s));
console.log(hasError);
