"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useLanguage } from "@/hook/useLanguage";

const RegisterPage = () => {
  const { dict, lang, langPath, router } = useLanguage();
  const formRef = useRef();

  const [showInfo, setShowInfo] = useState(false);

  const [checkone, setCheckone] = useState(true);
  const [checktwo, setChecktwo] = useState(true);
  const [checkError, setCheckError] = useState(false);
  const [checkAddress, setCheckAddress] = useState(false);

  const [loading, setLoading] = useState(false);

  const [studentName, setStudentName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentAddress, setParentAddress] = useState("");

  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = (date) => {
    const today = new Date();
    const birth = new Date(date);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    // ถ้าวันติดลบ → ยืมเดือน
    if (days < 0) {
      months--;
      const prevMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0,
      ).getDate();
      days += prevMonth;
    }

    // ถ้าเดือนติดลบ → ยืมปี
    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setBirthDate(value);

    if (value) {
      setAge(calculateAge(value));
    }
  };

  const isFormValid =
    studentName.trim() !== "" &&
    schoolName.trim() !== "" &&
    age !== "" &&
    parentName.trim() !== "" &&
    birthDate.trim() !== "" &&
    parentPhone.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkone) {
      setCheckError(true);
      return;
    } else {
      setCheckError(false);
    }
    if (parentEmail.trim() !== "" && parentAddress.trim() === "") {
      setCheckAddress(true);
      return;
    } else {
      setCheckAddress(false);
    }

    if (!isFormValid) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_codeacademy",
        // "service_gmailkhanoontest",
        "template_gal34n7",
        // "template_1p8tepg",
        formRef.current,
        "Dwq3JqPF8Lx4j4ZBG",
        // "KfxWvpUaLRtI3KASB",
      )
      .then(
        () => {
          router.push(langPath("/thankyoupage"));
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  useEffect(() => {
    const handleClickOutside = () => setShowInfo(false);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
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

      <div className="mx-auto mt-20 w-full max-w-3xl gap-10 md:mt-20 md:grid md:gap-16 md:w-[32rem]">
        {/* Title */}
        <h1
          className={`w-full max-w-[32rem] -mt-3 text-center text-xl md:text-left md:text-3xl ${
            lang === "th" ? "looped-text" : ""
          }`}
        >
          {dict.register_1}
        </h1>

        <div className="mt-2 w-full md:mx-0 md:-mt-14">
          <h3 className="mb-4 text-center text-xs md:text-left md:text-base">
            {dict.register_2}
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {/* Student name */}
            <div>
              <label className="mb-1 block text-sm font-medium opacity-80 md:text-lg">
                {dict.register_3}
              </label>
              <input
                type="text"
                name="student_name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder={dict.register_4}
                className="w-full rounded-md bg-white px-3 py-2 text-sm text-black placeholder:text-xs md:px-4 md:text-base"
              />
            </div>

            {/* DOB */}
            <div className="flex flex-wrap items-center gap-2">
              <label className="w-full text-sm font-medium opacity-80 md:w-auto md:text-lg">
                {dict.register_5}
              </label>

              <input
                type="date"
                value={birthDate}
                name="DOB"
                onChange={handleChange}
                className="flex-1 min-w-[140px] rounded-md bg-white px-3 py-2 text-sm text-black md:flex-none md:px-4 md:text-base"
              />

              <p className="flex-1 min-w-[120px] text-center rounded-full bg-[#79bc6b] px-4 py-2 text-sm text-white md:flex-none md:text-base">
                {age
                  ? `${age.years} ${dict.register_5_1} ${age.months} ${dict.register_5_2}`
                  : // ? `${age.years} ${dict.register_5_1} ${age.months} ${dict.register_5_2} ${age.days} ${dict.register_5_3}`
                    "-"}
              </p>

              <input
                type="hidden"
                name="student_age"
                value={
                  age
                    ? `${age.years} ${dict.register_5_1} ${age.months} ${dict.register_5_2} ${age.days} ${dict.register_5_3}`
                    : ""
                }
              />
            </div>

            {/* School */}
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <label className="text-sm font-medium opacity-80 md:w-1/3 md:text-lg">
                {dict.register_6}
              </label>

              <input
                type="text"
                name="student_school"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                placeholder={dict.register_6_1}
                className="w-full rounded-md bg-white px-3 py-2 text-sm text-black placeholder:text-xs md:w-2/3 md:px-4 md:text-base"
              />
            </div>

            {/* Parent */}
            <div>
              <label className="mb-1 block text-sm font-medium opacity-80 md:text-lg">
                {dict.register_7}
              </label>
              <input
                type="text"
                name="parent_name"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder={dict.register_7_1}
                className="w-full rounded-md bg-white px-3 py-2 text-sm text-black placeholder:text-xs md:px-4 md:text-base"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium opacity-80 md:text-lg">
                {dict.register_8}
              </label>
              <input
                type="text"
                name="parent_number"
                value={parentPhone}
                onChange={(e) => setParentPhone(e.target.value)}
                placeholder={dict.register_8_1}
                className="w-full rounded-md bg-white px-3 py-2 text-sm text-black placeholder:text-xs md:px-4 md:text-base"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-sm font-medium opacity-80 md:text-lg">
                {dict.register_9}
              </label>
              <input
                type="text"
                name="email"
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
                placeholder={dict.register_9_1}
                className="w-full rounded-md bg-white px-3 py-2 text-sm text-black placeholder:text-xs md:px-4 md:text-base"
              />
            </div>

            {/* Address */}
            {parentEmail.trim() !== "" && (
              <div>
                <label className="mb-1 block text-sm font-medium opacity-80 md:text-lg">
                  {dict.register_13}
                </label>
                <input
                  type="text"
                  name="address_detail"
                  value={parentAddress}
                  onChange={(e) => {
                    setParentAddress(e.target.value);
                    setCheckAddress(false);
                  }}
                  placeholder={dict.register_13_1}
                  className={`w-full rounded-md px-3 py-2 text-sm text-black placeholder:text-xs ${
                    checkAddress ? "border-2 border-red-400" : "bg-white"
                  }`}
                />

                {checkAddress && (
                  <p className="mt-1 text-sm text-red-400">
                    {dict.register_14}
                  </p>
                )}
              </div>
            )}

            {/* Info */}
            <p className="text-sm md:text-base">
              {dict.register_10}

              <span className="group relative ml-1 inline-block">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowInfo(!showInfo);
                  }}
                  className="cursor-pointer text-white opacity-80 hover:opacity-100"
                >
                  <div className="flex items-center justify-center bg-blue-500 w-6 h-6 border-2 border-blue-500 text-white rounded-md font-bold text-lg">
                    !
                  </div>
                </button>

                {/* 🔥 Mobile (click) */}
                <span
                  className={`
                    absolute bottom-full left-1/2 mb-2 w-64 -translate-x-1/2
                    rounded-md bg-gray-200 px-3 py-2 text-xs text-black shadow-lg
                    transition md:hidden
                    ${showInfo ? "block" : "hidden"}
                  `}
                >
                  {dict.register_10_1}
                </span>

                {/* 💻 Desktop (hover) */}
                <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 hidden w-64 -translate-x-1/2 rounded-md bg-gray-200 px-3 py-2 text-xs text-black opacity-0 shadow-lg transition group-hover:opacity-100 md:block">
                  {dict.register_10_1}
                </span>
              </span>
            </p>

            {/* Checkbox */}
            <div className="space-y-2 text-sm md:text-base">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="consent"
                  checked={checkone}
                  onChange={() => {
                    setCheckone(!checkone);
                    setCheckError(false);
                  }}
                  className="mt-1 accent-[#4bf762]"
                />
                <span>{dict.register_11}</span>
              </label>

              {checkError && (
                <p className="text-red-400">{dict.register_11_1}</p>
              )}

              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="pdpa"
                  checked={checktwo}
                  onChange={() => setChecktwo(!checktwo)}
                  className="mt-1 accent-[#4bf762]"
                />
                <span>{dict.register_12}</span>
              </label>
            </div>

            {/* CTA */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`mt-4 w-full rounded-md py-3 text-base font-semibold md:text-lg
            ${
              isFormValid
                ? "bg-[#F7C64B] text-[#042451] hover:bg-[#f1cb61]"
                : "cursor-not-allowed bg-gray-400 text-gray-600"
            }
          `}
            >
              {dict.registration_1}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
