
# Project Blueprint

## Overview

This project is a website for Dans Painting and General Contracting LLC in Boston, MA. The website showcases the company's services, provides answers to frequently asked questions, and offers a clear call to action for potential customers. The design is modern, clean, and professional, with a focus on user experience and accessibility.

## Implemented Features and Design

### General
- **Responsive Design:** The website is fully responsive and works on all devices.
- **Modern Aesthetics:** The design is modern and clean, with a focus on user experience.
- **Accessibility:** The website is designed to be accessible to all users.

### Components
- **Header:** A sticky header with a transparent background that becomes opaque on scroll. It includes the company logo and navigation links.
- **Hero Section:** A full-screen hero section with the company logo.
- **Services Section:** A section showcasing the company's services with icons and brief descriptions.
- **FAQ Section:** A frequently asked questions section with accordion-style answers.
- **Carousel:** A carousel of images showcasing the company's work.
- **Call to Action (CTA) Section:** A section with a clear call to action and a button linking to the company's Google Maps page.
- **Footer:** A footer with links to legal pages (Terms of Service, Privacy Policy, Disclaimer) and navigation links. It also displays the copyright information with the current year and company name.
- **Legal Pages:** Separate pages for Terms of Service, Privacy Policy, and Disclaimer with dynamically generated "Last Updated" dates.

### Styling
- **Bootstrap:** The project uses Bootstrap for its grid system and base styling.
- **Custom CSS:** Custom CSS is used for additional styling and to override Bootstrap's default styles.
- **Color Palette:** The color palette is modern and professional, with a mix of dark and light colors.
- **Typography:** The typography is clean and easy to read.

## Current Change: Interactive Image Comparison

### Plan
- **Goal:** Add an interactive "before and after" image comparison feature to the carousel.
- **Actions:**
    1. Create a new `ImageComparison.tsx` component with an interactive slider.
    2. Update the `Carousel.tsx` component to use the new `ImageComparison.tsx` component for "before and after" images.
    3. Modify the `images` array in `app/page.tsx` to use a new data structure that supports single images and "before and after" comparisons.
