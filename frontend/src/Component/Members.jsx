import React from 'react';

const Symposium = () => {
  return (
    <div className="bg-transparent from-gray-100 via-gray-150 to-gray-300 glitch  py-10 flex items-center justify-center">
      <div className="container mx-auto bg-white bg-opacity-50 backdrop-blur-lg  shadow-custom rounded-lg p-6 sm:p-8 max-w-full sm:max-w-5xl border border-gray-200">
        
        {/* Contact Us Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl text-[#FF4500] mb-4">Contact Us</h2>
          <p className="text-2xl text-gray-700 text-center">
            Get in contact with us to experience an unreal form of enjoyment and entertainment.
          </p>
        </div>

        {/* Coordinators in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Head of the Department */}
          <div className="mb-6">
            <h2 className="text-3xl font-serif text-[#FF4500]">Head of the Department</h2>
            <p className="text-lg text-gray-800 mt-2">Mr. Thangavel</p>
          </div>

          {/* Staff Coordinators */}
          <div className="mb-6">
            <h2 className="text-4xl font-serif text-[#FF4500]">Staff Coordinators</h2>
            <ul className="mt-2 list-disc list-inside text-lg text-gray-800">
              <li>Mr. Manikam</li>
              <li>Mrs. Durga</li>
              <li>Mrs. Hemalatha</li>
            </ul>
          </div>

          {/* Event Coordinators */}
          <div className="mb-6">
            <h2 className="text-4xl font-serif text-[#FF4500]">Event Coordinators</h2>
            <ul className="mt-2 list-disc list-inside text-lg text-gray-800">
              <li>XXXXX</li>
              <li>YYYYY</li>
            </ul>
          </div>

          {/* Technical and Non-Technical Coordinators */}
          <div className="mb-6">
            <h2 className="text-4xl font-serif text-[#FF4500]">Technical Event Coordinator</h2>
            <p className="text-lg text-gray-800 mt-2">XXXXXX</p>
            <h2 className="text-4xl font-serif text-[#FF4500] mt-4">Non-Technical Event Coordinator</h2>
            <p className="text-lg text-gray-800 mt-2">YYYYY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symposium;
