"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BlogPreviewModal from "../components/BlogPreviewModal";

export default function NewBlogPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editSlug = searchParams.get("slug");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // State สำหรับ Modal Preview
  const [showPreview, setShowPreview] = useState(false);
  const [previewPayload, setPreviewPayload] = useState(null);
  const [previewLang, setPreviewLang] = useState("th");

  const [userData, setUserData] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("https://admin.co-deacademy.com/api/me.php", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        if (!res.ok) throw new Error("Failed to fetch user");

        const data = await res.json();

        if (data.ok) {
          setUserData(data);

          const loggedInAuthor = data.Nickname || data.user || "Admin";

          setFormData((prev) => ({
            ...prev,
            author: prev.author ? prev.author : loggedInAuthor,
          }));
        }
      } catch (err) {
        console.error("Error fetching user session:", err);
      } finally {
        setLoadingUser(false);
      }
    };

    fetchUserData();
  }, []);

  const [formData, setFormData] = useState({
    slug: "",
    categoryType: "technology-trends",
    mediaType: "image",
    imageUrl: "",
    videoUrl: "",
    ctaLink: "/contactUs",
    author: "",
    th: {
      introTitle: "",
      introDesc1: "",
      introDesc2: "",
      introChecklistTitle: "",
      introChecklist: "",
      introTags: "",
      ctaTitle: "",
      ctaText3: "",
      ctaButtonText: "",
      ctaFooterText: "",
    },
    en: {
      introTitle: "",
      introDesc1: "",
      introDesc2: "",
      introChecklistTitle: "",
      introChecklist: "",
      introTags: "",
      ctaTitle: "",
      ctaText3: "",
      ctaButtonText: "",
      ctaFooterText: "",
    },
  });

  const [steps, setSteps] = useState([
    {
      type: "sub-points",
      isFullWidth: false,
      th: { title: "", content: "", subPointsTitle: "" },
      en: { title: "", content: "", subPointsTitle: "" },
      subPoints: [
        {
          borderColor: "border-blue-400",
          th: { label: "", text: "" },
          en: { label: "", text: "" },
        },
      ],
      boxes: [
        {
          bgClass: "bg-blue-50/50 border-blue-100",
          th: { title: "", text: "", bold: "", suffix: "" },
          en: { title: "", text: "", bold: "", suffix: "" },
        },
      ],
      columns: [
        {
          bgClass: "bg-gray-50/50 border-gray-100",
          th: { title: "", desc: "" },
          en: { title: "", desc: "" },
        },
      ],
      th_mediaTitle1: "",
      th_mediaTitle2: "",
      th_textKey2: "",
      en_mediaTitle1: "",
      en_mediaTitle2: "",
      en_textKey2: "",
    },
  ]);

  const [faqs, setFaqs] = useState([
    {
      th: { q: "", a: "" },
      en: { q: "", a: "" },
    },
  ]);

  // Fetch Existing Blog for Edit Mode
  useEffect(() => {
    if (editSlug) {
      const fetchBlogData = async () => {
        setError("");
        try {
          const res = await fetch(`/api/blogs?slug=${editSlug}`);
          const data = await res.json();

          if (res.ok && data.blog) {
            const b = data.blog;

            // Map Form Metadata & Intro
            setFormData({
              slug: b.slug || "",
              categoryType: b.category_type || b.categoryType || "technology-trends",
              mediaType: b.mediaType || "image",
              imageUrl: b.imageUrl || "",
              videoUrl: b.videoUrl || "",
              ctaLink: b.ctaLink || "/contactUs",
              author: b.author || "",
              th: {
                introTitle: b.th?.introTitle || "",
                introDesc1: b.th?.introDesc1 || "",
                introDesc2: b.th?.introDesc2 || "",
                introChecklistTitle: b.th?.introChecklistTitle || "",
                introChecklist: Array.isArray(b.th?.introChecklist)
                  ? b.th.introChecklist.join("\n")
                  : b.th?.introChecklist || "",
                introTags: Array.isArray(b.th?.introTags)
                  ? b.th.introTags.join(", ")
                  : b.th?.introTags || "",
                ctaTitle: b.th?.ctaTitle || "",
                ctaText3: b.th?.ctaText3 || "",
                ctaButtonText: b.th?.ctaButtonText || "",
                ctaFooterText: b.th?.ctaFooterText || "",
              },
              en: {
                introTitle: b.en?.introTitle || "",
                introDesc1: b.en?.introDesc1 || "",
                introDesc2: b.en?.introDesc2 || "",
                introChecklistTitle: b.en?.introChecklistTitle || "",
                introChecklist: Array.isArray(b.en?.introChecklist)
                  ? b.en.introChecklist.join("\n")
                  : b.en?.introChecklist || "",
                introTags: Array.isArray(b.en?.introTags)
                  ? b.en.introTags.join(", ")
                  : b.en?.introTags || "",
                ctaTitle: b.en?.ctaTitle || "",
                ctaText3: b.en?.ctaText3 || "",
                ctaButtonText: b.en?.ctaButtonText || "",
                ctaFooterText: b.en?.ctaFooterText || "",
              },
            });

            // Map Dynamic Steps
            if (b.steps && b.steps.length > 0) {
              const mappedSteps = b.steps.map((st) => ({
                type: st.type || "sub-points",
                isFullWidth: Boolean(st.isFullWidth),
                th: {
                  title: st.th?.title || st.th?.desc || "",
                  content: st.th?.content || "",
                  subPointsTitle:
                    st.subPointsTitle || st.th?.subPointsTitle || "",
                },
                en: {
                  title: st.en?.title || st.en?.desc || "",
                  content: st.en?.content || "",
                  subPointsTitle:
                    st.subPointsTitle || st.en?.subPointsTitle || "",
                },
                subPoints: st.subPoints || [
                  {
                    borderColor: "border-blue-400",
                    th: { label: "", text: "" },
                    en: { label: "", text: "" },
                  },
                ],
                boxes: st.boxes || [
                  {
                    bgClass: "bg-blue-50/50 border-blue-100",
                    th: { title: "", text: "", bold: "", suffix: "" },
                    en: { title: "", text: "", bold: "", suffix: "" },
                  },
                ],
                columns: st.columns || [
                  {
                    bgClass: "bg-gray-50/50 border-gray-100",
                    th: { title: "", desc: "" },
                    en: { title: "", desc: "" },
                  },
                ],
                th_mediaTitle1: st.th?.mediaTitle1 || "",
                th_mediaTitle2: st.th?.mediaTitle2 || "",
                th_textKey2: st.th?.text2 || "",
                en_mediaTitle1: st.en?.mediaTitle1 || "",
                en_mediaTitle2: st.en?.mediaTitle2 || "",
                en_textKey2: st.en?.text2 || "",
              }));
              setSteps(mappedSteps);
            }

            // Map FAQs
            if (b.faqs && b.faqs.length > 0) {
              const mappedFaqs = b.faqs.map((f) => ({
                th: { q: f.th?.q || f.q || "", a: f.th?.a || f.a || "" },
                en: { q: f.en?.q || f.q || "", a: f.en?.a || f.a || "" },
              }));
              setFaqs(mappedFaqs);
            }
          } else {
            setError(data.error || "ไม่พบข้อมูลบทความที่ต้องการแก้ไข");
          }
        } catch (err) {
          console.error("Fetch blog error:", err);
          setError("เกิดข้อผิดพลาดในการดึงข้อมูลบทความ");
        }
      };

      fetchBlogData();
    }
  }, [editSlug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLangChange = (lang, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [lang]: { ...prev[lang], [field]: value },
    }));
  };

  const handleStepChange = (index, field, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index][field] = value;
    setSteps(updatedSteps);
  };

  const handleStepLangChange = (index, lang, field, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index][lang][field] = value;
    setSteps(updatedSteps);
  };

  const addStep = () => {
    setSteps([
      ...steps,
      {
        type: "sub-points",
        isFullWidth: false,
        th: { title: "", content: "", subPointsTitle: "" },
        en: { title: "", content: "", subPointsTitle: "" },
        subPoints: [
          {
            borderColor: "border-blue-400",
            th: { label: "", text: "" },
            en: { label: "", text: "" },
          },
        ],
        boxes: [
          {
            bgClass: "bg-blue-50/50 border-blue-100",
            th: { title: "", text: "", bold: "", suffix: "" },
            en: { title: "", text: "", bold: "", suffix: "" },
          },
        ],
        columns: [
          {
            bgClass: "bg-gray-50/50 border-gray-100",
            th: { title: "", desc: "" },
            en: { title: "", desc: "" },
          },
        ],
        th_mediaTitle1: "",
        th_mediaTitle2: "",
        th_textKey2: "",
        en_mediaTitle1: "",
        en_mediaTitle2: "",
        en_textKey2: "",
      },
    ]);
  };

  const removeStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const handleSubItemLangChange = (
    stepIndex,
    type,
    itemIndex,
    lang,
    field,
    value,
  ) => {
    const updatedSteps = [...steps];
    updatedSteps[stepIndex][type][itemIndex][lang][field] = value;
    setSteps(updatedSteps);
  };

  const handleSubItemClassChange = (
    stepIndex,
    type,
    itemIndex,
    field,
    value,
  ) => {
    const updatedSteps = [...steps];
    updatedSteps[stepIndex][type][itemIndex][field] = value;
    setSteps(updatedSteps);
  };

  const addSubItem = (stepIndex, type, template) => {
    const updatedSteps = [...steps];
    if (!updatedSteps[stepIndex][type]) updatedSteps[stepIndex][type] = [];
    updatedSteps[stepIndex][type].push(template);
    setSteps(updatedSteps);
  };

  const removeSubItem = (stepIndex, type, itemIndex) => {
    const updatedSteps = [...steps];
    updatedSteps[stepIndex][type] = updatedSteps[stepIndex][type].filter(
      (_, i) => i !== itemIndex,
    );
    setSteps(updatedSteps);
  };

  const handleFaqLangChange = (index, lang, field, value) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index][lang][field] = value;
    setFaqs(updatedFaqs);
  };

  const preparePayload = () => {
    const cleanedSteps = steps.map((step) => {
      const baseStep = { type: step.type, isFullWidth: step.isFullWidth };

      if (step.type === "sub-points") {
        return {
          ...baseStep,
          th: step.th,
          en: step.en,
          subPointsTitle: step.th.subPointsTitle,
          subPoints: step.subPoints,
        };
      }
      if (step.type === "highlight-boxes") {
        return {
          ...baseStep,
          th: { title: step.th.title, content: step.th.content },
          en: { title: step.en.title, content: step.en.content },
          boxes: step.boxes,
        };
      }
      if (step.type === "media-layout") {
        return {
          ...baseStep,
          th: {
            mediaTitle1: step.th_mediaTitle1,
            mediaTitle2: step.th_mediaTitle2,
            text2: step.th_textKey2,
          },
          en: {
            mediaTitle1: step.en_mediaTitle1,
            mediaTitle2: step.en_mediaTitle2,
            text2: step.en_textKey2,
          },
        };
      }
      if (step.type === "columns-3") {
        return {
          ...baseStep,
          th: { title: step.th.title, desc: step.th.content },
          en: { title: step.en.title, desc: step.en.content },
          columns: step.columns,
        };
      }
      return baseStep;
    });

    return {
      slug: formData.slug,
      categoryType: formData.categoryType,
      mediaType: formData.mediaType,
      imageUrl: formData.mediaType === "image" ? formData.imageUrl : "",
      videoUrl: formData.mediaType === "video" ? formData.videoUrl : "",
      ctaLink: formData.ctaLink,
      author: formData.author,
      th: {
        ...formData.th,
        introTags: formData.th.introTags
          ? formData.th.introTags
              .split(",")
              .map((t) => t.trim())
              .filter(Boolean)
          : [],
        introChecklist: formData.th.introChecklist
          ? formData.th.introChecklist
              .split("\n")
              .map((i) => i.trim())
              .filter(Boolean)
          : [],
      },
      en: {
        ...formData.en,
        introTags: formData.en.introTags
          ? formData.en.introTags
              .split(",")
              .map((t) => t.trim())
              .filter(Boolean)
          : [],
        introChecklist: formData.en.introChecklist
          ? formData.en.introChecklist
              .split("\n")
              .map((i) => i.trim())
              .filter(Boolean)
          : [],
      },
      steps: cleanedSteps,
      faqs: faqs.filter((f) => f.th.q || f.en.q),
    };
  };

  const handleOpenPreview = (e) => {
    e.preventDefault();
    const payload = preparePayload();
    setPreviewPayload(payload);
    setShowPreview(true);
  };

  const handleConfirmSave = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    const payload = previewPayload || preparePayload();

    // เช็กว่าถ้าเป็นการแก้ไข ให้ส่ง PUT และแนบ slug เดิมไปอัปเดต
    const isEditMode = Boolean(editSlug);
    const apiUrl = isEditMode ? `/api/blogs?slug=${editSlug}` : "/api/blogs";
    const apiMethod = isEditMode ? "PUT" : "POST";

    try {
      const res = await fetch(apiUrl, {
        method: apiMethod,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok)
        throw new Error(data.error || "มีบางอย่างผิดพลาดในการบันทึกข้อมูล");

      setSuccess(
        isEditMode
          ? "แก้ไขบทความสำเร็จ! กำลังนำทาง..."
          : "สร้างบทความสำเร็จ! กำลังนำทาง...",
      );
      setShowPreview(false);
      setTimeout(() => {
        router.push(
          `/th/blogs/${formData.categoryType}/${data.slug || formData.slug}`,
        );
      }, 1500);
    } catch (err) {
      setError(err.message);
      setShowPreview(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-md sm:p-10">
        <h1 className="text-2xl font-bold text-[#042451] mb-6 border-b pb-4">
          {editSlug
            ? `✏️ แก้ไขบทความ (${editSlug})`
            : "✍️ สร้างบทความแบบระบุข้อความ 2 ภาษาตรง"}
        </h1>

        {error && (
          <div className="mb-4 rounded-xl bg-red-50 p-4 text-sm text-red-600 border border-red-100">
            ❌ {error}
          </div>
        )}
        {success && (
          <div className="mb-4 rounded-xl bg-green-50 p-4 text-sm text-green-600 border border-green-100">
            🎉 {success}
          </div>
        )}

        <form
          onSubmit={handleOpenPreview}
          className="space-y-8 text-sm text-gray-700"
        >
          {/* SECTION 1: ข้อมูล Metadata ทั่วไป */}
          <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-100 space-y-4">
            <h2 className="text-base font-bold text-[#042451]">
              📦 ข้อมูลโครงสร้างหลัก
            </h2>
            <div>
              <label className="block font-semibold mb-1 text-[#042451]">
                URL Slug *
              </label>
              <input
                type="text"
                name="slug"
                required
                placeholder="เช่น scratch-vs-python"
                value={formData.slug}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 p-3 outline-hidden focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-[#042451]">
                หมวดหมู่ (เพื่อปรับโทนสี UI) *
              </label>
              <select
                name="categoryType"
                value={formData.categoryType}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 p-3 outline-hidden"
              >
                <option value="technology-trends">
                  Technology Trends (🤖 สีฟ้า)
                </option>
                <option value="tutorials">Tutorials (🧩 สีเขียว)</option>
                <option value="parents">Parents (👨‍👩‍👧 สีชมพู)</option>
                <option value="guide">Guide (🎓 สีส้ม)</option>
                <option value="reward">Reward (🎁 สีทอง)</option>
              </select>
            </div>
          </div>

          {/* SECTION 2: สื่อหลักประกอบฉาก */}
          <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-100 space-y-4">
            <h2 className="text-base font-bold text-[#042451]">
              📺 สื่อหลักหน้ารายละเอียด
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block font-semibold mb-1 text-[#042451]">
                  ชนิดของสื่อ
                </label>
                <select
                  name="mediaType"
                  value={formData.mediaType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 p-3 outline-hidden"
                >
                  <option value="image">
                    รูปภาพภาพหน้าปก (Web URL / Google / FB / IG)
                  </option>
                  <option value="video">
                    วิดีโอ (YouTube / Facebook / TikTok / IG)
                  </option>
                </select>
              </div>

              {formData.mediaType === "image" ? (
                <div>
                  <label className="block font-semibold mb-1 text-[#042451]">
                    Image URL
                  </label>
                  <input
                    type="url"
                    name="imageUrl"
                    placeholder="https://... หรือ /images/blogs/banner.webp"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 p-3 outline-hidden text-sm"
                  />
                </div>
              ) : (
                <div>
                  <label className="block font-semibold mb-1 text-[#042451]">
                    Video Link / URL
                  </label>
                  <input
                    type="url"
                    name="videoUrl"
                    placeholder="วางลิงก์วิดีโอจาก YouTube, TikTok, FB หรือ IG"
                    value={formData.videoUrl}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 p-3 outline-hidden text-sm"
                  />
                </div>
              )}
            </div>
          </div>

          {/* SECTION 3: Intro Tags & Checklist */}
          <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-100 space-y-6">
            <h2 className="text-base font-bold text-[#042451]">
              📝 ส่วนแนะนำตัวบนสุด (Intro Content)
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* ภาษาไทย */}
              <div className="p-4 bg-blue-50/30 rounded-xl border border-blue-100 space-y-3">
                <h3 className="font-bold text-blue-900 border-b pb-1">
                  🇹🇭 ข้อมูลภาษาไทย
                </h3>
                <div>
                  <label className="block font-semibold text-xs mb-1">
                    หัวข้อบทความ (Intro Title)
                  </label>
                  <input
                    type="text"
                    placeholder="เช่น แนะนำการเขียนโค้ดสำหรับเด็ก"
                    value={formData.th.introTitle}
                    onChange={(e) =>
                      handleLangChange("th", "introTitle", e.target.value)
                    }
                    className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-xs mb-1">
                    คำอธิบายย่อส่วนที่ 1 (Intro Desc 1)
                  </label>
                  <textarea
                    rows="2"
                    placeholder="เนื้อความเกริ่นนำวรรคแรก..."
                    value={formData.th.introDesc1}
                    onChange={(e) => {
                      e.target.style.height = "auto";
                      e.target.style.height = `${e.target.scrollHeight}px`;
                      handleLangChange("th", "introDesc1", e.target.value);
                    }}
                    className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-xs mb-1">
                    คำอธิบายย่อส่วนที่ 2 (Intro Desc 2)
                  </label>
                  <textarea
                    rows="2"
                    placeholder="เนื้อความเกริ่นนำวรรคสอง..."
                    value={formData.th.introDesc2}
                    onChange={(e) => {
                      e.target.style.height = "auto";
                      e.target.style.height = `${e.target.scrollHeight}px`;
                      handleLangChange("th", "introDesc2", e.target.value);
                    }}
                    className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-xs mb-1">
                    Tags ภาษาไทย (คั่นด้วยจุลภาค `,` )
                  </label>
                  <textarea
                    placeholder="เช่น โรนัลโด้, เมสซี่"
                    value={formData.th.introTags}
                    onChange={(e) => {
                      e.target.style.height = "auto";
                      e.target.style.height = `${e.target.scrollHeight}px`;
                      handleLangChange("th", "introTags", e.target.value);
                    }}
                    className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-xs mb-1">
                    หัวข้อรายการเช็คลิสต์ (Checklist Title)
                  </label>
                  <input
                    type="text"
                    placeholder="เช่น สิ่งที่ต้องเตรียม"
                    value={formData.th.introChecklistTitle}
                    onChange={(e) =>
                      handleLangChange(
                        "th",
                        "introChecklistTitle",
                        e.target.value,
                      )
                    }
                    className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-xs mb-1">
                    รายการเช็คลิสต์ (1 บรรทัด = 1 ข้อ)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="ข้อที่หนึ่ง&#10;ข้อที่สอง"
                    value={formData.th.introChecklist}
                    onChange={(e) => {
                      e.target.style.height = "auto";
                      e.target.style.height = `${e.target.scrollHeight}px`;
                      handleLangChange("th", "introChecklist", e.target.value);
                    }}
                    className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                  />
                </div>
              </div>

              {/* ภาษาอังกฤษ */}
              <div className="p-4 bg-red-50/30 rounded-xl border border-red-100 space-y-3">
                <h3 className="font-bold text-red-900 border-b pb-1">
                  🇺🇸 English Content
                </h3>
                <div>
                  <label className="block font-semibold text-xs mb-1">
                    Intro Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Coding for Kids"
                    value={formData.en.introTitle}
                    onChange={(e) =>
                      handleLangChange("en", "introTitle", e.target.value)
                    }
                    className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-xs mb-1">
                    Intro Desc 1
                  </label>
                  <textarea
                    rows="2"
                    placeholder="First introductory paragraph..."
                    value={formData.en.introDesc1}
                    onChange={(e) => {
                      e.target.style.height = "auto";
                      e.target.style.height = `${e.target.scrollHeight}px`;
                      handleLangChange("en", "introDesc1", e.target.value);
                    }}
                    className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-xs mb-1">
                    Intro Desc 2
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Second introductory paragraph..."
                    value={formData.en.introDesc2}
                    onChange={(e) => {
                      e.target.style.height = "auto";
                      e.target.style.height = `${e.target.scrollHeight}px`;
                      handleLangChange("en", "introDesc2", e.target.value);
                    }}
                    className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-xs mb-1">
                    Tags (Comma-separated `,` )
                  </label>
                  <textarea
                    placeholder="e.g. Ronaldo, Messi"
                    value={formData.en.introTags}
                    onChange={(e) => {
                      e.target.style.height = "auto";
                      e.target.style.height = `${e.target.scrollHeight}px`;
                      handleLangChange("en", "introTags", e.target.value);
                    }}
                    className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-xs mb-1">
                    Checklist Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Requirements"
                    value={formData.en.introChecklistTitle}
                    onChange={(e) =>
                      handleLangChange(
                        "en",
                        "introChecklistTitle",
                        e.target.value,
                      )
                    }
                    className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-xs mb-1">
                    Checklist Items (1 line per item)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Item 1&#10;Item 2"
                    value={formData.en.introChecklist}
                    onChange={(e) => {
                      e.target.style.height = "auto";
                      e.target.style.height = `${e.target.scrollHeight}px`;
                      handleLangChange("en", "introChecklist", e.target.value);
                    }}
                    className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: DYNAMIC STEPS ENGINE */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <h2 className="text-lg font-bold text-[#042451]">
                🧩 ส่วนบล็อกเนื้อหาหลัก (Dynamic Steps)
              </h2>
              <button
                type="button"
                onClick={addStep}
                className="rounded-xl bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600 hover:bg-blue-100 transition-all"
              >
                + เพิ่มบล็อกเนื้อหา
              </button>
            </div>

            {steps.map((step, sIdx) => (
              <div
                key={sIdx}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs space-y-4"
              >
                <div className="flex items-center justify-between bg-gray-50 p-2.5 rounded-xl">
                  <span className="font-bold text-gray-700">
                    บล็อกเนื้อหาที่ #{sIdx + 1}
                  </span>
                  <div className="flex items-center gap-3">
                    <label className="inline-flex items-center gap-1.5 text-xs text-gray-600">
                      <input
                        type="checkbox"
                        checked={step.isFullWidth}
                        onChange={(e) =>
                          handleStepChange(
                            sIdx,
                            "isFullWidth",
                            e.target.checked,
                          )
                        }
                        className="rounded border-gray-300 text-blue-600"
                      />
                      ขยายเต็มหน้าจอ
                    </label>
                    <button
                      type="button"
                      onClick={() => removeStep(sIdx)}
                      className="text-xs text-red-500 hover:underline"
                    >
                      ลบบล็อกนี้
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-xs mb-1 text-gray-600">
                    ประเภทดีไซน์บล็อก
                  </label>
                  <select
                    value={step.type}
                    onChange={(e) =>
                      handleStepChange(sIdx, "type", e.target.value)
                    }
                    className="w-full rounded-xl border border-gray-300 p-2 text-xs outline-hidden bg-white"
                  >
                    <option value="sub-points">
                      แบบมีหัวข้อย่อยซ้าย-ขวา (sub-points)
                    </option>
                    <option value="highlight-boxes">
                      แบบกล่องเน้นความสำคัญ (highlight-boxes)
                    </option>
                    <option value="media-layout">
                      แบบแบนเนอร์/วิดีโอเข้าบล็อก (media-layout)
                    </option>
                    <option value="columns-3">
                      แบบเปรียบเทียบ 3 คอลัมน์ (columns-3)
                    </option>
                  </select>
                </div>

                {step.type !== "media-layout" && (
                  <div className="grid gap-4 md:grid-cols-2 border-t pt-3">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-blue-700">
                        🇹🇭 ข้อความภาษาไทย
                      </span>
                      <input
                        type="text"
                        value={step.th.title}
                        onChange={(e) =>
                          handleStepChange(sIdx, "th", {
                            ...step.th,
                            title: e.target.value,
                          })
                        }
                        placeholder="หัวข้อบล็อก (TH)"
                        className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                      />
                      <textarea
                        rows="2"
                        value={step.th.content}
                        onChange={(e) => {
                          e.target.style.height = "auto";
                          e.target.style.height = `${e.target.scrollHeight}px`;
                          handleStepChange(sIdx, "th", {
                            ...step.th,
                            content: e.target.value,
                          });
                        }}
                        placeholder="คำอธิบายเนื้อหา (TH)"
                        className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-red-700">
                        🇺🇸 English Text
                      </span>
                      <input
                        type="text"
                        value={step.en.title}
                        onChange={(e) =>
                          handleStepChange(sIdx, "en", {
                            ...step.en,
                            title: e.target.value,
                          })
                        }
                        placeholder="Block Title (EN)"
                        className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                      />
                      <textarea
                        rows="2"
                        value={step.en.content}
                        onChange={(e) => {
                          e.target.style.height = "auto";
                          e.target.style.height = `${e.target.scrollHeight}px`;
                          handleStepChange(sIdx, "en", {
                            ...step.en,
                            content: e.target.value,
                          });
                        }}
                        placeholder="Description Content (EN)"
                        className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                      />
                    </div>
                  </div>
                )}

                {/* Sub Points */}
                {step.type === "sub-points" && (
                  <div className="bg-blue-50/30 p-4 rounded-xl border border-dashed border-blue-200 space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={step.th.subPointsTitle}
                        onChange={(e) =>
                          handleStepLangChange(
                            sIdx,
                            "th",
                            "subPointsTitle",
                            e.target.value,
                          )
                        }
                        placeholder="หัวข้อกลุ่มจุดย่อย (TH)"
                        className="rounded border bg-white p-2 text-xs"
                      />
                      <input
                        type="text"
                        value={step.en.subPointsTitle}
                        onChange={(e) =>
                          handleStepLangChange(
                            sIdx,
                            "en",
                            "subPointsTitle",
                            e.target.value,
                          )
                        }
                        placeholder="Sub Points Group Title (EN)"
                        className="rounded border bg-white p-2 text-xs"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() =>
                          addSubItem(sIdx, "subPoints", {
                            borderColor: "border-blue-400",
                            th: { label: "", text: "" },
                            en: { label: "", text: "" },
                          })
                        }
                        className="text-xs text-blue-600 font-bold"
                      >
                        + เพิ่มจุดย่อย
                      </button>
                    </div>
                    {step.subPoints?.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="bg-white p-3 rounded-lg border space-y-2 relative"
                      >
                        <div className="grid grid-cols-2 gap-2 text-xs pr-6">
                          <div>
                            <input
                              type="text"
                              value={pt.th.label}
                              onChange={(e) =>
                                handleSubItemLangChange(
                                  sIdx,
                                  "subPoints",
                                  pIdx,
                                  "th",
                                  "label",
                                  e.target.value,
                                )
                              }
                              placeholder="คำเน้นหนา (TH)"
                              className="w-full border p-1 rounded mb-1"
                            />
                            <textarea
                              value={pt.th.text}
                              onChange={(e) => {
                                e.target.style.height = "auto";
                                e.target.style.height = `${e.target.scrollHeight}px`;
                                handleSubItemLangChange(
                                  sIdx,
                                  "subPoints",
                                  pIdx,
                                  "th",
                                  "text",
                                  e.target.value,
                                );
                              }}
                              placeholder="เนื้อความ (TH)"
                              className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              value={pt.en.label}
                              onChange={(e) =>
                                handleSubItemLangChange(
                                  sIdx,
                                  "subPoints",
                                  pIdx,
                                  "en",
                                  "label",
                                  e.target.value,
                                )
                              }
                              placeholder="Label Bold (EN)"
                              className="w-full border p-1 rounded mb-1"
                            />
                            <textarea
                              value={pt.en.text}
                              onChange={(e) => {
                                e.target.style.height = "auto";
                                e.target.style.height = `${e.target.scrollHeight}px`;
                                handleSubItemLangChange(
                                  sIdx,
                                  "subPoints",
                                  pIdx,
                                  "en",
                                  "text",
                                  e.target.value,
                                );
                              }}
                              placeholder="Text (EN)"
                              className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                            />
                          </div>
                        </div>
                        <select
                          value={pt.borderColor}
                          onChange={(e) =>
                            handleSubItemClassChange(
                              sIdx,
                              "subPoints",
                              pIdx,
                              "borderColor",
                              e.target.value,
                            )
                          }
                          className="w-full border p-1 rounded text-xs bg-white"
                        >
                          <option value="border-blue-400">ขอบสีฟ้า</option>
                          <option value="border-green-400">ขอบสีเขียว</option>
                        </select>
                        <button
                          type="button"
                          onClick={() => removeSubItem(sIdx, "subPoints", pIdx)}
                          className="absolute top-2 right-2 text-red-500"
                        >
                          ✖
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlight Boxes */}
                {step.type === "highlight-boxes" && (
                  <div className="bg-amber-50/30 p-4 rounded-xl border border-dashed border-amber-200 space-y-3">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() =>
                          addSubItem(sIdx, "boxes", {
                            bgClass: "bg-blue-50/50 border-blue-100",
                            th: { title: "", text: "", bold: "", suffix: "" },
                            en: { title: "", text: "", bold: "", suffix: "" },
                          })
                        }
                        className="text-xs text-amber-600 font-bold"
                      >
                        + เพิ่มกล่องไฮไลท์
                      </button>
                    </div>
                    {step.boxes?.map((box, bIdx) => (
                      <div
                        key={bIdx}
                        className="bg-white p-3 rounded-lg border space-y-2 relative text-xs"
                      >
                        <div className="grid grid-cols-2 gap-4 pr-6">
                          <div className="space-y-1">
                            <span className="font-semibold text-blue-600">
                              ไทย
                            </span>
                            <input
                              type="text"
                              value={box.th.title}
                              onChange={(e) =>
                                handleSubItemLangChange(
                                  sIdx,
                                  "boxes",
                                  bIdx,
                                  "th",
                                  "title",
                                  e.target.value,
                                )
                              }
                              placeholder="หัวข้อกล่อง"
                              className="w-full border p-1 rounded"
                            />
                            <input
                              type="text"
                              value={box.th.text}
                              onChange={(e) =>
                                handleSubItemLangChange(
                                  sIdx,
                                  "boxes",
                                  bIdx,
                                  "th",
                                  "text",
                                  e.target.value,
                                )
                              }
                              placeholder="เนื้อความกล่อง"
                              className="w-full border p-1 rounded"
                            />
                            <input
                              type="text"
                              value={box.th.bold}
                              onChange={(e) =>
                                handleSubItemLangChange(
                                  sIdx,
                                  "boxes",
                                  bIdx,
                                  "th",
                                  "bold",
                                  e.target.value,
                                )
                              }
                              placeholder="คำหนาปิดท้าย"
                              className="w-full border p-1 rounded"
                            />
                          </div>
                          <div className="space-y-1">
                            <span className="font-semibold text-red-600">
                              EN
                            </span>
                            <input
                              type="text"
                              value={box.en.title}
                              onChange={(e) =>
                                handleSubItemLangChange(
                                  sIdx,
                                  "boxes",
                                  bIdx,
                                  "en",
                                  "title",
                                  e.target.value,
                                )
                              }
                              placeholder="Box Title"
                              className="w-full border p-1 rounded"
                            />
                            <input
                              type="text"
                              value={box.en.text}
                              onChange={(e) =>
                                handleSubItemLangChange(
                                  sIdx,
                                  "boxes",
                                  bIdx,
                                  "en",
                                  "text",
                                  e.target.value,
                                )
                              }
                              placeholder="Box Text"
                              className="w-full border p-1 rounded"
                            />
                            <input
                              type="text"
                              value={box.en.bold}
                              onChange={(e) =>
                                handleSubItemLangChange(
                                  sIdx,
                                  "boxes",
                                  bIdx,
                                  "en",
                                  "bold",
                                  e.target.value,
                                )
                              }
                              placeholder="Bold Suffix"
                              className="w-full border p-1 rounded"
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeSubItem(sIdx, "boxes", bIdx)}
                          className="absolute top-2 right-2 text-red-500"
                        >
                          ✖
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Media Layout */}
                {step.type === "media-layout" && (
                  <div className="bg-purple-50/30 p-4 rounded-xl border border-dashed border-purple-200 grid gap-4 md:grid-cols-2 text-xs">
                    <div className="space-y-2 bg-white p-3 rounded-lg border">
                      <span className="font-bold text-blue-700">
                        🇹🇭 ข้อความภาษาไทย บน Layout
                      </span>
                      <input
                        type="text"
                        value={step.th_mediaTitle1}
                        onChange={(e) =>
                          handleStepChange(
                            sIdx,
                            "th_mediaTitle1",
                            e.target.value,
                          )
                        }
                        placeholder="หัวข้อบนสื่อ 1 (TH)"
                        className="w-full border p-2 rounded"
                      />
                      <input
                        type="text"
                        value={step.th_mediaTitle2}
                        onChange={(e) =>
                          handleStepChange(
                            sIdx,
                            "th_mediaTitle2",
                            e.target.value,
                          )
                        }
                        placeholder="หัวข้อบนสื่อ 2 (TH)"
                        className="w-full border p-2 rounded"
                      />
                      <textarea
                        value={step.th_textKey2}
                        onChange={(e) => {
                          e.target.style.height = "auto";
                          e.target.style.height = `${e.target.scrollHeight}px`;
                          handleStepChange(sIdx, "th_textKey2", e.target.value);
                        }}
                        placeholder="คำอธิบายประกอบ (TH)"
                        className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                      />
                    </div>
                    <div className="space-y-2 bg-white p-3 rounded-lg border">
                      <span className="font-bold text-red-700">
                        🇺🇸 English Text on Layout
                      </span>
                      <input
                        type="text"
                        value={step.en_mediaTitle1}
                        onChange={(e) =>
                          handleStepChange(
                            sIdx,
                            "en_mediaTitle1",
                            e.target.value,
                          )
                        }
                        placeholder="Media Title 1 (EN)"
                        className="w-full border p-2 rounded"
                      />
                      <input
                        type="text"
                        value={step.en_mediaTitle2}
                        onChange={(e) =>
                          handleStepChange(
                            sIdx,
                            "en_mediaTitle2",
                            e.target.value,
                          )
                        }
                        placeholder="Media Title 2 (EN)"
                        className="w-full border p-2 rounded"
                      />
                      <textarea
                        value={step.en_textKey2}
                        onChange={(e) => {
                          e.target.style.height = "auto";
                          e.target.style.height = `${e.target.scrollHeight}px`;
                          handleStepChange(sIdx, "en_textKey2", e.target.value);
                        }}
                        placeholder="Description Layout (EN)"
                        className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                      />
                    </div>
                  </div>
                )}

                {/* Columns-3 */}
                {step.type === "columns-3" && (
                  <div className="bg-emerald-50/30 p-4 rounded-xl border border-dashed border-emerald-200 space-y-3">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() =>
                          addSubItem(sIdx, "columns", {
                            bgClass: "bg-gray-50/50 border-gray-100",
                            th: { title: "", desc: "" },
                            en: { title: "", desc: "" },
                          })
                        }
                        className="text-xs text-emerald-600 font-bold"
                      >
                        + เพิ่มคอลัมน์
                      </button>
                    </div>
                    {step.columns?.map((col, cIdx) => (
                      <div
                        key={cIdx}
                        className="bg-white p-3 rounded-lg border relative text-xs space-y-2"
                      >
                        <div className="grid grid-cols-2 gap-4 pr-6">
                          <div>
                            <input
                              type="text"
                              value={col.th.title}
                              onChange={(e) =>
                                handleSubItemLangChange(
                                  sIdx,
                                  "columns",
                                  cIdx,
                                  "th",
                                  "title",
                                  e.target.value,
                                )
                              }
                              placeholder="หัวข้อคอลัมน์ (TH)"
                              className="w-full border p-1 rounded mb-1"
                            />
                            <textarea
                              value={col.th.desc}
                              onChange={(e) => {
                                e.target.style.height = "auto";
                                e.target.style.height = `${e.target.scrollHeight}px`;
                                handleSubItemLangChange(
                                  sIdx,
                                  "columns",
                                  cIdx,
                                  "th",
                                  "desc",
                                  e.target.value,
                                );
                              }}
                              placeholder="รายละเอียดคอลัมน์ (TH)"
                              className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              value={col.en.title}
                              onChange={(e) =>
                                handleSubItemLangChange(
                                  sIdx,
                                  "columns",
                                  cIdx,
                                  "en",
                                  "title",
                                  e.target.value,
                                )
                              }
                              placeholder="Column Title (EN)"
                              className="w-full border p-1 rounded mb-1"
                            />
                            <textarea
                              value={col.en.desc}
                              onChange={(e) => {
                                e.target.style.height = "auto";
                                e.target.style.height = `${e.target.scrollHeight}px`;
                                handleSubItemLangChange(
                                  sIdx,
                                  "columns",
                                  cIdx,
                                  "en",
                                  "desc",
                                  e.target.value,
                                );
                              }}
                              placeholder="Column Desc (EN)"
                              className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeSubItem(sIdx, "columns", cIdx)}
                          className="absolute top-2 right-2 text-red-500"
                        >
                          ✖
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* SECTION 5: FAQs */}
          <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-[#042451]">
                ❓ คำถามที่พบบ่อย (FAQs)
              </h2>
              <button
                type="button"
                onClick={() =>
                  setFaqs([
                    ...faqs,
                    { th: { q: "", a: "" }, en: { q: "", a: "" } },
                  ])
                }
                className="text-xs text-blue-600 font-bold"
              >
                + เพิ่มคำถาม
              </button>
            </div>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border relative space-y-3 text-xs"
              >
                <div className="grid gap-4 md:grid-cols-2 pr-6">
                  <div className="space-y-1">
                    <span className="font-bold text-blue-600">ภาษาไทย</span>
                    <textarea
                      value={faq.th.q}
                      onChange={(e) => {
                        e.target.style.height = "auto";
                        e.target.style.height = `${e.target.scrollHeight}px`;
                        handleFaqLangChange(idx, "th", "q", e.target.value);
                      }}
                      placeholder="คำถาม (TH)"
                      className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                    />
                    <textarea
                      value={faq.th.a}
                      onChange={(e) => {
                        e.target.style.height = "auto";
                        e.target.style.height = `${e.target.scrollHeight}px`;
                        handleFaqLangChange(idx, "th", "a", e.target.value);
                      }}
                      placeholder="คำตอบ (TH)"
                      className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-red-600">English</span>
                    <textarea
                      value={faq.en.q}
                      onChange={(e) => {
                        e.target.style.height = "auto";
                        e.target.style.height = `${e.target.scrollHeight}px`;
                        handleFaqLangChange(idx, "en", "q", e.target.value);
                      }}
                      placeholder="Question (EN)"
                      className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                    />
                    <textarea
                      value={faq.en.a}
                      onChange={(e) => {
                        e.target.style.height = "auto";
                        e.target.style.height = `${e.target.scrollHeight}px`;
                        handleFaqLangChange(idx, "en", "a", e.target.value);
                      }}
                      placeholder="Answer (EN)"
                      className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setFaqs(faqs.filter((_, i) => i !== idx))}
                  className="absolute top-2 right-2 text-red-500"
                >
                  ✖
                </button>
              </div>
            ))}
          </div>

          {/* SECTION 6: CALL TO ACTION (CTA) */}
          <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-100 space-y-4">
            <h2 className="text-base font-bold text-[#042451]">
              🚀 ส่วนท้ายปิดการขาย (Call To Action - CTA)
            </h2>
            <div>
              <label className="block font-semibold mb-1 text-xs">
                CTA Link (URL ปลายทางใช้ร่วมกัน)
              </label>
              <input
                type="text"
                name="ctaLink"
                value={formData.ctaLink}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 p-2.5 text-xs"
              />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-3 bg-blue-50/30 rounded-xl border space-y-2">
                <span className="font-bold text-blue-700 text-xs">
                  🇹🇭 ข้อความปุ่ม CTA ภาษาไทย
                </span>
                <input
                  type="text"
                  placeholder="หัวข้อ CTA (TH)"
                  value={formData.th.ctaTitle}
                  onChange={(e) =>
                    handleLangChange("th", "ctaTitle", e.target.value)
                  }
                  className="w-full border p-2 text-xs rounded"
                />
                <textarea
                  placeholder="รายละเอียด CTA (TH)"
                  value={formData.th.ctaText3}
                  onChange={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                    handleLangChange("th", "ctaText3", e.target.value);
                  }}
                  className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                />
                <input
                  type="text"
                  placeholder="ข้อความบนปุ่ม (TH)"
                  value={formData.th.ctaButtonText}
                  onChange={(e) =>
                    handleLangChange("th", "ctaButtonText", e.target.value)
                  }
                  className="w-full border p-2 text-xs rounded"
                />
                <input
                  type="text"
                  placeholder="ฟุตเตอร์ใต้ปุ่ม (TH)"
                  value={formData.th.ctaFooterText}
                  onChange={(e) =>
                    handleLangChange("th", "ctaFooterText", e.target.value)
                  }
                  className="w-full border p-2 text-xs rounded"
                />
              </div>
              <div className="p-3 bg-red-50/30 rounded-xl border space-y-2">
                <span className="font-bold text-red-700 text-xs">
                  🇺🇸 CTA English Text
                </span>
                <input
                  type="text"
                  placeholder="CTA Title (EN)"
                  value={formData.en.ctaTitle}
                  onChange={(e) =>
                    handleLangChange("en", "ctaTitle", e.target.value)
                  }
                  className="w-full border p-2 text-xs rounded"
                />
                <textarea
                  placeholder="CTA Description (EN)"
                  value={formData.en.ctaText3}
                  onChange={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                    handleLangChange("en", "ctaText3", e.target.value);
                  }}
                  className="w-full resize-none overflow-hidden rounded-lg border bg-white p-2 text-xs"
                />
                <input
                  type="text"
                  placeholder="Button Text (EN)"
                  value={formData.en.ctaButtonText}
                  onChange={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                    handleLangChange("en", "ctaButtonText", e.target.value);
                  }}
                  className="w-full border p-2 text-xs rounded"
                />
                <input
                  type="text"
                  placeholder="Footer text (EN)"
                  value={formData.en.ctaFooterText}
                  onChange={(e) =>
                    handleLangChange("en", "ctaFooterText", e.target.value)
                  }
                  className="w-full border p-2 text-xs rounded"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-[#042451]">
              ผู้เขียน / บันทึก (Author)
            </label>
            <input
              type="text"
              name="author"
              value={
                formData.author || (loadingUser ? "กำลังโหลด..." : "Admin")
              }
              readOnly
              placeholder="ระบบจะระบุชื่อผู้บันทึกให้อัตโนมัติ"
              className="w-full rounded-xl border border-gray-300 p-3 bg-gray-100 text-gray-600 cursor-not-allowed outline-none"
            />
          </div>

          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-md flex items-center justify-between">
            <div>
              <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider block">
                ผู้ใช้งานปัจจุบัน
              </span>
              <h3 className="text-sm font-bold text-gray-800">
                {loadingUser
                  ? "🔄 กำลังโหลดข้อมูลผู้ใช้..."
                  : userData
                    ? `👤 ${userData.Nickname || userData.user} (${userData.role})`
                    : "❌ ไม่พบข้อมูลผู้ใช้"}
              </h3>
            </div>
            {userData?.uid && (
              <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">
                UID: {userData.uid}
              </span>
            )}
          </div>

          {/* Action Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 p-4 text-base font-bold text-white hover:bg-blue-700 transition-all shadow-md"
          >
            👁️ ดูตัวอย่างบล็อก (Preview) ก่อนบันทึก
          </button>
        </form>
      </div>

      {/* Preview Modal */}
      <BlogPreviewModal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        onConfirm={handleConfirmSave}
        loading={loading}
        previewPayload={previewPayload}
        previewLang={previewLang}
        setPreviewLang={setPreviewLang}
      />
    </div>
  );
}
