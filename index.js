const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const model = require("./model.js");
const path = require('path');

const app = express();
app.use(cors());
require('dotenv').config();
const port = 5000;

app.get('/original', async (req, res) => {
  try {
    const imagePath = path.join("/Users/Varun/Desktop/testRoom.jpg");
    res.sendFile(imagePath);
    res.contentType('image/jpeg');
  } catch (error) {
    console.error('Error reading original image:', error);
    res.status(500).send('Error reading original image');
  }
});

app.get('/edited', async (req, res) => {
  try {
    const modelOutput = await model();
    console.log(modelOutput);
    res.json(modelOutput);
  } catch (error) {
    console.error('Error processing edited image:', error);
    res.status(500).send('Error processing edited image');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});