const express = require('express');
const dotenv = require("dotenv").config();
const axios = require('axios');
const app = express();
const port = process.env.PORT || 4000;
const model = require("./model.js");
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.listen(port, () => {            
    console.log(`Server is running on http://localhost:${port}/message`); 
});

app.get('/message', async (req, res) => {
    try {
        const modelResult = await model();
        const response = await axios.get(modelResult, { responseType: 'arraybuffer' });
        res.set('Content-Type', 'image/jpg');
        res.send(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});