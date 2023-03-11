"use client";

import { useState, useRef } from "react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <>
      <div className="w-full pb-32 text-center">
        <span className="text-[80px] tracking-tight sm:text-[101px] md:text-[128px]">
          CONTACT
        </span>
      </div>

      <div className="mx-10 mb-10 flex flex-col-reverse gap-10 overflow-hidden rounded-lg shadow xl:mt-12 xl:flex-row">
        <div className="flex-[0.75] p-8">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="mb-4 font-medium">Your name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="rounded-lg border-none py-4 px-6 font-medium text-white shadow-sm outline-none placeholder:text-gray-400"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium">Your email</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="rounded-lg border-none py-4 px-6 font-medium text-white shadow-sm outline-none placeholder:text-gray-400"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium">Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="rounded-lg border-none py-4 px-6 font-medium text-white shadow-sm outline-none placeholder:text-gray-400"
              />
            </label>

            <button
              type="submit"
              className="w-fit rounded-xl py-3 px-8 font-medium text-gray-800 shadow-lg outline-none"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
