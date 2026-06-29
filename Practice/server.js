let http = require("http")

let server = http.createServer( (req, res) => {
    

    if (req.url =="/news"){
      res.end("Badadada Foundation News")
    }

    if (req.url =="/"){
        res.end("Welcome to Taloda")
    }

})

console.log("Hello Morankar dada")
server.listen("8000")