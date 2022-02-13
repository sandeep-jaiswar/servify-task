require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./utils/db');

const app= express();
app.use(cors())
const port= process.env.PORT || 3000;

app.get('/',async (req,res)=>{
  const client = req.headers.host.split('.')[0];
  const dbInstance = await db();
  const dbo = dbInstance.db('TASK');
  dbo.collection('CLIENTS').find({name:client}).toArray((err,response)=>{
    if(err) throw err;
    dbInstance.close();
    console.log(response);
    res.send(response);
  })

})

app.listen(port,()=>{
  console.log(`server is running on port ${port}`);
})
