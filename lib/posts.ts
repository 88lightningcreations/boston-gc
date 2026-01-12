import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// const supabase = createClient(supabaseUrl, supabaseAnonKey);

// export async function getPosts() {
//   const { data, error } = await supabase.from('blog_posts').select('*');
//   if (error) {
//     console.error('Error fetching posts:', error);
//     return [];
//   }
//   return data;
// }

// export async function getPost(slug: string) {
//   const { data, error } = await supabase.from('blog_posts').select('*').eq('slug', slug).single();
//   if (error) {
//     console.error('Error fetching post:', error);
//     return null;
//   }
//   return data;
// }

export const posts = [
  {
    slug: 'interior-painting',
    title: 'The Ultimate Guide to Interior Painting',
    content: 'This is the content for the interior painting post.'
  },
  {
    slug: 'bathroom-remodeling',
    title: 'Top 5 Trends in Bathroom Remodeling',
    content: 'This is the content for the bathroom remodeling post.'
  },
    {
    slug: 'kitchen-remodeling',
    title: 'How to Plan Your Dream Kitchen Remodel',
    content: 'This is the content for the kitchen remodeling post.'
  },
];

export function getPosts() {
    return posts;
}

export function getPost(slug: string) {
    return posts.find((post) => post.slug === slug);
}
