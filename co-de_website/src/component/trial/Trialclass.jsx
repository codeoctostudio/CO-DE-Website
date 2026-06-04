"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image"; // 🌟 เพิ่ม Import ตัวนี้เพื่อป้องกัน Error: Image is not defined
import emailjs from "@emailjs/browser";

import Jacob from "@/assets/randomimages/Jacob.webp";
import Boeing from "@/assets/randomimages/Boeing.webp";
import Jeremy from "@/assets/randomimages/Jeremy.webp";
import { useLanguage } from "@/hook/useLanguage";

const TrialClass = () => {
  const { dict, lang, langPath, router } = useLanguage();
  const searchParams = useSearchParams();
  const formRef = useRef();

  const contactTypeProp = searchParams.get("contactType") || "phone";
  const phoneProp = searchParams.get("phone") || "";
  const emailProp = searchParams.get("email") || "";

  const [loading, setLoading] = useState(false);
  const [selectedAge, setSelectedAge] = useState(null);

  const [contactType, setContactType] = useState(contactTypeProp);
  const [phone, setPhone] = useState(phoneProp);
  const [email, setEmail] = useState(emailProp);

  const [studentName, setStudentName] = useState("");
  const [schoolName, setSchoolName] = useState("");

  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const isFormValid =
    studentName.trim() !== "" &&
    schoolName.trim() !== "" &&
    selectedAge !== null &&
    ((contactType === "phone" && phone.length === 10 && !phoneError) ||
      (contactType === "email" && email && !emailError));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_codeacademy",
        "template_uaoq44h",
        formRef.current,
        "Dwq3JqPF8Lx4j4ZBG",
      )
      .then(
        () => {
          router.push(langPath("/thankyoupage"));
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        },
      );
  };

  const students = [
    {
      image: Jacob,
      name: "Jacob",
      message:
        "อยากชวนเพื่อนมาเรียน เพราะโค้ดดิ้งสนุก และเรียนที่นี่ทำให้เข้าใจโค้ดมากขึ้น",
      age: " 10 ปี",
    },
    {
      image: Boeing,
      name: "Boeing",
      message: "ผมชอบเรียนโค้ดดิ้งมากครับ ถึงยาก แต่สนุกมากครับ",
      age: " 10 ปี",
    },
    {
      image: Jeremy,
      name: "Jeremy",
      message:
        "ผมสามารถนำโค้ดดิ้งที่ผมเรียนที่นี่ไปช่วยเหลือเพื่อน ๆ คนอื่นได้ด้วยครับ",
      age: " 8 ปี",
    },
  ];

  const [randomStudent, setRandomStudent] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * students.length);
    setRandomStudent(students[randomIndex]);
  }, []);

  return (
    <main className="flex min-h-screen w-full items-center bg-[#042451] px-4 py-8 font-comfortaa text-white md:px-6 md:py-10">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
            <p className="font-semibold text-white">กำลังโหลด...</p>
          </div>
        </div>
      )}
      <div className="mx-auto mt-24 grid w-full max-w-full gap-16 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-24">
        {/* LEFT */}
        <div className="order-2 flex justify-center px-4 md:order-1 md:px-0">
          <div className="w-full max-w-xs rounded-xl bg-white p-4 text-[#042451] shadow-xl sm:max-w-sm sm:p-5 md:-mt-16 md:max-w-xs md:p-5 lg:max-w-[300px]">
            {randomStudent?.image && (
              <Image
                src={randomStudent.image}
                alt="Student"
                className="w-full rounded-lg object-cover"
              />
            )}

            <div className="mt-5 flex items-center gap-3 sm:gap-4">
              <p className="text-lg sm:text-xl">
                <span className="text-lg font-bold">&quot;</span>
                {randomStudent?.message}
                <span className="text-lg font-bold">&quot;</span>
              </p>
            </div>

            <p className="mt-3 text-end text-sm opacity-80">
              {randomStudent?.name} {randomStudent?.age}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="order-1 w-full md:order-2 md:w-full">
          <div className="w-full max-w-xl mx-auto md:mx-0">
            <h1 className="-mt-3 mb-4 text-center text-lg md:text-left md:text-[1.65rem]">
              {dict.trialcall_1}
            </h1>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Contact Type Toggle */}
              <div>
                <label className="mb-1 block text-sm opacity-80 md:text-lg">
                  {dict.trialcall_2}
                </label>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setContactType("phone")}
                    className={`flex-1 rounded-md border py-2 text-sm transition md:text-lg ${
                      contactType === "phone"
                        ? "border-white bg-[#F8E27A] text-[#042451]"
                        : "border-[#F8E27A] bg-white text-[#042451]"
                    }`}
                  >
                    📞 {dict.trialcall_3}
                  </button>

                  <button
                    type="button"
                    onClick={() => setContactType("email")}
                    className={`flex-1 rounded-md border py-2 text-sm transition md:text-lg ${
                      contactType === "email"
                        ? "border-white bg-[#F8E27A] text-[#042451]"
                        : "border-[#F8E27A] bg-white text-[#042451]"
                    }`}
                  >
                    📧 {dict.trialcall_5}
                  </button>
                </div>
              </div>

              {/* Dynamic Input (Phone/Email) */}
              <div>
                {contactType === "phone" ? (
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      const value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);
                      setPhone(value);

                      if (value && value.length !== 10) {
                        setPhoneError("กรุณากรอกเบอร์โทรให้ครบ 10 หลัก");
                      } else {
                        setPhoneError("");
                      }
                    }}
                    placeholder={dict.trialcall_4}
                    className={`-mt-2 w-full bg-white rounded-md px-3 py-2 text-black ${
                      phoneError
                        ? "border border-red-500 focus:ring-red-500"
                        : "border border-gray-300 focus:ring-[#F7C94B]"
                    } focus:outline-none focus:ring-2`}
                  />
                ) : (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      const value = e.target.value;
                      setEmail(value);

                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                      if (value && !emailRegex.test(value)) {
                        setEmailError("รูปแบบอีเมลไม่ถูกต้อง");
                      } else {
                        setEmailError("");
                      }
                    }}
                    placeholder={dict.trialcall_6}
                    className={`-mt-2 w-full bg-white rounded-md px-3 py-2 text-black ${
                      emailError
                        ? "border border-red-500 focus:ring-red-500"
                        : "border border-gray-300 focus:ring-[#F7C94B]"
                    } focus:outline-none focus:ring-2`}
                  />
                )}
              </div>

              {/* Student Name */}
              <div>
                <label className="mb-1 block text-sm opacity-80 md:text-lg">
                  {dict.trialcall_7}
                </label>
                <input
                  type="text"
                  name="student_name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder={dict.trialcall_7}
                  className="w-full rounded-md bg-white px-3 py-2 text-sm text-black md:px-4 md:text-base"
                />
              </div>

              {/* School Name */}
              <div>
                <label className="mb-1 block text-sm opacity-80 md:text-lg">
                  {dict.trialcall_12}
                </label>
                <input
                  type="text"
                  name="student_school"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  placeholder={dict.trialcall_12}
                  className="w-full rounded-md bg-white px-3 py-2 text-sm text-black md:px-4 md:text-base"
                />
              </div>

              {/* Age Selection */}
              <div>
                <label className="mb-2 block text-sm opacity-80 md:text-lg">
                  {dict.trialcall_8}
                </label>

                <div className="grid grid-cols-2 justify-around gap-2 sm:flex sm:flex-wrap md:flex-nowrap">
                  {[
                    dict.age_1,
                    dict.age_2,
                    dict.age_3,
                    dict.age_4,
                    dict.age_5,
                  ].map((age) => {
                    const isSelected = selectedAge === age;

                    return (
                      <button
                        key={age}
                        type="button"
                        onClick={() => setSelectedAge(age)}
                        className={`rounded-full border py-2 text-sm transition sm:px-4 sm:py-1 ${lang === "en" ? "md:text-sm" : "md:text-lg"} 
                        ${
                          isSelected
                            ? "border-white bg-[#F8E27A] text-[#042451]"
                            : "border-[#F8E27A] bg-white text-[#042451]"
                        }`}
                      >
                        {age}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Hidden Inputs for EmailJS */}
              <input type="hidden" name="parent_number" value={phone || ""} />
              <input type="hidden" name="email" value={email || ""} />
              <input
                type="hidden"
                name="student_age"
                value={selectedAge || ""}
              />

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full rounded-md py-3 text-base font-semibold md:text-lg ${
                  isFormValid
                    ? "bg-[#F7C64B] text-[#042451] hover:bg-[#f1cb61]"
                    : "cursor-not-allowed bg-gray-400 text-gray-600"
                }`}
              >
                {dict.trialcall_9}
              </button>

              {/* Tooltip text */}
              <div className="mt-2 space-y-1 text-start text-xs opacity-70">
                <p className="mt-2 text-start text-xs">
                  <span className="group relative ml-1 inline-block">
                    <button
                      type="button"
                      className="cursor-pointer text-white opacity-80 hover:opacity-100"
                    >
                      ⚡
                    </button>
                    <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 hidden w-64 -translate-x-1/2 rounded-md bg-black px-3 py-2 text-xs text-white opacity-0 shadow-lg transition group-hover:opacity-100 md:block">
                      ทีมงานจะติดต่อกลับผ่านเบอร์โทรศัพท์ที่คุณลงทะเบียนไว้
                      ภายใน 24 ชั่วโมง (เฉพาะวันทำการ)
                    </span>
                  </span>{" "}
                  {dict.trialcall_10}
                </p>
                <p className="mt-2 text-start text-xs">
                  <span className="group relative ml-1 inline-block">
                    <button
                      type="button"
                      className="cursor-pointer text-white opacity-80 hover:opacity-100"
                    >
                      ❕
                    </button>
                    <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 hidden w-64 -translate-x-1/2 rounded-md bg-black px-3 py-2 text-xs text-white opacity-0 shadow-lg transition group-hover:opacity-100 md:block">
                      ทีมงานจะติดต่อกลับผ่านเบอร์โทรศัพท์ที่คุณลงทะเบียนไว้
                      ภายใน 24 ชั่วโมง (เฉพาะวันทำการ)
                    </span>
                  </span>{" "}
                  {dict.trialcall_11}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TrialClass;
