console.log(Object.values({ socks5: '', http: '', https: '', socks: '', socks4: '' }).some((s) => s.length == 0));
console.log(
  Object.values({ socks5: 'cxcxxc', http: 'fdsf', https: 'sdsdsd', socks: 'sdsdsd', socks4: 'sdsds' }).some(
    (s) => s.length == 0
  )
);
