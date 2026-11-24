
## Akhil Krishnan – Personal Portfolio Remake

I'll rebuild Akhil's portfolio (the inner site shown in the screenshot — pill nav, big hero, design-system showcase), not the Wall of Portfolios listing wrapper. Light, editorial, designer-style with handwritten annotation accents.

### Pages (separate routes for SEO)
- **/** – Hero: "Design Builder, 11 years deep — now shipping what I design." Subhead about AI-first workflows + Hevo Data. Handwritten annotations ("Hey there! I am a Design Builder", "Recently built Clazar design system from the ground up"). "Keep Scrolling" cue → featured work preview.
- **/works** – Case study grid (Hevo Data, Clazar design system, MessagePlus, Simbian.ai, plus a couple of placeholder projects). Each card: cover image, title, role, year, tags.
- **/works/$slug** – Case study detail: problem, role, process, key screens, outcome.
- **/about** – Long-form bio, 12-year timeline, tools (Figma, Framer, AI tools), companies worked at.
- **/blogs** – List of writing posts (cards with title, excerpt, date). Static content.
- **/resume** – One-page resume view with download PDF button.

### Global UI
- **Floating pill nav** (top center): `/Akhil > Krishnan` label on left, links Works · About · Blogs, "Resume" CTA pill on right. Sticky, blurred bg.
- **Light grey canvas** (#EEF0F2-ish), dark text, generous whitespace.
- Handwritten accent font (Caveat) for marginalia/annotations with small SVG arrows.
- Footer: socials (LinkedIn, X, Email, Read.cv), "Designed & built by Akhil" line.

### Type & feel
- Display: large tight serif-ish sans (Instrument Sans or Inter Tight) for hero.
- Body: Inter.
- Annotation: Caveat.
- Smooth scroll, subtle fade-in on scroll, hover lifts on cards.

### Out of scope (v1)
- Auth, messaging, bookmarks, CMS — all content hardcoded.
- The outer Wall of Portfolios chrome (logo, sidebar, Submit button) is NOT included.
