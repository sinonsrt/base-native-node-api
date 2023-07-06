import http from 'node:http';

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/') {
    return res.end('This is a native basic GET');
  }

  if (method === 'POST' && url === '/') {
    return res.end('This is a native basic POST');
  }

  return res.end('Hello World');
});

server.listen(3333, () => console.log('Up 🚀'));
