require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/x',(req,res)=>{
    res.send("<h1>this is x route</h1>")
})
app.get('/login',(req,res)=>{
    res.send('please login at this page')
})
app.get("/saif",(req, res)=>{
    res.send('saif ali')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})