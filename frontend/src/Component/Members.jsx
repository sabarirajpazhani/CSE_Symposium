import React from 'react';

const Symposium = () => {
  return (
    <div className="bg-transparent from-gray-100 via-gray-150 to-gray-300 glitch  py-10 flex items-center justify-center">
      <div className="container mx-auto bg-white bg-opacity-55 backdrop-blur-lg shadow-custom rounded-lg p-6 sm:p-8 max-w-full sm:max-w-5xl border border-gray-200">
        
        {/* Contact Us Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl text-[#FF4500] mb-4">Contact Us</h2>
          <p className="text-1xl text-gray-700 text-center">
            Get in contact with us to experience an unreal form of enjoyment and entertainment.
          </p>
        </div>

        {/* Coordinators in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Head of the Department */}
          <div className="mb-6">
            <h2 className="text-3xl font-serif text-[#FF4500]">Head of the Department</h2>
            <p className="text-lg text-black">
                Mr.S. Thangavel 
            </p>
          </div>

          {/* Staff Coordinators */}
          <div className="mb-6">
            <h2 className="text-4xl font-serif text-[#FF4500]">Staff Coordinators</h2>
            <ul className="mt-2 list-disc list-inside text-lg text-black">
              <li>Mr.R. Manickam</li>
              <li>Mrs. Durga Devi</li>
              <li>Ms.A.B. Hemalatha</li>
            </ul>
          </div>

          {/* Event Coordinators */}
          <div className="mb-6">
            <h2 className="text-4xl font-serif text-[#FF4500]">Event Coordinators</h2>
            <ul className="mt-2 list-disc list-inside text-lg text-black">
              <p>SP Shushil<a href="tel:8144012223" className="font-mono text-xl"> - 8144012223</a></p>
              <p>SP Jaswanth<a href="tel:9710366999" className="font-mono text-xl"> - 9710366999</a></p>
              <p>A Anitha<a href="tel:8428121764" className="font-mono text-xl"> - 8428121764</a></p>
              <p>R Nisha<a href="tel:6382436780" className="font-mono text-xl"> - 6382436780</a></p>
            </ul>
          </div>

          {/* Technical and Non-Technical Coordinators */}
          <div className="mb-6">
            <h2 className="text-4xl font-serif text-[#FF4500]">Technical Event Coordinators</h2>
            <p className="text-lg text-black mt-2">P. Sabari Raj<a href="tel:9361867233" className="font-mono text-xl"> - 9361867233</a></p>
            <p className="text-lg text-black mt-2">K. Abinashini<a href="tel:8870306385" className="font-mono text-xl"> - 8870306385</a></p>
            <h2 className="text-4xl font-serif text-[#FF4500] mt-14">Non-Technical Event Coordinators</h2>
            <p className="text-lg text-black mt-2">B. Subash Chandra Bose<a href="tel:8754279041" className="font-mono text-xl"> - 8754279041</a></p>
            <p className="text-lg text-black mt-2">S. Priyanka<a href="tel:8122226390" className="font-mono text-xl"> - 8122226390</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symposium;
