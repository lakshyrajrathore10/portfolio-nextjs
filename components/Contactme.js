"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdSubject, MdMessage } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const SERVICE_ID = "service_qf1tw7q";
const TEMPLATE_ID = "template_jqraqgj";
const PUBLIC_KEY = "3EwfiO-P9cu7zAAs9";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email via EmailJS
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setStatusMessage("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        setStatusMessage("Failed to send message, please try again.");
        console.error(error);
      });
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1a78] to-[#0f172a] text-white py-20 px-6 flex justify-center items-center"
    >
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 relative border border-white/10">
        {/* Glowing Line Divider */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[3px] bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 rounded-full shadow-lg mb-4"></div>

        <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
          Get In Touch
        </h2>

        <form className="space-y-10" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sky-400 text-lg" />
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full pl-12 pr-4 py-3 bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 rounded-lg outline-none placeholder-transparent peer"
            />
            <label
              htmlFor="name"
              className="absolute left-12 top-0 text-sm text-gray-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200"
            >
              Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sky-400 text-lg" />
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full pl-12 pr-4 py-3 bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 rounded-lg outline-none placeholder-transparent peer"
            />
            <label
              htmlFor="email"
              className="absolute left-12 top-0 text-sm text-gray-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200"
            >
              Email
            </label>
          </div>

          {/* Subject Field */}
          <div className="relative">
            <MdSubject className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sky-400 text-lg" />
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="w-full pl-12 pr-4 py-3 bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 rounded-lg outline-none placeholder-transparent peer"
            />
            <label
              htmlFor="subject"
              className="absolute left-12 top-0 text-sm text-gray-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200"
            >
              Subject
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <MdMessage className="absolute left-4 top-5 text-sky-400 text-lg" />
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
              className="w-full pl-12 pr-4 py-3 bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 rounded-lg outline-none placeholder-transparent peer resize-none"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-12 top-0 text-sm text-gray-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200"
            >
              Message
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-500 hover:to-sky-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {statusMessage && (
          <p className="mt-4 text-center text-white font-semibold">{statusMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
