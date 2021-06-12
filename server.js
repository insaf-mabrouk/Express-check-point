
const express = require('express')
const app = express()
const port = 4000
var router = express.Router()
const workingTime = require('./middleware/workingTime')

// app.get('/', (req, res) => {
//   res.send('YES!')
// })
function logger (req,res,next) {
  console.table({method:req.method , path: req.url}) 
  next()
}

app.get('/',workingTime,(req,res)=>{
 res.sendFile(__dirname+"/components/home.html")
 
})

app.get('/services',workingTime,(req,res)=>{
  res.sendFile(__dirname+"/components/services.html")
})

app.get('/contact',workingTime,(req,res)=>{
  res.sendFile(__dirname+"/components/contact.html")
  
})

app.get('/components/style.css',(req,res)=>{
  res.sendFile(__dirname+'/components/style.css')
})
app.use(workingTime);
// app.use(function (req, res, next) {
//   console.log('Time:', Date.now())
//   next()
// })
// router.use(function (req, res, next) {
//   console.log('Time:', Date.now())
//   next()
// })

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`)
})
