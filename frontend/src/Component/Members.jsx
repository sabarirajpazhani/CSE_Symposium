import React from 'react';

const Symposium = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8 max-w-3xl">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-[#FF4500] mb-10">Symposium Coordinators</h1>

        {/* Head of the Department */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#57cfdc]">Head of the Department</h2>
          <p className="text-lg text-gray-800 mt-2">Mr. Thangavel</p>
        </div>

        {/* Staff Coordinators */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#57cfdc]">Staff Coordinators</h2>
          <ul className="mt-2 list-disc list-inside text-lg text-gray-800">
            <li>Mr. Manikam</li>
            <li>Mrs. Durga</li>
            <li>Mrs. Hemalatha</li>
          </ul>
        </div>

        {/* Event Coordinators */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#57cfdc]">Event Coordinators</h2>
          <ul className="mt-2 list-disc list-inside text-lg text-gray-800">
            <li>XXXXX</li>
            <li>YYYYY</li>
          </ul>
        </div>

        {/* Technical Event Coordinator */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#57cfdc]">Technical Event Coordinator</h2>
          <p className="text-lg text-gray-800 mt-2">XXXXXX</p>
        </div>

        {/* Non-Technical Event Coordinator */}
        <div>
          <h2 className="text-2xl font-semibold text-[#57cfdc]">Non-Technical Event Coordinator</h2>
          <p className="text-lg text-gray-800 mt-2">YYYYY</p>
        </div>
      </div>
    </div>
  );
};

export default Symposium;
