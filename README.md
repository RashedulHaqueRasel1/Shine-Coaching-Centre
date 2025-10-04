# Shine Coaching Center

**Status:** Work in progress

A Next.js + TypeScript web application for **Shine Coaching Center** — a coaching/tutoring center website where users (students, parents) can view coaching information, courses, schedules, coaches, and contact details. This README describes the project purpose, tech stack, how to run it locally, structure, and next steps.

---

## Project overview

Shine Coaching Center is being built with Next.js and TypeScript. The site will allow a user to:

* Browse coaching center information (about, mission, contact)
* View available courses and syllabi
* See coach/tutor profiles and schedules
* Register interest or book a trial class / appointment
* View announcements and upcoming events
* Admin panel (future) to manage courses, coaches, schedules, and registrations

The project focuses on a clean UI, accessibility, and fast performance.

---

## Tech stack

* **Framework:** Next.js (React)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (recommended)
* **State management:** React Query or SWR (optional)
* **Form handling & validation:** React Hook Form + Zod / Yup (recommended)
* **Auth:** NextAuth.js or custom JWT (future)
* **Database / API:** (TBD) — example choices: Prisma + PostgreSQL, or MongoDB + Mongoose
* **Deployment:** Vercel / Netlify / any Node hosting

---

## Features (planned / in progress)

* Public pages: Home, About, Courses, Coaches, Schedule, Contact
* Course detail pages with syllabus, duration, fees
* Coach profile pages with bio, qualifications, and available slots
* Contact / enquiry form with validation
* Announcement / News section
* Admin dashboard (CRUD for courses, coaches, events)
* Responsive design (mobile-first)
* Accessibility checks

---

## Getting started (developer)

> Prerequisites: Node.js LTS (>=16), pnpm / npm / yarn

1. Clone the repository

```bash
git clone <repo-url>
cd shine-coaching-center
```

2. Install dependencies

```bash
npm install

```

3. Create `.env.local` file (example variables)

```env
NEXT_PUBLIC_APP_NAME="Shine Coaching Center"
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
DATABASE_URL=postgresql://user:password@localhost:5432/shine_db
# Add auth provider keys (if using NextAuth)
# GOOGLE_CLIENT_ID=
# GOOGLE_CLIENT_SECRET=
```

4. Run the dev server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Visit `http://localhost:3000` to view the app.

---

## Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "format": "prettier --write ."
}
```

---

## Suggested folder structure

```
/ (root)
├─ /app or /pages        # Next.js routes
├─ /components           # Reusable UI components
├─ /lib                  # API clients, utils
├─ /hooks                # React hooks
├─ /styles               # Global styles / Tailwind config
├─ /public               # Static assets
├─ /prisma or /models    # DB schema or models
└─ README.md
```

---

## API & Database notes

* If you use **Prisma**: keep `prisma/schema.prisma` and run migrations with `npx prisma migrate dev`.
* If you use **MongoDB**: configure MONGODB_URI in `.env.local` and use Mongoose models under `/models`.

---

## Design & UI

* Use Tailwind CSS for fast styling and consistent design tokens.
* Consider a simple component system (Button, Card, Modal, Input) for reusability.
* Keep the layout accessible: semantic HTML, keyboard focus states, and ARIA where necessary.

---

## Contributing

1. Create an issue describing the feature or bug.
2. Create a branch: `feat/feature-name` or `fix/bug-name`.
3. Open a pull request with a clear description of changes.

Please follow consistent code style (Prettier + ESLint) and add tests for critical logic.

---

## Next steps / TODO

* Finalize data model for courses, coaches, and bookings
* Implement public pages (Home, Courses, Coaches)
* Build contact/enquiry form and serverless API endpoint
* Add authentication and admin dashboard
* Prepare seed data and demo content
* Deploy to Vercel and configure environment variables

---

## Contact

If you need help or want to collaborate, reach out to the project owner or maintainers.

---

*This README was generated to give a starting point for the Shine Coaching Center project. Update details (deployment, DB, auth) as you decide on specific services.*
