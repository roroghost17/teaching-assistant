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

## Deployment on Render

You can deploy this API on [Render](https://render.com) either manually or by using the `render.yaml` file (Blueprints).

### Option 1: Manual Deployment

1.  **Sign Up/Login**: Go to [Render.com](https://render.com/) and sign up or login.
2.  **New Web Service**: Click the "New +" button and select "Web Service".
3.  **Connect Repo**: Connect your GitHub repository.
4.  **Configure**:
    -   **Runtime**: Node
    -   **Build Command**: `npm install && npm run build`
    -   **Start Command**: `npm start`
5.  **Environment Variables**:
    -   Scroll down to the "Environment Variables" section.
    -   Add `OPENAI_API_KEY` with your OpenAI API key.
    -   Render sets the `PORT` variable automatically, or you can set it to 3000.
6.  **Deploy**: Click "Create Web Service". Render will build and deploy your API.

### Option 2: Blueprint (render.yaml)

1.  In the Render Dashboard, click "New +" and select "Blueprint".
2.  Connect your repository.
3.  Render will detect the `render.yaml` file.
4.  Click "Apply" and provide the `OPENAI_API_KEY` when prompted.

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

