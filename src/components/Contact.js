import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <main
        className=" bg-sky-800 flex flex-col relative h-max m-auto w-auto p-7 "
        id="contactMe"
      >
        <h1 className=" text-white font-bold text-2xl py-3 px-5 underline underline-offset-8 decoration-slate-400">
          Contact Me
        </h1>
        <form className="rounded-xl bg-gray-200 text-white flex flex-col justify-center w-fit m-auto p-7 mb-5 ">
          <div className=" p-2 flex flex-col m-auto ">
            <label  className=" font-semibold text-gray-700">
              Name<sup className=" text-red-700">*</sup>
            </label>
            <input
              placeholder="Enter Your Name"
              type="text"
              className=" p-1 m-1 outline-none bg-gray-300 text-black rounded-md border-none"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="p-2 flex flex-col m-auto ">
            <label  className=" font-semibold text-gray-700">
              Email <sup className=" text-red-900">*</sup>{" "}
            </label>
            <input
              placeholder="Enter Your Email"
              type="email"
              className=" p-2 m-1 outline-none text-black rounded-md border-none bg-gray-300"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className=" p-2 flex flex-col">
            <label className=" font-semibold text-gray-700  p-1">
              Purpose<sup className=" text-red-900">*</sup>
            </label>
            <select
              className=" bg-gray-300  rounded-lg p-1 text-black "
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            >
              <option value="About Website" className=" text-black p-1 m-1">
                About Website
              </option>
              <option value="About Me" className=" text-black p-1 m-1">
                About Me
              </option>
              <option value="Any Other" className=" text-black p-1 m-1">
                Any Other
              </option>
            </select>
          </div>
          <div className=" p-2 flex flex-col m-auto ">
            <label  className=" font-semibold text-gray-700 p-2">
              Message
            </label>
            <input
              placeholder="Describe purpose"
              type="text"
              className=" p-2 m-1 bg-gray-300 text-black rounded-md border-none"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <div className=" flex justify-center m-auto bg-sky-700 rounded-xl p-1 hover:bg-sky-900">
            <button className=" text-white  m-1 rounded-xl">Submit</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Contact;
