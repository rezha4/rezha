---
title: "Voice Chat Bot"
date: "2025-12-07"
slug: "voice-chat-bot"
tags: ["build-in-public", "ai"]
---

# Exploring Transformers.js

After last week's attempt at self hosting AI with Ollama, now I'm moving closer to client by letting them host the AI themselves. This can be achieved using transformers.js, where they utilize WASM (or WebGPU) to run AI in-browser.

# Step by Step Guide

We'll be making a client side app using React and transformers.js, it will utilize several models that will work together performing STT (speech to text), LLM response and the TTS (text to speech). The app itself is a voice chat app where users chat with AI, voice based input and output.

First, we'll setup a React app. I will be using bun alongside vite, and daisyui (tailiwind) for styling.

```bash
mkdir voiceChatBot && cd voiceChatBot
bun create vite . -- --template react-ts
bun add tailwindcss @tailwindcss/vite
bun add --dev daisyui
```

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

```css
/* index.css */
@import "tailwindcss";
@plugin "daisyui" {
  themes: light --default;
}
```

Then, we'll go straight to working with AI pipelines.

- make sure to install transformers package from huggingface

```bash
bun add @huggingface/transformers
# for text to speech we will utilize kokoro-js
bun add kokoro-js
```

- we will be utilizing web workers to do all the heavy lifting (loading models and inference)

```javascript
// src/workers.js
import { pipeline } from "@huggingface/transformers";
import { KokoroTTS } from "kokoro-js";

// singleton pattern to initialize
let sttPipeline = null;
let llmPipeline = null;
let ttsPipeline = null;

const initializePipeline = async () => {
  try {
    sttPipeline = await pipeline(
      "automatic-speech-recognition",
      "Xenova/whisper-tiny.en"
    );

    llmPipeline = await pipeline(
      "text-generation",
      "onnx-community/Llama-3.2-1B-Instruct"
    );

    ttsPipeline = await KokoroTTS.from_pretrained(
      "onnx-community/Kokoro-82M-ONNX"
    );

    self.postMessage({ type: "ready" });
  } catch (error) {
    self.postMessage({ type: "error", error: String(error) });
  }
};

const generateLLMResponse = async (text) => {
  // injecting system prompt
  const messages = [
    {
      role: "system",
      content:
        "You are a friendly chat partner. Keep responses open ended. Answer in a single short sentence.",
    },
    { role: "user", content: text },
  ];

  // tweaking configs to make sure response are correct
  const result = await llmPipeline(messages, {
    max_new_tokens: 64,
    temperature: 0.7,
    do_sample: true,
    top_p: 0.95,
    repetition_penalty: 1.1,
  });

  // process response text
  const generatedText = result[0].generated_text;
  const assistantResponse =
    generatedText.at(-1)?.content || generatedText;

  return assistantResponse;
};

const generateSpeech = async (text) => {
  const audio = await ttsPipeline.generate(text, {
    voice: "af_bella",
  });

  // sending audio blob to react to be later directly played
  const wavBlob = audio.toBlob();

  self.postMessage({
    type: "audio",
    data: { blob: wavBlob, text },
  });

  return audio;
};

self.addEventListener("message", async (e) => {
  const { type, data } = e.data;

  try {
    switch (type) {
      case "initialize":
        await initializePipeline();
        break;

      // main flow of the app
      case "stt":
        const text = await sttPipeline(data.audio);
        self.postMessage({ type: "transcription", data: { text } });

        const response = await generateLLMResponse(text);
        self.postMessage({ type: "llmResponse", data: { response } });

        await generateSpeech(response);
        break;
    }
  } catch (error) {
    self.postMessage({ type: "error", error: String(error) });
  }
});
```

We need workers API to make sure our app does not crash the JS main thread.
In the code above, we first initialize all 3 pipeline with a singleton pattern.
You can see that transformers.js provide us with easy to use API for pipeline initialization, and you can read more about different tasks and models to use on their [docs page](https://huggingface.co/docs/transformers.js/en/index#supported-tasksmodels)

After initialization, we simply wait for React message event to be sent to worker, "stt", and the the main flow start:
first, we turn the user's voice chat into text.
second, we generate LLM response based on that text.
lastly, the response will be read out loud by generateSpeech function (kokoro-js).

Here's the React snippets:

```tsx
function App() {
  // put your worker in ref
  const worker = useRef<Worker | null>(null);

  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(
        new URL("worker.js", import.meta.url),
        {
          type: "module",
        }
      );
    }

    worker.current.addEventListener("message", (e) => {
      const { type, data, error } = e.data;

      switch (type) {
        // display STT result in UI
        case "transcription":
          setUserText(data.text);
          break;

        // display LLM result in UI
        case "llmResponse":
          setLlmText(data.response);
          break;

        // immediately play the audio blob in-browser
        case "audio": {
          const url = URL.createObjectURL(data.blob);

          const audio = new Audio(url);
          audio.play();

          audio.onended = () => URL.revokeObjectURL(url);

          break;
        }
      }
    });
  }, []);
}
```

You can see the complete code & demo here:

- code: https://github.com/rezha4/voicechatbot
- demo: https://ai-voicechatbot.netlify.app/

# Conclusion

Tranformers.js is a great way to leverage AI without even needing a server, but it comes with a price of accuracy & quality.  
I need more time exploring use cases where transformers.js will really shine, but for now if you don't want to use big corp AI and still need quality you are better off using self hosted model on server.
