# speech-to-text-example

An example of converting speech to text using the OpenAI API.

This is a stepping stone to learning how to control a chatbot through voice commands.

## Setup

```bash
cd speech-to-text-example
npm install
```

## Run it

```bash
set OPENAI_API_KEY=<your-api-key>
npm start
```

The example loads the audio in the repo and produces this output:

```json
{
  "text": "This is an example of doing voice commands. I'm hoping that what I'm saying is going to come through clearly in a speech-to-text API. Thank you for listening."
}
```