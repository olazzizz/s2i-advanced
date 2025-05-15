const http = require('http');
const port = process.env.PORT || 8080;
const version = process.env.VERSION || '1.0';
const message = process.env.MESSAGE || 'Hello from S2I';

const server = http.createServer((req, res) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  
  // Add a simple API endpoint
  if (req.url === '/api/info') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      version: version,
      message: message,
      time: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    }));
    return;
  }
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head><title>S2I Advanced App - Updated</title></head>
      <body>
        <h1>${message}</h1>
        <p>Version: ${version}</p>
        <p>Server time: ${new Date().toISOString()}</p>
        <p><a href="/api/info">API Info</a></p>
      </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
