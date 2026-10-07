# DigitalShiksha

Modern marketing site for **DigitalShiksha** — free digital skills education for underprivileged children in India.

## Stack

- React 19 + Vite
- React Router (4 pages)
- Tailwind CSS v4
- Framer Motion (scroll & UI animations)

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Pages

| Route        | Content                          |
| ------------ | -------------------------------- |
| `/`          | Home — hero, impact, programs    |
| `/about`     | Mission, values, timeline        |
| `/programs`  | Course catalog                   |
| `/contact`   | Volunteer/partner form (client-only) |

The contact form shows a success message locally; wire it to an API or email provider when you add a backend.
