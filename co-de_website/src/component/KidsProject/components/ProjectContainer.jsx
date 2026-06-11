import Image from "next/image";

const ProjectContainer = (props) => {
  return (
    <section className="m-4 flex w-[500px] flex-col items-center ">
      <p className="mb-4 text-2xl">{props.class}</p>
      <div className=" flex  w-full flex-col items-center rounded-3xl bg-black p-5 ">
        <Image
          src={props.pic}
          alt="Our Project"
          className=" mb-5 flex h-[70%] w-[95%] items-center justify-center rounded-3xl bg-red-600 text-center"
        />
        <div className="h-[30%]">
          <p className="mb-2 text-base md:text-xl ">
            <b>- Project Name:</b> {props.projectname}
          </p>
          <p className="mb-2 text-base md:text-xl ">
            <b>- Student Name:</b> {props.name}
          </p>
          <p className="mb-2 text-base md:text-xl ">
            <b>- Student Age:</b> {props.age}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectContainer;
