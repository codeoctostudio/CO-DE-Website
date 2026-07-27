export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        "/en/admin/",
        "/th/admin/",
      ],
    },
    sitemap: 'https://www.co-deacademy.com/sitemap.xml',
  }
}