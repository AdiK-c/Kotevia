import Image from "next/image";

export default function GalleryPage() {
  const projects = [
    { id: 1, title: "Rooftop Structure - Desaiganj", type: "Residential", image: "/project-desaiganj.jpg" },
    { id: 2, title: "Elevated System - Wardha", type: "Residential", image: "/project-wardha-alodi.jpg" },
    { id: 3, title: "Custom Elevated Structure", type: "Residential", image: "/project-structure.jpg" },
    { id: 4, title: "20kW Commercial - Nagpur", type: "Commercial", image: "/industrial-solar.jpg" },
    { id: 5, title: "5kW Residential - Wardha", type: "Residential", image: "/residential-solar.jpg" },
    { id: 6, title: "Panel Cleaning Service", type: "Maintenance", image: "/maintenance.jpg" },
  ];

  return (
    <div className="pt-32 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A glimpse into our high-quality solar installations across Vidarbha. Trusted solar. Proven results.
          </p>
        </div>

        {/* Filters Placeholder */}
        <div className="flex justify-center gap-4 mb-12">
          {['All', 'Residential', 'Commercial'].map((filter) => (
            <button 
              key={filter}
              className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-black hover:bg-black hover:text-white transition-colors text-sm font-medium"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden mb-4 relative flex items-center justify-center">
                {/* Image */}
                {project.image ? (
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                ) : (
                  <span className="text-gray-400 font-medium z-10">[Stock Image]</span>
                )}
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <span className="text-white font-medium border border-white px-4 py-2 rounded">View Project</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">{project.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{project.type} Installation</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
