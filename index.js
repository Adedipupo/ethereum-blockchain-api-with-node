require('dotenv').config();
const express= require('express')
const app =express()
const routes = require('./routes/routes')
const Web3 = require('web3');
const mongoose = require('mongoose')
const contract = require('truffle-contract');
app.use(express.json())

const PORT = process.env.PORT || 1234

app.get('/',(req, res)=>{
    res.send("api is live...")
  });

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {app.listen(PORT, () => {
    console.log(`Connected to mongodb successfully,Server running on port ${PORT}`)
  })})
  .catch((err) => console.log(err))

