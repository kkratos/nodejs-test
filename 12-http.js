const http = require('http');

const PORT = 5000;
const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('Home Page')
  }
  else if(req.url === '/about'){
    res.end('About Page')
  }
  else {
    res.end(`
    <h1>Oops!!</h1>
    <p>We cannot seem to find the page</p>
    <a href="/">go back home </a>
    `)
  }
})

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})
