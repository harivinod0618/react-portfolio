# React Portfolio (Frontend Only)

This is a responsive React portfolio for **Hari Vinod** built with:
- **React 18**
- **Framer Motion** for animations
- **react-icons** for icons
- **Single CSS file** (`src/styles.css`) for all styling
- **EmailJS** for frontend-only contact form

## Sections
- Hero (animated name + CTA)
- About (no photo)
- Skills (cards with hover + icons)
- Projects
- Education
- Contact (EmailJS)
- Footer
- Navbar (mobile friendly)

## Getting Started
```bash
npm install
npm start
```

> If `react-scripts` is missing, run `npm i react-scripts@5`

## Configure EmailJS (Frontend Only)
1. Create an account at https://www.emailjs.com/
2. Add an **Email Service** (e.g., Gmail), note the **Service ID**.
3. Create an **Email Template** with variables: `user_name`, `user_email`, `message`, and optionally `to_email`.
4. Go to **Account > API Keys** and copy your **Public Key**.
5. Open `src/components/Contact.jsx` and replace:
   ```js
   'YOUR_EMAILJS_SERVICE_ID',
   'YOUR_EMAILJS_TEMPLATE_ID',
   'YOUR_EMAILJS_PUBLIC_KEY'
   ```
6. In your EmailJS template, ensure the **Recipient** uses `{{to_email}}` or set a default recipient to `harivinod1018@gmail.com`.

## Customize
- Update your name in `Navbar.jsx` and `Hero.jsx`.
- Edit project cards in `Projects.jsx`.
- Colors and layout are in `src/styles.css` (mobile-first & responsive).

## Notes
- No backend needed.
- All sections are separate files.
- Smooth scrolling is enabled.
