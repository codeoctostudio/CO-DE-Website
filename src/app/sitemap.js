// 📁 สร้างไฟล์ที่: src/app/sitemap.js

export default async function sitemap() {
  const baseUrl = "https://www.co-deacademy.com"; // 🌟 เปลี่ยนเป็น Domain จริงของคุณ (เช่น https://co-deacademy.com)
  const languages = ["th", "en"]; // รายชื่อภาษาที่เว็บรองรับ

  // 1. ลิสต์หน้าเว็บหลักๆ ของคุณที่มีในโปรเจกต์
  const staticRoutes = [
    "",                     // หน้าแรก (Homepage)
    "/blogs",               // หน้าบทความ (Trends/Blogs)
    "/courses",             // หน้าคอร์สแนะนำ
    "/playground",          // หน้า Playground
  ];

  // 2. เจนเนอเรต URL แยกตามภาษาอัตโนมัติ (เช่น /th/blogs และ /en/blogs)
  const sitemapEntries = [];

  languages.forEach((lang) => {
    staticRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly", // บอก Google ว่าหน้าเหล่านี้อาจอัปเดตทุกเดือน
        priority: route === "" ? 1.0 : 0.8, // หน้าแรกให้ความสำคัญสูงสุด (1.0) หน้าอื่นรองลงมา
      });
    });
  });

  // 3. (💡 ทางเลือกเสริม) ถ้าคุณมีบทความย่อยๆ ที่ต้องการดึงมาจาก API หรือฐานข้อมูล
  // สถาบันมักจะมีหน้าแยกย่อย เช่น /th/blogs/parents/why-kids-should-learn-python
  // คุณสามารถเขียน fetch ข้อมูลมาลูปใส่เพิ่มตรงนี้ได้ครับ:
  /*
  const blogs = await fetchBlogsFromYourDatabaseOrAPI();
  blogs.forEach((blog) => {
    languages.forEach((lang) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/blogs/${blog.category}/${blog.slug}`,
        lastModified: new Date(blog.updatedAt).toISOString(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  });
  */

  return sitemapEntries;
}