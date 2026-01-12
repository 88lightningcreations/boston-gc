# General Contracting Company - Boston, MA

This is the repository for the official website of a general contracting company based in Boston, Massachusetts. We specialize in providing high-quality residential and commercial contracting services.

## Our Services

We offer a wide range of services to meet the needs of our clients, including:

*   **Interior and Exterior Painting:** We provide professional painting services for both the interior and exterior of your home or business.
*   **Bathroom Remodeling:** We can help you create the bathroom of your dreams, from simple updates to complete renovations.
*   **Kitchen Remodeling:** We specialize in designing and building beautiful and functional kitchens that will be the heart of your home.

## Service Area

We proudly serve the entire Boston, Massachusetts area.

## Technology Stack

This website is built using the latest technologies to ensure a modern and seamless user experience:

*   **Frontend:** [React.js](https://reactjs.org/) with [Next.js](https://nextjs.org/) (App Router)
*   **Styling:** [Bootstrap](https://getbootstrap.com/) and Vanilla CSS
*   **Hosting:** [Vercel](https://vercel.com/)
*   **Blog:** [Supabase](https://supabase.io/)

## SEO and Analytics

We are committed to making our website easily discoverable on Google. To achieve this, we have implemented the following:

*   **Google Search Console:** The website is prepared for integration with Google Search Console to monitor our search performance.
*   **Google Analytics:** We use Google Analytics to track website traffic and user behavior.
*   **Google Tag Manager:** We use Google Tag Manager to manage our marketing tags and tracking scripts.
*   **SEO Best Practices:** The website is built with the best practices for on-page SEO to improve our rankings in search results.

## Blog

Our blog is a key part of our SEO strategy. We publish high-quality content that is relevant to our services and optimized for trending keywords. This helps us attract organic traffic and establish ourselves as experts in our field.

### Supabase Schema

The blog is powered by a Supabase backend with the following schema:

#### `blog_categories`

```sql
CREATE TABLE public.blog_categories (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  slug text NOT NULL,
  name text NOT NULL,
  meta_title text NOT NULL,
  meta_description text NOT NULL,
  intro text,
  icon text,
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT blog_categories_pkey PRIMARY KEY (id)
);
```

#### `blog_posts`

```sql
CREATE TABLE public.blog_posts (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  slug text NOT NULL,
  title text NOT NULL,
  meta_title text NOT NULL,
  meta_description text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  image text,
  is_published boolean NOT NULL DEFAULT false,
  focus_keyword text NOT NULL,
  secondary_keywords ARRAY,
  canonical_url text,
  read_time_minutes bigint,
  service_area text,
  faq jsonb,
  category_id uuid,
  CONSTRAINT blog_posts_pkey PRIMARY KEY (id),
  CONSTRAINT fk_blog_posts_category FOREIGN KEY (category_id) REFERENCES public.blog_categories(id)
);
```
