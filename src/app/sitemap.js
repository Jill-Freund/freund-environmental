// app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://freundenvironmental.vercel.app';
  
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];
}