/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import img1 from "@/assets/others/prepare.webp";
import img2 from "@/assets/others/why.webp";
import img3 from "@/assets/others/catpeek.webp";
import { useLanguage } from "@/hook/useLanguage";

const Layer2 = () => {
  const {dict, lang, langPath} = useLanguage();
  const router = useRouter();

  const [contactType, setContactType] = useState("phone");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (contactType === "phone" && !phone) return;
    if (contactType === "email" && !email) return;
    setLoading(true);
    setTimeout(() => {
      router.push(langPath("/trialclass"), {
        state: { contactType, phone, email },
      });
    }, 1500);
  };

  const isDisabled =
    (contactType === "phone" && (phone.length !== 10 || phoneError)) ||
    (contactType === "email" && (emailError || !email));

  return (
    <section>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
            <p className="font-semibold text-white">กำลังโหลด...</p>
          </div>
        </div>
      )}

      <div className="relative flex h-full w-full flex-col items-center bg-[#E8FBFB] py-[70px] font-comfortaa">
        <div className="-mt-11 flex w-[90%] flex-col items-center text-base md:w-[70%] md:text-xl md:-mt-8">
          <div className="flex flex-col text-center text-sm md:flex-row md:gap-2 md:text-xl md:whitespace-nowrap">
            <span>👩‍💻{dict.layer2_6_1}</span>
            <span>🌐{dict.layer2_6_2}</span>
            <span>✅{dict.layer2_6_3}</span>
          </div>

          <div className="mt-4 flex w-full max-w-4xl items-center gap-2 font-comfortaa">
            <div className="w-full space-y-4">
              <div className="flex w-full flex-col gap-4 rounded-xl bg-white p-6 shadow-lg">
                <div className="text-center font-semibold">
                  {dict.layer2_6_4}
                </div>
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

                {contactType === "phone" ? (
                  <input
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={(e) => {
                      const value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);
                      setPhone(value);
                      setPhoneError(
                        value && value.length !== 10
                          ? "กรุณากรอกเบอร์โทรให้ครบ 10 หลัก"
                          : "",
                      );
                    }}
                    placeholder={dict.trialcall_4_1}
                    className={`w-full rounded-md border px-4 py-2 text-black focus:outline-none focus:ring-2 ${
                      phoneError
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-[#F7C94B]"
                    } placeholder:text-gray-400 md:placeholder:text-base`}
                  />
                ) : (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      const value = e.target.value;
                      setEmail(value);
                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                      setEmailError(
                        value && !emailRegex.test(value)
                          ? "รูปแบบอีเมลไม่ถูกต้อง"
                          : "",
                      );
                    }}
                    placeholder={dict.trialcall_5_1}
                    className={`w-full rounded-md border px-4 py-2 text-black focus:outline-none focus:ring-2 ${
                      emailError
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-[#F7C94B]"
                    } placeholder:text-gray-400 md:placeholder:text-base`}
                  />
                )}
                <button
                  disabled={isDisabled}
                  onClick={handleSubmit}
                  className="h-[42px] w-full rounded-md bg-[#F7C94B] font-semibold text-[#042451] transition hover:bg-[#f1cb61] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {dict.layer2_6_5}
                </button>
                <p className="text-center text-[0.6rem] leading-tight opacity-70 md:text-sm md:leading-normal">
                  💖{dict.layer2_6_6}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center bg-[#FFFFFF] pb-[50px] pt-[30px] font-comfortaa">
        <div className="mx-auto flex w-[90%] max-w-6xl flex-col items-center gap-16 md:flex-row md:items-start md:justify-between">
          {/* LEFT SECTION */}
          <div className="flex w-full flex-col items-center p-3 md:w-[48%]">
            <p
              className={`mb-6 text-center text-xl font-bold md:text-2xl ${lang === "th" ? "looped-text" : ""}`}
            >
              {dict.layer2_1}
            </p>

            <Image
              className="my-4 rounded-2xl drop-shadow-xl h-auto w-full"
              src={img1}
              alt="Studying"
              width={600} // ระบุขนาดเพื่อให้สอดคล้องกับ Layout
              height={400}
              priority
            />

            <p className="mb-3 text-start leading-relaxed">{dict.layer2_2}</p>
            <p className="text-start leading-relaxed">
              {dict.layer2_2_1}
              <br />
              <Link
                href={langPath("/aboutCoding")}
                className="font-normal text-[#0071E3] transition hover:text-[#0061c1] hover:underline"
              >
                {dict.layer2_3}
              </Link>
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex w-full flex-col items-center p-3 md:w-[48%]">
            <p
              className={`mb-6 text-center text-xl font-bold md:text-2xl md:mb-14 ${lang === "th" ? "looped-text" : ""}`}
            >
              {dict.layer2_4}
            </p>

            {/* Container สำหรับรูปที่ซ้อนกัน */}
            <div className="relative my-4 w-full">
              <Image
                className="rounded-2xl drop-shadow-xl h-auto w-full"
                src={img2}
                alt="Why Choose Us"
                width={600}
                height={400}
              />
              {/* Cat Peeking - ใช้ Fill เพื่อให้ขยายตาม Div ครอบที่มีการทำ Absolute */}
              <div className="absolute left-0 top-0 w-[22%] h-[22%] -translate-x-[35%] -translate-y-[55%]">
                <Image
                  src={img3}
                  alt="Cat peeking"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="mb-3 text-start leading-relaxed">
              💡{dict.layer2_5_1}
            </p>
            <p className="mb-3 text-start leading-relaxed">
              🧑‍💻{dict.layer2_5_4}
            </p>
            <p className="text-start leading-relaxed">
              🎤{dict.layer2_5_5}
              <br />
              <Link
                href={langPath("/aboutUs")}
                className="font-normal text-[#0071E3] transition hover:text-[#0061c1] hover:underline"
              >
                {dict.layer2_3_1}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layer2;
