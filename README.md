# Carlos Miguel Samson Portfolio

Live site: [https://SamsonCarlos.vercel.app](https://SamsonCarlos.vercel.app)

This repository contains the source code for my personal portfolio website. It is a React-based portfolio built to present my background, technical skills, selected work, resume details, and contact links in a clean multi-page layout.

## About This App

This app is my personal developer portfolio. It highlights:

- My profile as a Full Stack Web Developer
- My recent experience at STATE101 Visa Assistance Consultancy
- My core stack including Next.js, React, Node.js, PostgreSQL, Supabase, and API integrations
- Selected project and product work
- Resume and contact information
- Links to my GitHub, LinkedIn, and live portfolio

The UI has been customized away from the original template and now uses a warmer orange-led theme with personalized branding.

## Tech Stack

- React
- React Router
- React Bootstrap
- CSS
- JavaScript
- Vercel

## Features

- Multi-page portfolio layout
- Responsive design for desktop and mobile
- Custom personal branding
- GitHub contribution calendar
- Resume and contact section
- Project showcase section
- Grounded chatbot widget that answers from the site's portfolio content

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open:

```text
http://localhost:3000
```

## Build

To create a production build:

```bash
npm run build
```

## Test

To run the test suite:

```bash
npm test -- --watchAll=false
```

## Chatbot Setup

The site now includes a floating chatbot widget backed by a Vercel API route at `/api/chat`.

To enable real answers in production, add this environment variable in Vercel:

```text
GROQ_API_KEY=your_groq_api_key
```

Optional:

```text
GROQ_MODEL=llama-3.1-8b-instant
```

Notes:

- The chatbot is grounded in the website's content data from `src/content/siteContent.js`.
- The default Groq model is `llama-3.1-8b-instant`, which is a practical free-tier choice for this portfolio chatbot.
- On Vercel, the widget can call the local `/api/chat` route directly.
- During `npm start`, Create React App proxies `/api/chat` to `https://samson-carlos.vercel.app`, so the chatbot still works locally without browser CORS issues.
- If you want to override that fallback, set `REACT_APP_CHAT_API_URL` to a different chat endpoint.

## Deployment

This portfolio is deployed on Vercel:

[https://SamsonSarlos.vercel.app](https://SamsonCarlos.vercel.app)

## Contact

- Name: Carlos Miguel Samson
- Email: migsnolimit26@gmail.com
- Phone: +63 966 829 3379
- LinkedIn: [https://www.linkedin.com/in/carlos-miguel-samson-80268a36a/](https://www.linkedin.com/in/carlos-miguel-samson-80268a36a/)

