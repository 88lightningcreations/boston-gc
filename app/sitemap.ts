import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://danspaintgc.com';

  const staticPages = [
    '/',
    '/#about',
    '/#contact',
    '/terms',
    '/privacy',
    '/disclaimer'
  ];

  const servicePages = [
    '/services/interior-painting',
    '/services/bathroom-remodeling',
    '/services/kitchen-remodeling',
    '/services/deck-building',
    '/services/basement-finishing',
    '/services/flooring-installation',
    '/services/siding',
    '/services/staircases-railings',
    '/services/sunrooms-additions'
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

  const serviceUrls = servicePages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...serviceUrls];
}