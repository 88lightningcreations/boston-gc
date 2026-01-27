export const posts = [
  {
    slug: 'interior-painting',
    title: 'The Ultimate Guide to Interior Painting',
    content: 'This is the content for the interior painting post.',
    featuredImage: '/exterior_painting_boston_massachusetts.png'
  },
  {
    slug: 'bathroom-remodeling',
    title: 'Top 5 Trends in Bathroom Remodeling',
    content: 'This is the content for the bathroom remodeling post.',
    featuredImage: '/bathroom-reno-boston-general-contracting.webp'
  },
    {
    slug: 'kitchen-remodeling',
    title: 'How to Plan Your Dream Kitchen Remodel',
    content: 'This is the content for the kitchen remodeling post.',
    featuredImage: '/kitchen-reno-after-general-contractor-boston.jpeg'
  },
];

export function getPosts() {
    return posts;
}

export function getPost(slug: string) {
    return posts.find((post) => post.slug === slug);
}
