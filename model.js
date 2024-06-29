process.env.PYTORCH_CUDA_ALLOC_CONF = 'max_split_size_mb:512';


const model = async() => {

    const Replicate = require("replicate");

    api_key = process.env.REPLICATE_API_TOKEN;

    const replicate = new Replicate();

    const input = {
        //image: "https://media.architecturaldigest.com/photos/62f3c04c5489dd66d1d538b9/master/pass/_Hall_St_0256_v2.jpeg",
        image: "https://raw.githubusercontent.com/timothybrooks/instruct-pix2pix/main/imgs/example.jpg",
        //prompt: "Make this room a modern San Francisco living room.",
        prompt: "Make him a astronaut",
        device: "cpu"
    };

    const output = await replicate.run("timothybrooks/instruct-pix2pix:30c1d0b916a6f8efce20493f5d61ee27491ab2a60437c13c588468b9810ec23f", { input });
    return output;

};

module.exports = model;