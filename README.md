# Boring Technologies Website

This project is built with [Next.js](https://nextjs.org/) and configured for static export to S3 + CloudFront.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create a production build with static export:

```bash
npm run build
```

This will generate a static site in the `out` directory that can be deployed to S3 + CloudFront.

## Project Structure

- `app/` - Next.js app directory containing pages and layouts
- `src/components/` - Reusable React components
- `src/styles/` - SCSS stylesheets
- `src/assets/` - Images and other static assets
- `public/` - Static files served at the root

## Features

- ✨ Next.js 14 with App Router
- 📦 Static export for S3 + CloudFront deployment
- 🎨 SCSS support
- 🎭 AOS (Animate On Scroll) animations
- 📱 Responsive design

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

