# Language Teacher Agent API

This is a conversational AI agent API designed to teach languages. It uses OpenAI's GPT-4o-mini model to provide a teaching experience tailored to the user's difficulty level.

## Features

-   Conversational teaching.
-   Supports `beginner`, `intermediate`, and `advanced` difficulty levels.
-   User can specify their native language and the target language.
-   Built with TypeScript, Express, and OpenAI.

## Prerequisites

-   Node.js
-   OpenAI API Key

## Local Development

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file based on `.env.example` and add your `OPENAI_API_KEY`.
4.  Start the development server:
    ```bash
    npm run dev
    ```

## Deployment on Railway

1.  **Sign Up/Login**: Go to [Railway.app](https://railway.app/) and sign up or login.
2.  **New Project**: Click "New Project" and select "Deploy from GitHub repo".
3.  **Select Repo**: Choose this repository.
4.  **Variables**:
    -   Go to the "Variables" tab in your Railway project dashboard.
    -   Add `OPENAI_API_KEY` with your OpenAI API key.
    -   Railway will automatically set the `PORT` variable.
5.  **Deploy**: Railway should automatically detect the `package.json` and build the project using `npm run build` and start it with `npm start`.

## Usage

**Endpoint**: `POST /api/chat`

**Request Body**:

```json
{
  "nativeLanguage": "English",
  "targetLanguage": "Spanish",
  "difficulty": "beginner",
  "messages": [
    {
      "role": "user",
      "content": "Hola!"
    }
  ]
}
```

**Example Curl Command**:

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "nativeLanguage": "English",
    "targetLanguage": "Spanish",
    "difficulty": "beginner",
    "messages": [
      { "role": "user", "content": "How do I say hello?" }
    ]
  }'
```

**Response**:

```json
{
  "response": "To say 'hello' in Spanish, you can say 'Hola'. It's a common greeting used in almost any situation!"
}
```

