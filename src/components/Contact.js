"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formFilled, setFormFill] = useState(false);

  const onInputChange = (e) => {
    const name = e.target.form.name.value;
    const email = e.target.form.email.value;
    const message = e.target.form.message.value;

    if (name && email && message) {
      setFormFill(true);
    } else {
      setFormFill(false);
    }
  };

  const onSubmit = (e) => {
    if (!formFilled) {
      e.preventDefault();
    }
  };

  return (
    <div
      name="contact"
      className="pt-[120px] md:pt-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me!</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/c658d050-3fce-48fe-b486-0983c804f306"
            method="POST"
            className="flex flex-col w-full md:w-10/12"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={onInputChange}
            ></input>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={onInputChange}
            ></input>
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={onInputChange}
            ></textarea>
            <button
              className={`text-white to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ${
                formFilled ? "bg-gradient-to-b from-cyan-500" : "bg-slate-600"
              }`}
            >
              {formFilled ? <p>Submit</p> : <p>Please Enter All Fields</p>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
