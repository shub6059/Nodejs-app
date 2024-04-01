const http = require('http');

const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // Change content type to text/html
    res.write('<html><head><title>Welcome to the World of Cloud</title>');
    res.write('<style>body { font-family: Arial, sans-serif; color: #007bff; }</style>'); // Add CSS for font and color
    res.write('</head><body>');
    res.write('<h1>Welcome to the World of Cloud Shubham Patil !!!</h1>'); // Your content
    res.write('</body></html>');
    res.end();
});

server.listen(port, () => {
    console.log(`Server running on port ${port}/`);
});

module.exports = server;
