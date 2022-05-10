const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3001
const { MongoClient } = require("mongodb");
const uri = process.env.DB;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Server running la")
})

app.get('/test', async(req, res) => {
  const client = new MongoClient(uri);
  await client.connect();
  const users = await client.db('Final_exam_SDTE').collection('test').find({}).toArray();
  await client.close();
  if(users){
    console.log(users);
    res.status(200).send(users);
  }else{
    console.log("Error found.")
    res.status(404).send("Error can't do ops.");
  }
  
})

app.listen(port, () => {
  console.log(`Server run at http://localhost:${port}`)
})