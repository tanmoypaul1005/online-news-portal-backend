const express = require('express')
const app = express()
const port = 5000


const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());



// Database Start
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://emaWatson:EA5gBOboBQnOMnlg@cluster0.nswkl.mongodb.net/emaJohnStor?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const UserCollection = client.db("Online-News-Protal").collection("user");

console.log("connect");


app.post('/user', (req, res) => {
  const order=req.body;
  UserCollection.insertOne(order)
  .then(result =>{
    console.log(result)
})
console.log(order);
})


app.get('/user', (req, res) => {
  UserCollection.find()
  .toArray((err,documents)=>{
  res.send(documents[0]);
  })  
})

});
// Database end


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})