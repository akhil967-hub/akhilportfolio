import React from "react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-bg bg-cover bg-center">
  <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full flex items-center justify-center flex-col">
    {/* Text Section */}
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4 italic">
        About Me
      </h1>
      <p className="text-xl text-gray-700 italic">
        I am a self-taught MERN stack developer passionate about creating
        innovative web applications. With expertise in HTML, CSS,
        JavaScript, React.js, Node.js, Express.js, and MongoDB, I enjoy
        working on both the front-end and back-end of web projects.
        Currently, I'm an intern at Brototype, where I'm gaining hands-on
        industry experience and continuously improving my skills in software
        development.
      </p>
    </div>
  </div>
</div>

  );
}
