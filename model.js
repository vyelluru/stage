const Replicate = require('replicate');
const { readFile } = require("node:fs/promises");


const model = async() => {

    const api_key = process.env.REPLICATE_API_TOKEN;
    
    const replicate = new Replicate();

    const input = {
        image: await readFile("/Users/Varun/Desktop/testRoom.jpg"),
        prompt: "Make this room a modern New York living room."
    };

    const output = await replicate.run("timothybrooks/instruct-pix2pix:30c1d0b916a6f8efce20493f5d61ee27491ab2a60437c13c588468b9810ec23f", { input });
    return output
    //=> ["https://replicate.delivery/pbxt/kfL8fyBkHllh4kfEJbulrcn...

}
module.exports = model;