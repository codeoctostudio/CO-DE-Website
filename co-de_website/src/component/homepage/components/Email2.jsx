/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Email2 = (props) => {
  const googleEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "register_submit",
      form_type: props.pageName,
    });
  };

  const form = useRef();

  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentSchool, setStudentSchool] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentNumber, setParentNumber] = useState("");
  const [lineId, setLineId] = useState("");
  const [address, setAddress] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_codeacademy",
        "template_gal34n7",
        form.current,
        "Dwq3JqPF8Lx4j4ZBG",
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Submit Success, Thank you!");
          setStudentName("");
          setStudentAge("");
          setStudentSchool("");
          setParentName("");
          setParentNumber("");
          setLineId("");
          setAddress("");
          googleEvent();
        },
        (error) => {
          console.log(error.text);
          alert("Error Submitting, Please Try Again");
        },
      );
  };

  return (
    <div
      id="email"
      className="text-bold bg-[#EA5880] p-14  font-comfortaa text-white"
    >
      <h1 className="mb-14 text-3xl font-bold md:text-4xl">
        {props.pageName == "Student Registration"
          ? "Student Registration Form"
          : "Join our free Trial Class now!"}
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex w-[100%] flex-col md:w-[70%]"
      >
        <h1 className="mb-5 text-2xl">Information</h1>
        <input type="hidden" name="page_name" value={props.pageName} />
        <input
          type="hidden"
          name="email_title"
          value={
            props.pageName == "Student Registration"
              ? "Student Registration Submitted!"
              : "New Trial Class Received!"
          }
        />
        <label>Student's Name</label>
        <input
          type="text"
          name="student_name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          className="mb-5 rounded-xl p-3 px-4  text-black"
          required
        />
        <label>Student's Age</label>
        <input
          type="number"
          min="1"
          max="90"
          name="student_age"
          value={studentAge}
          onChange={(e) => setStudentAge(e.target.value)}
          className="mb-5 rounded-xl p-3 px-4 text-black"
          required
        />
        <label>Student's School</label>
        <input
          type="text"
          name="student_school"
          value={studentSchool}
          onChange={(e) => setStudentSchool(e.target.value)}
          className="mb-5 rounded-xl p-3 px-4 text-black"
          required
        />
        <label>Parent's Name</label>
        <input
          type="text"
          name="parent_name"
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
          className="mb-5 rounded-xl p-3 px-4 text-black"
          required
        />
        <div className="flex w-full flex-col justify-between md:flex-row">
          <div className="w-full md:w-[45%]">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="parent_number"
              value={parentNumber}
              onChange={(e) => setParentNumber(e.target.value)}
              className="mb-5 w-full rounded-xl px-4 py-3 text-black"
              pattern="[0-9]+"
              title="Please Enter A Valid Number"
              required
            />
          </div>
          <div className="w-full md:w-[45%]">
            <label>LINE ID</label>
            <input
              type="text"
              name="line_id"
              value={lineId}
              onChange={(e) => setLineId(e.target.value)}
              className="mb-5 w-full rounded-xl px-4 py-3 text-black"
            />
          </div>
        </div>
        {props.pageName == "Student Registration" && (
          <>
            <label>Address</label>
            <input
              type="text"
              name="address_detail"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mb-5 rounded-xl p-3 px-4 text-black"
              required
            />
          </>
        )}
        <div className="flex items-center">
          <input
            type="submit"
            value="Submit"
            className="mt-4 w-[200px] cursor-pointer rounded-[50px] bg-[#F7C94B] p-3 hover:opacity-90 active:opacity-50"
          />
        </div>
      </form>
    </div>
  );
};

export default Email2;
