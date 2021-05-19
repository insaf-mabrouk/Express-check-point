
const express = require('express')
const app = express()
const port = 4000

// app.get('/', (req, res) => {
//   res.send('YES!')
// })
function logger (req,res,next) {
  console.table({method:req.method , path: req.url}) 
  next()
}

app.get('/',logger,(req,res)=>{
 res.sendFile(__dirname+"/components/home.html")
 
})

app.get('/services',logger,(req,res)=>{
  res.sendFile(__dirname+"/components/services.html")
})

app.get('/contact',logger,(req,res)=>{
  res.sendFile(__dirname+"/components/contact.html")
  
})

app.get('/components/style.css',(req,res)=>{
  res.sendFile(__dirname+'/components/style.css')
})

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`)
})
