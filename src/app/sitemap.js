// 📁 สร้างไฟล์ที่: src/app/sitemap.js

export default async function sitemap() {
  const baseUrl = "https://www.co-deacademy.com"; // 🌟 เปลี่ยนเป็น Domain จริงของคุณ (เช่น https://co-deacademy.com)
  const languages = ["th", "en"]; // รายชื่อภาษาที่เว็บรองรับ

  // 1. ลิสต์หน้าเว็บหลักๆ ของคุณที่มีในโปรเจกต์
  const staticRoutes = [
    "",                     // หน้าแรก (Homepage)
    "/aboutUs",
    "/blogs",               // หน้าบทความ (Trends/Blogs)
    "/courses",             // หน้าคอร์สแนะนำ
    "/playground",          // หน้า Playground
    "/contactUs",           // หน้าติดต่อเรา
    "/playground",
    "/aboutCoding",
    "/blogs/parents/how-to-choose-coding-course-for-kids",
    "/blogs/parents/why-kids-should-learn-python",
    "/blogs/technology-trends/what-is-ai-why-kids-need-coding",
    "/blogs/tutorials/why-kids-should-learn-scratch",
    "/courses/blockcode/dino",
    "/courses/blockcode/scratch",
    "/courses/blockcode",
    "/courses/creative",
    "/courses/creative/fullstackweb",
    "/courses/creative/mobile",
    "/courses/creative/roblox",
    "/courses/fundamental",
    "/courses/fundamental/advpython",
    "/courses/fundamental/java",
    "/courses/fundamental/python",
    "/courses/mechanical",
    "/courses/mechanical/3dmodeling",
    "/courses/mechanical/microbit",
    "/courses/noncoding",
    "/courses/noncoding/designthinking",
    "/courses/university",
    "/customCourse",
    "/kidsproject",
    "/pitchingStage",
    "/registration",
    "/thankyoupage",
    "/trialclass",
    "/unitytest",
  ];

  // 2. เจนเนอเรต URL แยกตามภาษาอัตโนมัติ (เช่น /th/blogs และ /en/blogs)
  const sitemapEntries = [];

  languages.forEach((lang) => {
    staticRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly", // บอก Google ว่าหน้าเหล่านี้อาจอัปเดตทุกสัปดาห์
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