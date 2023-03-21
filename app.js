const express = require('express');
const app = express();
const path =require ('path');
const router = express.Router();


app.get('/', (req, res)=>{//new
    res.sendFile(__dirname+ '/index.html');
})








app.listen(process.env.port|| 3000,()=> 
console.log('listening on port 3000'));