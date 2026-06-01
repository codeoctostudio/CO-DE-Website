import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useLangPath } from "../../guardlang";
import { useRouter, useParams, usePathname } from "next/navigation";
import Image from "next/image";

const Nav = (props) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const langPath = useLangPath();
  const router = useRouter();
  const pathname = usePathname();
  const { lang } = useParams();

  const setLanguage = (newLang) => {
    if (newLang === lang) return;
    // ใช้ pathname จาก usePathname แทน location.pathname เพื่อความปลอดภัยใน Next.js
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <>
      <div
        className={`fixed left-0 right-0 top-0 z-50 flex h-[370px] flex-col rounded-b-[20px] bg-[#00B0E6] py-4 pl-10 pt-[80px] transition-transform duration-500 md:hidden ${props.isVisible ? "translate-y-0" : "-translate-y-[500px]"}`}
      >
        <Link
          href={langPath("/courses")}
          className="my-4 ml-3 cursor-pointer select-none font-comfortaa text-xl text-white hover:opacity-80 active:opacity-50"
          onClick={props.toggle} // ปิดเมนูเมื่อคลิก Link
        >
          {t("courses")}
        </Link>
        <Link
          href={langPath("/playground")}
          className="my-4 ml-3 cursor-pointer select-none font-comfortaa text-xl text-white hover:opacity-80 active:opacity-50"
          onClick={props.toggle}
        >
          {t("playground")}
        </Link>
        <Link
          href={langPath("/blogs")}
          className="my-4 ml-3 cursor-pointer select-none font-comfortaa text-xl text-white hover:opacity-80 active:opacity-50"
          onClick={props.toggle}
        >
          {t("trends")}
        </Link>
        <Link
          href={langPath("/contactUs")}
          className="my-4 ml-3 cursor-pointer select-none font-comfortaa text-xl text-white hover:opacity-80 active:opacity-50"
          onClick={props.toggle}
        >
          {t("contact")}
        </Link>

        <div className="flex items-center gap-4 ml-3 mt-2">
          {/* TH Flag */}
          <button
            onClick={() => setLanguage("th")}
            className={`relative h-[24px] w-[34px] rounded-md overflow-hidden transition ${currentLang === "th" ? "border-2 border-white bg-white/20" : "opacity-70 hover:opacity-100"}`}
          >
            <Image
              src="/assets/others/thaiflag.webp"
              alt="TH"
              fill
              className="object-cover"
            />
          </button>

          {/* EN Flag */}
          <button
            onClick={() => setLanguage("en")}
            className={`relative h-[24px] w-[34px] rounded-md overflow-hidden transition ${currentLang === "en" ? "border-2 border-white bg-white/20" : "opacity-70 hover:opacity-100"}`}
          >
            <Image
              src="/assets/others/ukflag.webp"
              alt="EN"
              fill
              className="object-cover"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;