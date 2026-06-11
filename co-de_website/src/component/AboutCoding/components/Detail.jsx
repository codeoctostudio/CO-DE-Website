import { useLanguage } from "@/hook/useLanguage";
const Detail = () => {
  const { dict } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center bg-[#042451] pt-[150px] font-comfortaa  text-white">
      <p className="mb-8 text-center  text-4xl">{dict.aboutCoding_1}</p>
      <section className="mb-16 flex w-[80%] flex-col items-center rounded-2xl bg-[#29446A]  px-5 py-10 drop-shadow-xl">
        <p className="mb-8  text-center text-xl md:text-3xl">
          {dict.aboutCoding_2}
        </p>
        <p className="mb-5  text-center text-sm sm:text-base md:text-lg  ">
          {dict.aboutCoding_3}
        </p>
        <p className=" text-center text-sm sm:text-base md:text-lg  ">
          {dict.aboutCoding_4}
        </p>
      </section>

      <section className="mb-16 flex w-[80%] flex-col items-center rounded-2xl  bg-[#6FBC86] px-5 py-10">
        <p className="text-center text-sm sm:text-base md:text-lg ">
          {dict.aboutCoding_5}
        </p>
      </section>

      <section className="mb-16 flex w-[80%] flex-col items-center rounded-2xl  bg-[#6FBC86] px-5 py-10">
        <p className="text-center text-sm sm:text-base md:text-lg ">
          {dict.aboutCoding_6}
        </p>
      </section>

      <section className="mb-16 flex w-[80%] flex-col items-center rounded-2xl  bg-[#29446A] px-5 py-10">
        <p className="mb-8  text-center text-xl md:text-3xl">
          {dict.aboutCoding_7}
        </p>
        <p className="text-center text-sm sm:text-base md:text-lg  ">
          {dict.aboutCoding_8}
        </p>
      </section>
    </div>
  );
};

export default Detail;
