"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import BlogPreviewModal from "./components/BlogPreviewModal";

export default function BlogManagementPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [deleteModal, setDeleteModal] = useState({ open: false, blog: null });
  const [isDeleting, setIsDeleting] = useState(false);

  // State สำหรับ User Session ปัจจุบัน
  const [currentUser, setCurrentUser] = useState(null);

  // State เพิ่มเติมสำหรับ Preview Modal
  const [showPreview, setShowPreview] = useState(false);
  const [previewPayload, setPreviewPayload] = useState(null);
  const [previewLang, setPreviewLang] = useState("th");

  // ดึงข้อมูล User ปัจจุบัน
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("https://admin.co-deacademy.com/api/me.php", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          if (data.ok) {
            setCurrentUser(data);
          }
        }
      } catch (err) {
        console.error("Error fetching user session:", err);
      }
    };

    fetchUserData();
  }, []);

  // ดึงข้อมูลบล็อกทั้งหมดจาก API
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      if (res.ok) {
        setBlogs(data.blogs || []);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Fetch Blogs Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // หมวดหมู่สำหรับ Filter
  const categories = [
    { key: "all", label: "ทั้งหมด" },
    { key: "tutorials", label: "Tutorials" },
    { key: "parents", label: "Parents" },
    { key: "technology-trends", label: "Trends" },
    { key: "guide", label: "Guide" },
    { key: "reward", label: "Reward" },
  ];

  // ค้นหาและกรองข้อมูล (อัปเดตให้รองรับทั้ง category_type และ categoryType)
  const filteredBlogs = blogs.filter((blog) => {
    const titleTh = blog.th?.introTitle || "";
    const titleEn = blog.en?.introTitle || "";
    const slug = blog.slug || "";
    const author = blog.author || "";
    const category = blog.category_type || blog.categoryType || "";

    const matchesSearch =
      titleTh.toLowerCase().includes(searchTerm.toLowerCase()) ||
      titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
      author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // ฟังก์ชันลบบล็อกผ่าน API
  const handleDeleteConfirm = async () => {
    if (!deleteModal.blog?.slug) return;

    setIsDeleting(true);
    try {
      const res = await fetch(`/api/blogs?slug=${deleteModal.blog.slug}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setBlogs((prev) =>
          prev.filter((b) => b.slug !== deleteModal.blog.slug),
        );
        setDeleteModal({ open: false, blog: null });
      } else {
        const errorData = await res.json();
        alert(errorData.error || "เกิดข้อผิดพลาดในการลบบทความ");
      }
    } catch (error) {
      console.error("Delete Blog Error:", error);
      alert("ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์เพื่อลบบทความได้");
    } finally {
      setIsDeleting(false);
    }
  };

  // ชื่อผู้ใช้งานปัจจุบันที่ Login อยู่
  const activeUserName = currentUser?.Nickname || currentUser?.user || "";
  const isBoss = currentUser?.role?.toLowerCase() === "boss";

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-comfortaa">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#042451]">
              จัดการบทความ (Blogs Management)
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              แก้ไข ลบ หรือดูตัวอย่างบทความที่เผยแพร่แล้วทั้งหมด
            </p>
          </div>
          <Link
            href="/th/admin/blogs/news"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-all"
          >
            <span>➕</span> เขียนบทความใหม่
          </Link>
        </div>

        {/* Search & Filters */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="w-full md:w-96 relative">
            <input
              type="text"
              placeholder="ค้นหาตามชื่อ, Slug หรือผู้เขียน..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.key
                    ? "bg-[#042451] text-white shadow-xs"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Table / List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-xs text-gray-500 uppercase">
                  <th className="py-4 px-6">บทความ</th>
                  <th className="py-4 px-4">หมวดหมู่</th>
                  <th className="py-4 px-4">ผู้บันทึก</th>
                  <th className="py-4 px-4">สร้างเมื่อ</th>
                  <th className="py-4 px-6 text-right">การจัดการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-gray-400">
                      กำลังโหลดข้อมูลบทความ...
                    </td>
                  </tr>
                ) : filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog) => {
                    const canManage =
                      isBoss ||
                      (activeUserName &&
                        blog.author &&
                        blog.author.trim().toLowerCase() ===
                          activeUserName.trim().toLowerCase());

                    // ดึงค่ารูปภาพ (รองรับ image_url)
                    const imgUrl = blog.image_url || blog.imageUrl || "/images/fallback.webp";
                    
                    // ดึงค่าหมวดหมู่ (รองรับ category_type)
                    const category = blog.category_type || blog.categoryType || "ไม่มีหมวดหมู่";

                    // ดึงค่า วันที่สร้าง (รองรับ created_at)
                    const rawDate = blog.created_at || blog.createdAt;

                    return (
                      <tr
                        key={blog.slug}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        {/* Title & Image */}
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100 border">
                              <Image
                                src={imgUrl}
                                alt={blog.th?.introTitle || "Blog Image"}
                                fill
                                className="object-cover"
                                unoptimized={
                                  imgUrl.startsWith("blob:") ||
                                  imgUrl.startsWith("data:")
                                }
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-[#042451] truncate max-w-xs sm:max-w-md">
                                {blog.th?.introTitle ||
                                  blog.en?.introTitle ||
                                  "ไม่มีชื่อบทความ"}
                              </p>
                              <p className="text-xs text-gray-400 truncate">
                                /{blog.slug}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Category */}
                        <td className="py-4 px-4">
                          <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">
                            {category}
                          </span>
                        </td>

                        {/* Author */}
                        <td className="py-4 px-4 text-xs font-medium text-gray-700">
                          <span className="inline-flex items-center gap-1.5 bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">
                            👤 {blog.author || "ไม่ระบุ"}
                          </span>
                        </td>

                        {/* Created Date */}
                        <td className="py-4 px-4 text-xs text-gray-500">
                          {rawDate
                            ? new Date(rawDate).toLocaleDateString("th-TH", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })
                            : "-"}
                        </td>

                        {/* Actions */}
                        <td className="py-4 px-6 text-right space-x-2">
                          <Link
                            href={`/admin/blogs/preview/${blog.slug}`}
                            className="inline-flex items-center p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                            title="ดูตัวอย่าง (Preview)"
                          >
                            👁️
                          </Link>

                          {canManage ? (
                            <Link
                              href={`/th/admin/blogs/news?slug=${blog.slug}`}
                              className="inline-flex items-center p-2 text-gray-500 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all"
                              title="แก้ไขบทความ"
                            >
                              ✏️
                            </Link>
                          ) : (
                            <button
                              disabled
                              className="inline-flex items-center p-2 text-gray-300 cursor-not-allowed"
                              title="ไม่มีสิทธิ์แก้ไขบทความนี้"
                            >
                              🔒
                            </button>
                          )}

                          {canManage ? (
                            <button
                              onClick={() =>
                                setDeleteModal({ open: true, blog })
                              }
                              className="inline-flex items-center p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                              title="ลบบทความ"
                            >
                              🗑️
                            </button>
                          ) : (
                            <button
                              disabled
                              className="inline-flex items-center p-2 text-gray-300 cursor-not-allowed"
                              title="ไม่มีสิทธิ์ลบบทความนี้"
                            >
                              🚫
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-gray-400">
                      ไม่พบบทความที่ค้นหา
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900">
              ยืนยันการลบบทความ?
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              คุณต้องการลบบทความ{" "}
              <span className="font-semibold text-gray-800">
                "{deleteModal.blog?.th?.introTitle || deleteModal.blog?.slug}"
              </span>{" "}
              ใช่หรือไม่? การกระทำนี้ไม่สามารถย้อนกลับได้
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                disabled={isDeleting}
                onClick={() => setDeleteModal({ open: false, blog: null })}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all disabled:opacity-50"
              >
                ยกเลิก
              </button>
              <button
                disabled={isDeleting}
                onClick={handleDeleteConfirm}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-red-600 hover:bg-red-700 shadow-md transition-all disabled:opacity-50"
              >
                {isDeleting ? "กำลังลบ..." : "ลบบทความ"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BlogPreviewModal */}
      <BlogPreviewModal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        onConfirm={() => {
          window.location.href = `/admin/blogs/edit/${previewPayload?.slug}`;
        }}
        loading={false}
        previewPayload={previewPayload}
        previewLang={previewLang}
        setPreviewLang={setPreviewLang}
      />
    </div>
  );
}