const express = require('express');
const app = express()
//const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
  res.send({status:1,msg:"Hello Taloda"})
})

// app.listen(port, () => { 
//   console.log(`Example app listening on port ${port}`)
// })

app.post('/login', (req,res)=>{
    console.log(req.body)//object
    
    res.send({status:1,msg:"Login API",data:req.body})
})
console.log("start the server on port no 8000")

app.listen("8000")