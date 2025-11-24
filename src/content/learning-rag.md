---
title: "My RAG Learning Notes"
date: "2025-11-23"
slug: "rag-learning-notes"
tags: ["build-in-public"]
---

I've been creating RAG on my free time this week. Been going through 3 approaches of learning: youtube tutorial, my own implementation with 3rd party services, and implementation with local hosted solutions. Here's what i know so far:

## What is RAG

RAG (retrieval-augmented generation) is a version of LLM that strictly work within your given context. It turns text input into vectors, retrieve data by performing similarity search, then generate response with the result (augmentation).  
That's a bunch of big words, to put it simply: RAG is an AI that answer ONLY with knowledge you provide.  
It's useful to combat hallucination, to work with the most up to date data, or even to work with AI on private data that are not allowed to be shared to big AI corps (can be achieved if you self host it)

## How to Make RAG

Before going straight into technicals, let's understand the basic: main concept and general flow.

### Main Concept

Here are the key moving part that makes up an RAG:

- Embedding Model  
  In order for correct context retrieval, data (mostly texts) are needed to be turned into vector - this is where embedding comes in. it embeds data with vector, making it easy for retrieval by comparing vector similarity (closeness)
- (Vector) Database  
  Context that had been embedded with vectors need to be stored together. A regular database may still work, but for faster similarity search vector database is preferred.
- LLM Model  
  To differentate RAG with a basic search algorithm, LLM is needed lol.
  On a more serious note, LLM's job is to answer queries by augmenting its generation with context. System prompt are also needed and some strict rule such as "only answer with provided context" and "if you don't know the answer, say so" is needed.

### RAG Flow

- Document Ingestion  
  In order for the RAG to work properly, it needs to be "fed" documents first, or in more familiar tech term: seeding the database.  
  This step involves several stages, but generally falls in this direction:

  - Documents sent in bulk to the server
  - Server split those documents into chunks of readable texts, ready to be looped
  - Embedding happens on each loop, turning chunk of texts into vectors
  - Chunk + vectors + additional metadata are inserted into database

  Doing this with free plan (my 1st attempt) is so slow, I need to explicitly wait and only embed 3 chunks every minute - cuz free plan is rate limited.  
  Even on self host solution, this may take some time - depending on how big your documents are, because in each loop embedding happens (and DB insertion).

- Querying  
  After finishing step 1, your RAG is ready to be queried.  
  On each query,

### Coding an RAG Application

After understanding the concept and main flow, you can create RAG with any tools you like. For this blog, I'll share steps I take on creating RAG with bun, hono, sqlite-vector and ollama.

First, I initialized a hono app with bun.

sqlite comes with bun and can be imported with

```typescript
import { Database } from "bun:sqlite";
```

sqlite-vector is needed to turn regular sqlite into a vector database:

```typescript
import * as sqliteVec from "sqlite-vec";

// DB initialization
const db = new Database("db");

// extending sqlite with vector database capability
sqliteVec.load(db);
```

I use Ollama to self host LLMs, both the embedding and the chatbot. Langchain has an useful SDK to easily work with Ollama on a JS environment.

```typescript
import { OllamaEmbeddings } from "@langchain/ollama";

// embedding model
const embeddings = new OllamaEmbeddings({
  model: "embeddinggemma",
  baseUrl: "http://localhost:11434", // ollama run locally on port 11434
});

// LLM generation
const response = await fetch("http://localhost:11434/api/generate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "gemma3",
    prompt: prompt,
    stream: false, // get full response at once
  }),
});
```

Feel free to read exact code implementation on [github](https://github.com/rezha4/smallrag). Its just a basic 2 route: document ingestion and querying, exactly what I explained in RAG Flow section.

### Ability & Limitation

I've tried hosting this on my VPS, with as little as 4 gigs of RAM and it run... well let's just say it runs. It can ingest data and can be queried just fine, but on trickier questions it sometimes need several query to get it right (still don't know why), and at times it just straight up gave the wrong answer.  
The culprit might be of theese 3: small VPS spec, small LLM or my datasets are just not large enough.

<!-- ## How (i think) an RAG Works

### Embedding

LLM can work with texts just fine, and you might have a working version of RAG with just a simple non vector database. But it won't be efficient, that's why texts need to be embedded with vectors: preparing it for an easy retrieval.

### Retrieval

Machine works fast on numbers, in this case the machine works with vectors - much faster than infering text first with LLM. Vectors are coordinates in x and y dimension, each chunk of context has its own embedded vector. When doing retrieval, vector database is the one doing the heavy lifting.

### Augmentation -->

## Conclusion

RAG is great because you can restrict AI LLM from hallucinating and answer based on your provided context only, use cases can be: product customer service, tutor for specific subject/documents, documentation assistant, and so many more.

Being able to be run on a small spec machine is also great, since you only need it to be accurate enough on your data only.

Next I will explore more small spec AI, I'll try transformers.js as my next build-in-public project.
