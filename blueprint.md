# Project Blueprint

## Overview

This project is a website for a general contracting company in Boston, MA. The website showcases the company's services, provides answers to frequently asked questions, and offers a clear call to action for potential customers. The design is modern, clean, and professional, with a focus on user experience and accessibility.

## Implemented Features and Design

### General
- **Responsive Design:** The website is fully responsive and works on all devices.
- **Modern Aesthetics:** The design is modern and clean, with a focus on user experience.
- **Accessibility:** The website is designed to be accessible to all users.

### Components
- **Header:** A sticky header with a transparent background that becomes opaque on scroll. It includes the company logo and navigation links.
- **Hero Section:** A full-screen hero section with the company logo and a clear call to action.
- **Services Section:** A section showcasing the company's services with icons and brief descriptions.
- **FAQ Section:** A frequently asked questions section with accordion-style answers.
- **Carousel:** A carousel of images showcasing the company's work.
- **Call to Action (CTA) Section:** A section with a clear call to action and a contact form.
- **Footer:** A footer with the company's contact information and social media links.

### Styling
- **Bootstrap:** The project uses Bootstrap for its grid system and base styling.
- **Custom CSS:** Custom CSS is used for additional styling and to override Bootstrap's default styles.
- **Color Palette:** The color palette is modern and professional, with a mix of dark and light colors.
- **Typography:** The typography is clean and easy to read, with a mix of serif and sans-serif fonts.

## Current Plan

- **Fix Carousel Image Sizing:** The images in the carousel are zoomed in too far. The `object-fit` property will be changed from `cover` to `contain` to ensure the entire image is visible.
- **Update Next/Image Component:** The `next/image` component will be updated to use the latest properties, including `fill`, `sizes`, and `style={{objectFit: "contain"}}`.
