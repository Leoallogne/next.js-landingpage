# NexCorp - Premium Corporate Website

A high-performance, SEO-optimized, and premium corporate portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. This project is designed to represent a modern enterprise service provider, featuring smooth animations, a dark-themed aesthetic, and a fully responsive layout.

## 🚀 Features

-   **Modern Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS v4.
-   **Premium UI/UX:** Glassmorphism, smooth scroll animations, and interactive elements.
-   **Animations:** Powered by `framer-motion` for complex entering and scroll-based animations.
-   **Responsive:** Fully optimized for Mobile, Tablet, and Desktop.
-   **Performance:** SEO-ready structure, optimized images (placeholders used), and fast loading times.
-   **Icons:** Using `lucide-react` for consistent iconography.

## 🛠️ Project Structure

```bash
/src
  /app          # Next.js App Router (Pages & Layout)
  /components
    /ui         # Reusable atomic components (Button, etc.)
    /layout     # Global layout components (Navbar, Footer)
    /sections   # Feature-specific sections (Hero, About, etc.)
  /lib          # Utils and helper functions
```

## 📦 Getting Started

### Prerequisites

-   Node.js 18+ installed.
-   npm or yarn or pnpm.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/premium-corporate-site.git
    cd premium-corporate-site
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

4.  **Build for Production:**
    ```bash
    npm run build
    npm start
    ```

## 🌐 Deployment Guide

### Vercel (Recommended)

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Go to [Vercel](https://vercel.com) and sign in.
3.  Click **"Add New Project"** and import your repository.
4.  Vercel will detect Next.js automatically.
5.  Click **"Deploy"**.
6.  Your site will be live in less than a minute!

### Netlify

1.  Push your code to a Git repository.
2.  Go to [Netlify](https://www.netlify.com) and sign in.
3.  Click **"Add new site"** -> **"Import an existing project"**.
4.  Select your repository.
5.  **Build Command:** `npm run build`
6.  **Publish Directory:** `.next` (Netlify usually auto-detects Next.js via plugin, otherwise use the Next.js runtime).
7.  Click **"Deploy"**.

## 🎨 Customization

-   **Colors & Fonts:** Edit `src/app/globals.css` to change the CSS variables for colors and fonts.
-   **Content:** Edit the content arrays in each component file in `src/components/sections/`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
