const express = require('express');
const dotenv = require("dotenv").config();
const axios = require('axios');
const app = express();
const port = process.env.PORT;
const model = require("./model.js")

app.listen(port, () => {            
    console.log(`localhost:${port}`); 
});

app.get('/', async (req, res) => {
    const outputUrl = await model(); 
    
    const response = await axios.get(outputUrl, {
        responseType: 'arraybuffer' 
    });

    res.set('Content-Type', 'image/jpg'); 

    res.send(response.data);
});