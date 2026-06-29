const express = require('express');
const app = express()
//const port = 3000

app.get('/', (req, res) => {
  res.send({status:1,msg:"Hello Taloda"})
})

// app.listen(port, () => { 
//   console.log(`Example app listening on port ${port}`)
// })
console.log("start the server on port no 8000")

app.listen("8000")