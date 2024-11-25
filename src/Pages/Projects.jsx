import React, { useState } from "react";
import vedio1 from "../Vedios/vedio1.mp4";
import vedio2 from "../Vedios/vedio2.mp4";
import vedio3 from "../Vedios/vedio3.mp4";
import vedio4 from "../Vedios/vedio4.mp4";
import vedio5 from "../Vedios/vedio5.mp4";
import vedio6 from "../Vedios/vedio6.mp4";
import vedio7 from "../Vedios/vedio7.mp4";
import vedio8 from "../Vedios/vedio8.mp4";
import vedio9 from "../Vedios/vedio9.mp4";
import vedio10 from "../Vedios/vedio10.mp4";
import vedio11 from "../Vedios/vedio11.mp4";
import vedio12 from "../Vedios/vedio12.mp4";
import vedio13 from "../Vedios/vedio13.mp4";
import vedio14 from "../Vedios/vedio14.mp4";
import vedio15 from "../Vedios/vedio15.mp4";
import vedio16 from "../Vedios/vedio16.mp4";
const Project = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const projects = [
    {
      video: vedio4,
      // description: "Project 1: A dynamic portfolio website built using React.",
    },
    { video: vedio2 },
    { video: vedio3 },
    { video: vedio1 },
    { video: vedio5 },
    { video: vedio6 },
    { video: vedio7 },
    { video: vedio8 },
    { video: vedio9 },
    { video: vedio10 },
    { video: vedio11 },
    { video: vedio12 },
    { video: vedio13 },
    { video: vedio14 },
    { video: vedio15 },
    { video: vedio16 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom-bg bg-cover bg-center px-4">
      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl mt-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-md">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg">
              {/* Video element */}
              <video
                className="w-full h-full object-cover"
                src={project.video}
                muted
                loop
                playsInline
                autoPlay={false} // Disable autoplay for manual control
                ref={(video) => {
                  // Control playback based on playingIndex
                  if (playingIndex === index && video) {
                    video.play();
                  } else if (video) {
                    video.pause();
                  }
                }}
              ></video>

              {/* Play button overlay */}
              {playingIndex !== index && (
                <button
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity"
                  onClick={() => setPlayingIndex(index)}
                >
                  Play
                </button>
              )}
            </div>

            {/* Video description */}
            <p className="text-gray-700 font-medium text-center mt-4 italic">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
