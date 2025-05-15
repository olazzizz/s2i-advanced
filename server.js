const http = require('http');
const port = process.env.PORT || 8080;
const version = process.env.VERSION || '1.0';
const message = process.env.MESSAGE || 'Hello from S2I';

const server = http.createServer((req, res) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head><title>S2I Advanced App</title></head>
      <body>
        <h1>${message}</h1>
        <p>Version: ${version}</p>
        <p>Server time: ${new Date().toISOString()}</p>
      </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
