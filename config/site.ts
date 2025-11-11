export const siteConfig = {
  name: 'Swift Launch',
  description: 'Build your SaaS faster',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/og.jpg`,
  links: {
    twitter: 'https://twitter.com/yourusername',
    github: 'https://github.com/yourusername/yourrepo',
  },
}
