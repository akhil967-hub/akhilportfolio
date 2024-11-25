import React from "react";
import image from "../Photos/Akhil (1).jpg"; // Ensure the image path is correct

export default function Resume() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-bg bg-cover bg-center">
      <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-2">
        {/* Resume Container */}
        <div
          id="resume"
          className="bg-white p-6 sm:p-10 rounded-lg shadow-xl max-w-4xl w-full"
        >
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
            {/* Photo Section */}
            <div className="w-36 h-36 md:w-56 md:h-56 overflow-hidden rounded-full p-2">
              <img
                src={image}
                alt="Akhil"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>

            {/* Text Section */}
            <div className="flex-1 mt-6 md:mt-0 md:ml-8">
              {/* Name and Role */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3">
                Akhil A
              </h1>
              <p className="text-lg sm:text-xl mb-5 italic">
                Freelance Web Developer
              </p>

              {/* Contact Information */}
              <div className="mb-5">
                <p className="text-sm sm:text-lg mb-3">
                  <strong>Email:</strong> akhilaroli@gmail.com
                </p>
                <p className="text-sm sm:text-lg mb-3">
                  <strong>Phone:</strong> 9745513967
                </p>
              </div>

              {/* Links Section */}
              <div className="mb-5">
                <p className="text-sm sm:text-lg mb-3">
                  <strong>Portfolio:</strong>{" "}
                  <a
                    href="https://anuktha11.github.io/anuPortfolio/"
                    className="text-blue-600"
                  >
                    MyPortfolio
                  </a>
                </p>
                <p className="text-sm sm:text-lg mb-3">
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/akhil-aroly-9a4154260/"
                    className="inline-block px-2 py-1 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </p>
                <p className="text-sm sm:text-lg mb-3">
                  <strong>GitHub:</strong>{" "}
                  <a
                    href="https://github.com/akhil967-hub"
                    className="inline-block px-2 py-1 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 underline">
              Objective
            </h2>
            <p className="text-sm sm:text-lg">
              Passionate and self-motivated MERN Stack Developer with experience
              in developing responsive web applications. Adept at working
              independently and collaboratively in a team environment.
            </p>
          </div>

          {/* Experience Section */}
          <div className="mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 underline">
              Experience
            </h2>
            <ul>
              <li>
                <h4 className="text-lg sm:text-xl font-semibold">
                  MERN Stack Developer Intern at Brototype
                </h4>
                <p className="text-sm sm:text-lg">May 2023 - Present</p>
                <ul className="list-disc pl-7 text-sm sm:text-lg">
                  <li>
                    Developing responsive web applications using React, Redux,
                    and Bootstrap.
                  </li>
                  <li>
                    Building scalable APIs using Node.js, Express, and MongoDB.
                  </li>
                  <li>
                    Working on live projects and collaborating with the team to
                    deliver solutions.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Projects Section */}
          {/* <div className="mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 underline">
              Projects
            </h2>
            <ul>
              <li>
                
                <p className="text-sm sm:text-lg mt-3">
                  Worked with several projects
                </p>
              </li>
            </ul>
          </div> */}

          {/* Education Section */}
          <div className="mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 underline">
              Education
            </h2>
            <ul>
              <li>
                <h4 className="text-lg sm:text-xl font-semibold">
                  Bachelor of Arts in Sociology
                </h4>
                <p className="text-sm sm:text-lg">
                  Calicut University, 2010 - 2013
                </p>
              </li>
              <li>
                <h4 className="text-lg sm:text-xl font-semibold mt-3">
                  Plus Two
                </h4>
                <p className="text-sm sm:text-lg">
                  Board Of Examination, 2006-2008
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
