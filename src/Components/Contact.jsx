import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div id="contact" className="flex flex-col items-center mt-10 space-y-8">
      <h1 className="text-white font-jim text-4xl md:text-5xl mb-5">Contact</h1>

      <form
        action=""
        className="bg-[#FF0000] w-full max-w-lg p-6 py-10  rounded-lg shadow-lg space-y-4"
      >
        <div className="space-y-2">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            className="w-full p-3 rounded-md text-[#2E2E2E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded-md text-[#2E2E2E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            className="w-full p-3 rounded-md text-[#2E2E2E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF4500] resize-none h-32"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-white text-[#FF0000] font-semibold rounded-md hover:bg-gray-200 transition-all focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact