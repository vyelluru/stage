const Replicate = require('replicate');
const { readFile } = require("node:fs/promises");
const path = require('path');

const model = async (prompt, imagePath = "/Users/Varun/Desktop/prefilled.jpg") => {
    const api_key = process.env.REPLICATE_API_TOKEN;
    
    const replicate = new Replicate();

    const input = {
        image: await readFile(imagePath),
        prompt: prompt
    };

    //console.log('Sending to Replicate:', JSON.stringify(input)); // Log the input for debugging

    try {
        const output = await replicate.run(
            "timothybrooks/instruct-pix2pix:30c1d0b916a6f8efce20493f5d61ee27491ab2a60437c13c588468b9810ec23f",
            { input }
        );
        return output;
    } catch (error) {
        console.error('Error in Replicate API call:', error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = model;