import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const saveToLocalDatabase = (newData) => {
  try {
    const filePath = path.join(process.cwd(), "data", "blogs.json");
    
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    let currentData = {};
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      currentData = JSON.parse(fileContent || "{}");
    }

    const slugKey = newData.slug;
    currentData[slugKey] = newData;

    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Database Save Error:", error);
    return false;
  }
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { slug, categoryType, th, en, steps, faqs } = body;

    if (!slug || !categoryType) {
      return NextResponse.json(
        { error: "กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน (Slug, Category)" },
        { status: 400 }
      );
    }

    const sanitizedSlug = slug
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\-]/g, "-")
      .replace(/-+/g, "-"); 

    // บันทึกก้อนข้อมูลลง Database ทันทีตามโครงสร้าง แนวทางที่ 1
    const blogPayload = {
      slug: sanitizedSlug,
      categoryType,
      mediaType: body.mediaType || "image",
      imageUrl: body.imageUrl?.trim() || "",
      videoId: body.videoId?.trim() || "",
      ctaLink: body.ctaLink?.trim() || "/contactUs",
      // ข้อมูลส่วนหัวและส่วนท้ายที่แยกก้อนภาษา
      th: {
        introTitle: th?.introTitle?.trim() || "",
        introDesc1: th?.introDesc1?.trim() || "",
        introDesc2: th?.introDesc2?.trim() || "",
        introChecklistTitle: th?.introChecklistTitle?.trim() || "",
        introTags: Array.isArray(th?.introTags) ? th.introTags : [],
        introChecklist: Array.isArray(th?.introChecklist) ? th.introChecklist : [],
        ctaTitle: th?.ctaTitle?.trim() || "",
        ctaText3: th?.ctaText3?.trim() || "",
        ctaButtonText: th?.ctaButtonText?.trim() || "",
        ctaFooterText: th?.ctaFooterText?.trim() || "",
      },
      en: {
        introTitle: en?.introTitle?.trim() || "",
        introDesc1: en?.introDesc1?.trim() || "",
        introDesc2: en?.introDesc2?.trim() || "",
        introChecklistTitle: en?.introChecklistTitle?.trim() || "",
        introTags: Array.isArray(en?.introTags) ? en.introTags : [],
        introChecklist: Array.isArray(en?.introChecklist) ? en.introChecklist : [],
        ctaTitle: en?.ctaTitle?.trim() || "",
        ctaText3: en?.ctaText3?.trim() || "",
        ctaButtonText: en?.ctaButtonText?.trim() || "",
        ctaFooterText: en?.ctaFooterText?.trim() || "",
      },
      steps: Array.isArray(steps) ? steps : [],
      faqs: Array.isArray(faqs) ? faqs : [],
      createdAt: new Date().toISOString(),
    };

    const isSaved = saveToLocalDatabase(blogPayload);

    if (!isSaved) {
      throw new Error("ไม่สามารถบันทึกข้อมูลลงฐานข้อมูลไฟล์ได้");
    }

    return NextResponse.json(
      { message: "สร้างบทความสไตล์ข้อมูลตรงสำเร็จ!", slug: sanitizedSlug },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์" },
      { status: 500 }
    );
  }
}