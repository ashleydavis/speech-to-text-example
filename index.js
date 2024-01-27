const OpenAI = require("openai");
const fs = require("fs");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY environment variable.");
}

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
});

async function main() {

    const response = await openai.audio.transcriptions.create({
        model: "whisper-1",
        response_format: "json",
        file: fs.createReadStream("./example-speech.webm"),
    });

    console.log(response);
}

main()
    .catch(err => {
        console.error("Error running example:");
        console.error(err);
        process.exit(1);
    });