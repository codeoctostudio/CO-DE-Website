import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionary";
import BlogDetailContent from "./BlogDetailContent";

export async function generateMetadata({ params }) {
  const { lang, category, slug } = await params;
  const dict = await getDictionary(lang);

  // ตั้งค่า Title & Description แยกตามคู่บทความ
  const isScratch = slug === "why-kids-should-learn-scratch";
  const title = isScratch
    ? (dict?.Blogs_Scratch_2 || "เริ่มเรียน Scratch ยังไงให้สนุก")
    : (dict?.Blogs_Tech_2 || "ทำไมเด็กยุคใหม่ต้องเข้าใจ AI");

  return {
    title: `${title} | CO-DE academy`,
    description: "คู่มือเริ่มต้นสำหรับเด็ก ๆ และผู้ปกครองในโลกเทคโนโลยีและการเขียนโค้ด",
    keywords: ["CO-DE academy", category, slug],
  };
}

const ALLOWED_SLUGS = ["what-is-ai-why-kids-need-codings", "why-kids-should-learn-scratchs"];

export default async function DynamicBlogPage({ params }) {
  const { lang, category, slug } = await params;

  if (!ALLOWED_SLUGS.includes(slug)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  // คลังข้อมูลบทความทั้งหมด (ใช้คีย์ตามสัดส่วนเดิมของโปรเจกต์คุณ)
  const allBlogsData = {
    "what-is-ai-why-kids-need-codings": {
      slug: "what-is-ai-why-kids-need-codings",
      category: "technology-trends",
      apiKeyPrefix: "Blogs_Tech",
      heroBgColor: "from-[#ecf1ff] via-[#f8faff] to-white",
      tagBgColor: "bg-[#e0dff8] text-blue-600",
      introCardBg: "from-[#718fdd] to-[#7e8ff1]",
      ctaBg: "from-[#80a5d8] to-[#5193f0]",
      introTags: [9, 9, 9],
      introChecklistTitle: 12,
      introChecklist: [13, 14, 15, 16],
      
      // ตัวจัดการมีเดีย (ระบุ mediaType)
      mediaType: "video",
      videoId: "vl50y_J7Pis",

      steps: [
        {
          stepNumber: 1,
          type: "sub-points",
          titleKey: 17,
          contentKey: 18,
          subPointsTitleKey: 19,
          subPoints: [
            { labelKey: 20, textKey: 21, borderColor: "border-red-400" },
            { labelKey: 22, textKey: 23, borderColor: "border-green-400" },
            { labelKey: "Blogs_Tech_23_1", textKey: null, borderColor: "border-blue-400" },
          ],
        },
        {
          stepNumber: 2,
          type: "highlight-boxes",
          titleKey: 24,
          contentKey: 25,
          boxes: [
            { titleKey: 26, textKey: 27, boldKey: 28, suffixKey: 29, bgClass: "bg-pink-50/50 border-pink-100" },
            { titleKey: 30, textKey: 31, boldKey: 32, suffixKey: 33, bgClass: "bg-green-50/50 border-green-100" },
            { titleKey: 34, textKey: 35, boldKey: 36, suffixKey: 37, bgClass: "bg-blue-50/50 border-blue-100" },
          ],
        },
        {
          stepNumber: 3,
          type: "media-layout", // ปรับชื่อเพื่อรองรับทั้งรูปและวิดีโอ
          isFullWidth: true,
          titleKey: 38,
          contentKey: 39,
          textKey2: 40,
          boldKey2: 41,
          textKey3: 42,
          boldKey3: "Blogs_Tech_42_1",
          tipKey: 43,
          mediaTitle1: 44,
          mediaTitle2: 45,
        },
        {
          stepNumber: 4,
          type: "columns-3",
          isFullWidth: true,
          titleKey: 46,
          descKey: 47,
          columns: [
            { titleKey: 48, descKey: 49, bgClass: "bg-pink-50/50 border-pink-100 text-pink-700" },
            { titleKey: 50, descKey: 51, bgClass: "bg-purple-50/50 border-purple-100 text-purple-700" },
            { titleKey: 52, descKey: 53, bgClass: "bg-blue-50/50 border-blue-100 text-blue-700" },
          ],
        },
      ],
      faqs: [
        { qKey: 55, aKey: 56 },
        { qKey: 57, aKey: 58 },
      ],
      ctaTitle: 59,
      ctaText1: 60,
      ctaBold1: 61,
      ctaText2: 62,
      ctaText3: 63,
      ctaButtonText: 64,
      ctaFooterText: 65,
      ctaLink: "/contactUs",
    },

    "why-kids-should-learn-scratchs": {
      slug: "why-kids-should-learn-scratchs",
      category: "coding-for-kids",
      apiKeyPrefix: "Blogs_Scratch", // หันหัวคีย์ไปดึงไฟล์ภาษาฝั่ง Scratch
      heroBgColor: "from-[#fff0ec] via-[#fffbf8] to-white",
      tagBgColor: "bg-[#ffe4dc] text-orange-600",
      introCardBg: "from-[#ffa07a] to-[#ff7f50]",
      ctaBg: "from-[#fca67f] to-[#ff6b35]",
      introTags: [9, 10, 11], // ใช้คีย์ตรงตามลำดับของบทความนั้น ๆ
      introChecklistTitle: 12,
      introChecklist: [13, 14, 15, 16],
      
      // ตัวจัดการมีเดีย (เลือกใช้รูปภาพ)
      mediaType: "image",
      imageUrl: "/images/blogs/scratch-banner.webp", // พาธรูปภาพในโฟลเดอร์ public ของคุณ

      steps: [
        {
          stepNumber: 1,
          type: "sub-points",
          titleKey: 17,
          contentKey: 18,
          subPointsTitleKey: 19,
          subPoints: [
            { labelKey: 20, textKey: 21, borderColor: "border-orange-400" },
            { labelKey: 22, textKey: 23, borderColor: "border-purple-400" },
            { labelKey: "Blogs_Scratch_23_1", textKey: null, borderColor: "border-yellow-400" },
          ],
        },
        {
          stepNumber: 2,
          type: "highlight-boxes",
          titleKey: 24,
          contentKey: 25,
          boxes: [
            { titleKey: 26, textKey: 27, boldKey: 28, suffixKey: 29, bgClass: "bg-orange-50/50 border-orange-100" },
            { titleKey: 30, textKey: 31, boldKey: 32, suffixKey: 33, bgClass: "bg-purple-50/50 border-purple-100" },
            { titleKey: 34, textKey: 35, boldKey: 36, suffixKey: 37, bgClass: "bg-yellow-50/50 border-yellow-100" },
          ],
        },
        {
          stepNumber: 3,
          type: "media-layout",
          isFullWidth: true,
          titleKey: 38,
          contentKey: 39,
          textKey2: 40,
          boldKey2: 41,
          textKey3: 42,
          boldKey3: "Blogs_Scratch_42_1",
          tipKey: 43,
          mediaTitle1: 44,
          mediaTitle2: 45,
        },
        {
          stepNumber: 4,
          type: "columns-3",
          isFullWidth: true,
          titleKey: 46,
          descKey: 47,
          columns: [
            { titleKey: 48, descKey: 49, bgClass: "bg-orange-50/50 border-orange-100 text-orange-700" },
            { titleKey: 50, descKey: 51, bgClass: "bg-purple-50/50 border-purple-100 text-purple-700" },
            { titleKey: 52, descKey: 53, bgClass: "bg-yellow-50/50 border-yellow-100 text-yellow-800" },
          ],
        },
      ],
      faqs: [
        { qKey: 55, aKey: 56 },
        { qKey: 57, aKey: 58 },
      ],
      ctaTitle: 59,
      ctaText1: 60,
      ctaBold1: 61,
      ctaText2: 62,
      ctaText3: 63,
      ctaButtonText: 64,
      ctaFooterText: 65,
      ctaLink: "/contactUs",
    },
  };

  const blogData = allBlogsData[slug];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: slug === "why-kids-should-learn-scratch" ? dict?.Blogs_Scratch_2 : dict?.Blogs_Tech_2,
    datePublished: "2026-07-01T08:00:00+07:00",
    author: {
      "@type": "Organization",
      name: "CO-DE academy",
      url: "https://www.co-deacademy.com",
    },
  };

  return (
    <>
      <BlogDetailContent lang={lang} dict={dict} blogData={blogData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}