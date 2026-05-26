import React from 'react';
import { 
  Database, 
  Smartphone, 
  Settings, 
  BarChart3, 
  Layers, 
  Cpu 
} from 'lucide-react';

const InterestSection = () => {
  const interests = [
    {
      title: "Backend Developer",
      desc: "Membangun sistem server-side yang kuat, skalabel, dan aman menggunakan Java, Go, atau Laravel.",
      color: "bg-blue-50 text-blue-700 border-blue-100",
      icon: <Database size={20} />
    },
    {
      title: "Mobile Developer",
      desc: "Menciptakan pengalaman user yang seamless di Android menggunakan Kotlin atau Flutter.",
      color: "bg-green-50 text-green-700 border-green-100",
      icon: <Smartphone size={20} />
    },
    {
      title: "DevOps Engineer",
      desc: "Automasi infrastruktur dan deployment menggunakan Docker, CI/CD, dan cloud manajemen.",
      color: "bg-purple-50 text-purple-700 border-purple-100",
      icon: <Settings size={20} />
    },
    {
      title: "Data Science & Analyst",
      desc: "Mengolah data menjadi insight berharga melalui statistik dan data mining.",
      color: "bg-amber-50 text-amber-700 border-amber-100",
      icon: <BarChart3 size={20} />
    },
    {
      title: "Data Engineer",
      desc: "Membangun arsitektur pipeline data yang andal untuk kebutuhan analisis skala besar.",
      color: "bg-rose-50 text-rose-700 border-rose-100",
      icon: <Layers size={20} />
    },
    {
      title: "Big Data (Next Target)",
      desc: "Visi masa depan untuk mengelola data raksasa dan teknologi komputasi terdistribusi.",
      color: "bg-cyan-50 text-cyan-700 border-cyan-100",
      icon: <Cpu size={20} />
    }
  ];

  return (
    <section id="about" className="px-6 py-26 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Main Floating Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100">
          
          {/* Row 1: Title */}
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Peminatan & Spesialisasi</h2>
            <p className="text-gray-500 max-w-2xl leading-relaxed">
              Berawal dari pengembangan sistem, saya terus mengeksplorasi bagaimana data dikelola, 
              dihantarkan, dan diolah menjadi solusi digital yang bermakna.
            </p>
          </div>

          {/* Row 2: List Peminatan (Grid Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((item, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-2xl border transition-all hover:scale-[1.02] ${item.color}`}
              >
                {/* Card Row 1: Title & Icon */}
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                
                {/* Card Row 2: Paragraph */}
                <p className="text-sm leading-relaxed opacity-90">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Row 3: Footer/Story Note (Opsional) */}
          <div className="mt-12 pt-8 border-t border-gray-50 text-center">
            <p className="text-gray-400 text-sm italic">
              &quot;Fokus saat ini: Menguatkan fondasi Backend & DevOps sebelum melangkah ke ekosistem Big Data.&quot;
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InterestSection;