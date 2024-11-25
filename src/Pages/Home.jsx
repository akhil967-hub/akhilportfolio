import React from "react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-bg bg-cover bg-center">
      <div className="bg-white p-4 rounded-xl shadow-lg max-w-lg text-center">
        <h1 className="text-2xl font-semibold mb-4 italic">Hello There...!</h1>
        <h1 className="text-4xl font-bold mb-4 italic ">I'm Akhil</h1>
        <p className="text-gray-700 font-semibold text-lg tracking-wide leading-relaxed italic">
          Enthusiastic full-stack developer and MERN stack specialist,
          transforming ideas into impactful web solutions.
        </p>
      </div>
    </div>
  );
}
