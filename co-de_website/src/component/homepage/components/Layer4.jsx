import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useLangPath } from "../../../guardlang";
// เพิ่มการ import Image
import Image from "next/image";

const Layer4 = () => {
  const { t } = useTranslation();
  const langPath = useLangPath();

  return (
    <section>
      <div className="flex h-full w-full flex-col items-center justify-between bg-[#cce6e4] py-[70px] font-comfortaa text-white">
        
        {/* Row 1 */}
        <div className="flex w-[85%] flex-col items-center bg-transparent md:flex-row md:justify-around">
          <Link
            href={langPath("/playground")}
            className="relative my-5 flex w-[90%] cursor-pointer items-center justify-center drop-shadow-xl transition-transform duration-500 hover:scale-105 active:opacity-[0.9] md:w-[45%]"
          >
            <Image
              src="/assets/about/classroom.webp"
              alt="Classroom"
              width={600} // ระบุความกว้างโดยประมาณ
              height={400} // ระบุความสูงโดยประมาณ
              className="rounded-3xl opacity-[0.95] brightness-75 w-full h-auto object-cover"
              loading="lazy"
            />
            <p className="absolute w-[80%] text-center text-xl leading-relaxed underline underline-offset-[5px] md:text-2xl md:underline-offset-[7px] md:leading-relaxed">
              {t("layer4_1")}
            </p>
          </Link>

          <Link
            href={langPath("/aboutUs")}
            className="relative my-5 flex w-[90%] cursor-pointer items-center justify-center drop-shadow-xl transition-transform duration-500 hover:scale-105 active:opacity-[0.9] md:w-[45%]"
          >
            <Image
              src="/assets/about/team.webp"
              alt="Team Teachers"
              width={600}
              height={400}
              className="rounded-3xl opacity-[0.95] brightness-75 w-full h-auto object-cover"
              loading="lazy"
            />
            <p className="absolute w-[80%] text-center text-xl leading-relaxed underline underline-offset-[5px] md:text-2xl md:underline-offset-[7px] md:leading-relaxed">
              {t("layer4_2")}<br />
              {t("layer4_2_1")}
            </p>
          </Link>
        </div>

        {/* Row 2 */}
        <div className="flex w-[85%] flex-col items-center bg-transparent md:flex-row md:justify-around">
          <Link
            href={langPath("/pitchingStage")}
            className="relative my-5 flex w-[90%] cursor-pointer items-center justify-center drop-shadow-xl transition-transform duration-500 hover:scale-105 active:opacity-[0.9] md:w-[45%]"
          >
            <Image
              src="/assets/about/stage.webp"
              alt="Pitching Stage"
              width={600}
              height={400}
              className="rounded-3xl opacity-[0.95] brightness-75 w-full h-auto object-cover"
              loading="lazy"
            />
            <p className="absolute w-[80%] text-center text-xl leading-relaxed underline underline-offset-[5px] md:text-2xl md:underline-offset-[7px] md:leading-relaxed">
              {t("layer4_3")}<br />
              {t("layer4_3_1")}
            </p>
          </Link>

          <Link
            href={langPath("/kidsproject")}
            className="relative my-5 flex w-[90%] cursor-pointer items-center justify-center drop-shadow-xl transition-transform duration-500 hover:scale-105 active:opacity-[0.9] md:w-[45%]"
          >
            <Image
              src="/assets/about/kidsproject.webp"
              alt="Kids Project"
              width={600}
              height={400}
              className="rounded-3xl opacity-[0.95] brightness-75 w-full h-auto object-cover"
              loading="lazy"
            />
            <p className="absolute w-[80%] text-center text-xl leading-relaxed underline underline-offset-[5px] md:text-2xl md:underline-offset-[7px] md:leading-relaxed">
              {t("layer4_4")}
            </p>
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default Layer4;