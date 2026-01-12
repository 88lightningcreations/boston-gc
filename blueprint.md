# Blueprint: General Contracting Company Website

## Overview

This document outlines the plan, design, and features of the General Contracting Company website. The goal is to create a bold, modern, and beautiful online presence that is both user-friendly and showcases the company's services.

## Current State: Implemented Features

### Design and Style

*   **Frameworks:** Built with Next.js and styled with Bootstrap and custom CSS.
*   **Color Palette:** Primarily uses a clean and professional combination of white, dark text, and a primary blue for interactive elements.
*   **Typography:** Clean and readable sans-serif fonts are used throughout.
*   **Layout:** The layout is responsive and uses a container-based structure for consistency.

### Core Components

*   **Header (`Header.tsx`):** A sticky header that remains visible on scroll. It includes the company name, a non-collapsing navigation bar, and a contact phone number.
*   **Footer (`Footer.tsx`):** A standard footer with navigation links and a copyright notice.
*   **Hero (`Hero.tsx`):** A prominent hero section on the homepage featuring the company logo, a strong headline, a brief description, and a background image.
*   **Services (`Services.tsx`):** A section on the homepage that displays a few of the company's main services in a card-based layout.
*   **FAQ (`Faq.tsx`):** A section for frequently asked questions.
*   **CTA (`Cta.tsx`):** A call-to-action section.

### Pages & Routing

*   **Home (`/`):** The main landing page, composed of the `Hero`, `Services`, `Faq`, and `Cta` components.
*   **Blog (`/blog`):** A route for the blog (currently a placeholder).
*   **Service Pages (`/services/...`):** Placeholder routes for individual service pages.

## Next Steps: Blog Implementation

The next phase of development will focus on building out the blog functionality.

1.  **Create Blog Page:**
    *   Create a new directory `app/blog`.
    *   Add a `page.tsx` to display a list of blog posts.
    *   The design will feature a grid of cards, each with a featured image, title, and a short excerpt.

2.  **Create Single Post Page:**
    *   Create a dynamic route `app/blog/[slug]/page.tsx`.
    *   This page will display the full content of a single blog post.
    *   It will include a prominent title, featured image, the main content, and author information.

3.  **Dummy Data:**
    *   Create a file with dummy data for blog posts to simulate fetching from a database or CMS.

4.  **Styling:**
    *   Apply a modern and visually appealing style to the blog list and single post pages, consistent with the overall site design.
