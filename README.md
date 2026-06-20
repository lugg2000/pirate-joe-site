# Pirate Joe — Website

Next.js (App Router) rebuild of the Pirate Joe website mockup.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Structure

- `app/page.tsx` — homepage (single-page site), assembled from section
  components in `components/`. The nav bar links to in-page sections via
  anchors (`#the-book`, `#crew`, `#engagements`) and to the quiz as a
  separate route (`/quiz`).
- `app/quiz/page.tsx` — the "Which Crew Member Are You?" quiz, on its own
  route so it can be linked/shared independently.
- `app/api/subscribe/route.ts` — mailing list signup endpoint. Currently a
  scaffold (validates the email and logs it). See the comment block at the
  top of that file for drop-in instructions for Mailchimp, ConvertKit, or
  any other provider — add your API key as an environment variable and
  replace the `TODO` block.
- `components/MailingListForm.tsx` — client-side form that posts to
  `/api/subscribe`. No changes needed here when you wire up a real
  provider — it already handles loading/success/error states.
- `lib/crew.ts` — single source of truth for the eight crew members
  (names, roles, portraits, and the longer quiz-result copy). Used by both
  the homepage crew grid and the quiz results screen.
- `lib/quiz-questions.ts` — the nine quiz questions and their scoring
  weights per crew member.
- `public/images/` — book cover, crew portraits, and crew "stat card"
  images (the stat cards aren't used on the site yet, but are available if
  you want to add a crew detail page later).

## Mailing list provider setup

1. Pick a provider (Mailchimp, ConvertKit, Beehiiv, etc.) and get an API
   key + list/form ID.
2. Add them to `.env.local`:
   ```
   MAILCHIMP_API_KEY=...
   ```
3. Replace the `TODO` block in `app/api/subscribe/route.ts` with the
   provider's API call (examples included in the file's comments).

## Notes

- Styling is Tailwind CSS v4, using the same navy/parchment/gold palette
  and Cinzel/Crimson Text fonts as the original mockup.
- Fonts are loaded via a `<link>` tag in `app/layout.tsx` rather than
  `next/font/google`, purely because this sandbox's network couldn't
  reach `fonts.googleapis.com` at build time. If you'd prefer
  `next/font/google` (recommended for production — it self-hosts the font
  files), swap it back in; the markup elsewhere doesn't need to change.
