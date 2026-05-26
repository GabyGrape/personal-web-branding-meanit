import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-50 pb-20 flex  items-center justify-center px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Column A - 3 Rows (H1, H2, P) */}
        <div className="bg-transparent flex flex-col gap-6">
          <div className="space-y-2">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Available for Work
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
              Okta Sinsaku<span className="text-blue-600">.</span>
            </h1>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700">
            Backend & DevOps Engineer
          </h2>
          
          <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
            Membangun sistem yang skalabel dan efisien. Berfokus pada arsitektur backend modern, 
            automasi infrastruktur, dan pengembangan aplikasi mobile yang performan.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              View Projects
            </button>
            <button className="border border-gray-200 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all">
              Download CV
            </button>
          </div>
        </div>

        {/* Column B - Nested Structure */}
        <div className="bg-transparent p-4 flex flex-col gap-4">
          
          {/* Row A (Column B) - Misal untuk gambar atau highlight utama */}
          <div className="bg-blue-50 rounded-3xl p-8 h-64 flex items-center justify-center border border-blue-100 shadow-sm">
            <div className="text-center">
              <span className="text-4xl">🚀</span>
              <p className="mt-2 font-semibold text-blue-800 italic">&quot;Code is poetry, but infrastructure is the stage.&quot;</p>
            </div>
          </div>

          {/* Row B (Column B) - Split into 2 Columns */}
          <div className="grid grid-cols-2 gap-4">
            {/* Sub-Column 1 */}
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-bold text-gray-900">2+</span>
              <p className="text-sm text-gray-500">Years Exp.</p>
            </div>
            
            {/* Sub-Column 2 */}
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-bold text-gray-900">15+</span>
              <p className="text-sm text-gray-500">Projects Done</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;