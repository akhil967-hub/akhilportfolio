import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSend = (e) => {
    e.preventDefault();

    // Replace with your EmailJS service ID, template ID, and public key
    const serviceId = "service_guksxvc";
    const templateId = "template_bcg682o";
    const publicKey = "u_B8YbcNAvmw6PuS6";

    emailjs.send(serviceId, templateId, formData, publicKey).then(
      (response) => {
        alert("Mail sent successfully!");
        console.log("Success:", response.status, response.text);
        setFormData({
          name: "",
          mobile: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        alert("Failed to send mail. Please try again later.");
        console.log("Failed:", error);
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom-bg bg-cover bg-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-6 italic">Contact</h1>

        {/* Form */}
        <form onSubmit={handleSend} className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />

          {/* Mobile Number Input */}
          <input
            type="tel"
            name="mobile"
            placeholder="Enter Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />

          {/* Message Input */}
          <textarea
            name="message"
            placeholder="Enter Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md h-32"
            required
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-bold hover:bg-blue-600 transition duration-200"
          >
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
}
