"use client";

import DynamicBlogContent from "@/app/[lang]/blogs/[category]/[slug]/components/DynamicBlogContent";

export default function BlogPreviewModal({
  isOpen,
  onClose,
  onConfirm,
  loading,
  previewPayload,
  previewLang,
  setPreviewLang,
}) {
  if (!isOpen || !previewPayload) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/80 backdrop-blur-xs">
      {/* Top Floating Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white px-6 py-4 shadow-md">
        <div className="flex items-center gap-3">
          <span className="font-bold text-gray-800">
            🔍 หน้าต่างแสดงตัวอย่าง (Preview Mode)
          </span>
          <div className="flex rounded-lg bg-gray-100 p-1 border">
            <button
              type="button"
              onClick={() => setPreviewLang("th")}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                previewLang === "th"
                  ? "bg-white text-blue-600 shadow-xs"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              🇹🇭 ภาษาไทย
            </button>
            <button
              type="button"
              onClick={() => setPreviewLang("en")}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                previewLang === "en"
                  ? "bg-white text-blue-600 shadow-xs"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              🇺🇸 English
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-all"
          >
            ✏️ กลับไปแก้ไข
          </button>
          <button
            type="button"
            disabled={loading}
            onClick={onConfirm}
            className="rounded-xl bg-green-600 px-6 py-2 text-sm font-bold text-white hover:bg-green-700 disabled:bg-gray-400 transition-all shadow-md"
          >
            {loading ? "กำลังบันทึก..." : "🚀 ยืนยันการบันทึกข้อมูล"}
          </button>
        </div>
      </div>

      {/* Dynamic Content Preview Window */}
      <div className="flex-1 overflow-y-auto bg-gray-100">
        <DynamicBlogContent
          dict={{}}
          lang={previewLang}
          blogData={previewPayload}
        />
      </div>
    </div>
  );
}