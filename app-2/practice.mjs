//import module
import http from "http"



// Save the result of the createServer() method in a variable named server.
const server = http.createServer((req, res) => {
    res.end("hello world")
})

// Call the server's listen() method with the port number 3001.

server.listen(3000, () => {console.log("yes sir we running")})