let http = require("http")

let server = http.createServer( (req, res) => {
    res.end("Welcome to Taloda")

})

console.log("Hello Morankar dada")
server.listen("8000")