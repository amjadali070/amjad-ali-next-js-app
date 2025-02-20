"use client";

import React from "react";

const ContactMe: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-2">
          Contact me
        </h2>
        <p className="text-center text-gray-300 mb-10">
          Cultivating Connections: Reach Out And Connect With Me
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            placeholder="Name"
            className="
              w-full 
              bg-[#1D1D1D] 
              text-white 
              rounded 
              py-3 px-4 
              focus:outline-none 
              focus:ring-2 
              focus:ring-[#00DBFD]
              placeholder-gray-500
            "
          />

          <input
            type="email"
            placeholder="Email"
            className="
              w-full 
              bg-[#1D1D1D] 
              text-white 
              rounded 
              py-3 px-4 
              focus:outline-none 
              focus:ring-2 
              focus:ring-[#00DBFD]
              placeholder-gray-500
            "
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="
              w-full 
              bg-[#1D1D1D] 
              text-white 
              rounded 
              py-3 px-4 
              focus:outline-none 
              focus:ring-2 
              focus:ring-[#00DBFD]
              placeholder-gray-500
            "
          />

          <select
            className="
              w-full 
              bg-[#1D1D1D] 
              text-white 
              rounded 
              py-3 px-4 
              focus:outline-none 
              focus:ring-2 
              focus:ring-[#00DBFD]
              placeholder-gray-500
            "
            defaultValue=""
          >
            <option value="" disabled>
              Service Of Interest
            </option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile App Development">
              Mobile App Development
            </option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="SEO/Marketing">SEO / Marketing</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            placeholder="Timeline"
            className="
              w-full 
              bg-[#1D1D1D] 
              text-white 
              rounded 
              py-3 px-4 
              focus:outline-none 
              focus:ring-2 
              focus:ring-[#00DBFD]
              placeholder-gray-500
            "
          />

          <textarea
            placeholder="Project Details..."
            rows={3}
            className="
              w-full 
              bg-[#1D1D1D] 
              text-white 
              rounded 
              py-3 px-4 
              focus:outline-none 
              focus:ring-2 
              focus:ring-[#00DBFD]
              placeholder-gray-500
              resize-none
            "
          />
        </form>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="
              bg-[#00DBFD] 
              text-black 
              font-semibold 
              py-2 
              px-6 
              rounded 
              hover:bg-[#00b0cc] 
              transition-colors
            "
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
