import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// 💡 หากรันบน Vercel/Serverless และยังจำเป็นต้องใช้ไฟล์ แนะนำให้ใช้ /tmp
// แต่ถ้าใช้ VPS/Local ให้ใช้ path.join(process.cwd(), "data", "blogs.json")
const filePath = path.join(process.cwd(), "data", "blogs.json");

// Helper อ่านข้อมูล
const getBlogsFromDatabase = () => {
  try {
    if (!fs.existsSync(filePath)) return {};
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent || "{}");
  } catch (error) {
    console.error("Read Database Error:", error);
    return {};
  }
};

// Helper เขียนข้อมูล (ใช้ร่วมกันทุก Method)
const saveToLocalDatabase = (dataObject) => {
  try {
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(filePath, JSON.stringify(dataObject, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Database Save Error:", error);
    return false;
  }
};

// ----------------------------------------------------
// GET: ดึงข้อมูลบทความ
// ----------------------------------------------------
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    const blogsObject = getBlogsFromDatabase();

    if (slug) {
      const blog = blogsObject[slug];
      if (!blog) {
        return NextResponse.json(
          { error: "ไม่พบข้อมูลบทความที่ต้องการ" },
          { status: 404 },
        );
      }
      return NextResponse.json({ blog }, { status: 200 });
    }

    const blogsArray = Object.values(blogsObject);
    return NextResponse.json({ blogs: blogsArray }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "ไม่สามารถดึงข้อมูลบทความได้" },
      { status: 500 },
    );
  }
}

// ----------------------------------------------------
// POST: สร้างบทความใหม่
// ----------------------------------------------------
export async function POST(request) {
  try {
    const body = await request.json();
    const { slug, categoryType, th, en, steps, faqs, author } = body;

    if (!slug || !categoryType) {
      return NextResponse.json(
        { error: "กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน (Slug, Category)" },
        { status: 400 },
      );
    }

    const sanitizedSlug = slug
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\-]/g, "-")
      .replace(/-+/g, "-");

    const blogsObject = getBlogsFromDatabase();

    const blogPayload = {
      slug: sanitizedSlug,
      categoryType,
      author: author || "Admin",
      mediaType: body.mediaType || "image",
      imageUrl: body.imageUrl?.trim() || "",
      videoUrl: body.videoUrl?.trim() || "",
      ctaLink: body.ctaLink?.trim() || "/contactUs",
      th: {
        introTitle: th?.introTitle?.trim() || "",
        introDesc1: th?.introDesc1?.trim() || "",
        introDesc2: th?.introDesc2?.trim() || "",
        introChecklistTitle: th?.introChecklistTitle?.trim() || "",
        introTags: Array.isArray(th?.introTags) ? th.introTags : [],
        introChecklist: Array.isArray(th?.introChecklist)
          ? th.introChecklist
          : [],
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
        introChecklist: Array.isArray(en?.introChecklist)
          ? en.introChecklist
          : [],
        ctaTitle: en?.ctaTitle?.trim() || "",
        ctaText3: en?.ctaText3?.trim() || "",
        ctaButtonText: en?.ctaButtonText?.trim() || "",
        ctaFooterText: en?.ctaFooterText?.trim() || "",
      },
      steps: Array.isArray(steps) ? steps : [],
      faqs: Array.isArray(faqs) ? faqs : [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // อัปเดต Object
    blogsObject[sanitizedSlug] = blogPayload;

    // บันทึกลงไฟล์
    const isSaved = saveToLocalDatabase(blogsObject);

    if (!isSaved) {
      throw new Error(
        "ไม่สามารถบันทึกข้อมูลลงฐานข้อมูลไฟล์ได้ (ตรวจสอบ Permission ของ Server)",
      );
    }

    return NextResponse.json(
      { message: "สร้างบทความสำเร็จ!", slug: sanitizedSlug },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์" },
      { status: 500 },
    );
  }
}

// ----------------------------------------------------
// PUT: แก้ไขบทความเดิม
// ----------------------------------------------------
export async function PUT(request) {
  try {
    const { searchParams } = new URL(request.url);
    const targetSlug = searchParams.get("slug");
    const body = await request.json();

    if (!targetSlug) {
      return NextResponse.json(
        { error: "กรุณาระบุ slug บทความที่ต้องการแก้ไข" },
        { status: 400 },
      );
    }

    const blogsObject = getBlogsFromDatabase();
    const existingBlog = blogsObject[targetSlug];

    if (!existingBlog) {
      return NextResponse.json(
        { error: "ไม่พบข้อมูลบทความที่ต้องการแก้ไข" },
        { status: 404 },
      );
    }

    const newSanitizedSlug = body.slug
      ? body.slug
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9\-]/g, "-")
          .replace(/-+/g, "-")
      : targetSlug;

    // หากมีการเปลี่ยน Slug ให้ลบ Key เก่าออก
    if (targetSlug !== newSanitizedSlug) {
      delete blogsObject[targetSlug];
    }

    const updatedBlogPayload = {
      ...existingBlog,
      ...body,
      slug: newSanitizedSlug,
      updatedAt: new Date().toISOString(),
    };

    blogsObject[newSanitizedSlug] = updatedBlogPayload;

    // เปลี่ยนมาใช้ Helper Function ป้องกัน Save Error
    const isSaved = saveToLocalDatabase(blogsObject);
    if (!isSaved) {
      throw new Error("ไม่สามารถอัปเดตข้อมูลลงไฟล์ได้");
    }

    return NextResponse.json(
      { message: "อัปเดตบทความสำเร็จ!", slug: newSanitizedSlug },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "เกิดข้อผิดพลาดในการอัปเดตบทความ" },
      { status: 500 },
    );
  }
}

// ----------------------------------------------------
// DELETE: ลบบทความ
// ----------------------------------------------------
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json(
        { error: "กรุณาระบุ slug ของบทความที่ต้องการลบ" },
        { status: 400 },
      );
    }

    const blogsObject = getBlogsFromDatabase();

    if (!blogsObject[slug]) {
      return NextResponse.json(
        { error: "ไม่พบบทความที่ต้องการลบ" },
        { status: 404 },
      );
    }

    delete blogsObject[slug];

    const isSaved = saveToLocalDatabase(blogsObject);
    if (!isSaved) {
      throw new Error("ไม่สามารถลบข้อมูลจากไฟล์ได้");
    }

    return NextResponse.json(
      { message: "ลบบทความเรียบร้อยแล้ว", slug },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "เกิดข้อผิดพลาดในการลบบทความ" },
      { status: 500 },
    );
  }
}
