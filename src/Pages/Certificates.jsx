import React from "react";
import certificate1 from "../Certificates/certificates1 (1).jpg";
import certificate5 from "../Certificates/certificates1 (5).jpg";

export default function Certificates() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-bg bg-cover bg-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
        {/* Certificate 1 */}
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <img
            src={certificate1}
            alt="Certificate 1"
            className="w-full h-80 object-cover rounded-md"
          />
        </div>

        {/* Certificate 5 */}
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <img
            src={certificate5}
            alt="Certificate 5"
            className="w-full h-80 object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
