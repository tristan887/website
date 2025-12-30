import React from 'react';
import Image from 'next/image'
// project data (add/remove projects)

const projects = [
    {
        title: "GitHub Repository 1",
        description: "A full-stack portfolio website created using Anthropic, React, and Node.js",
        date: "09.18",
        category: "code",
        categoryColor: "#051ab8ff", 
        link: "https://github.com/tristan887/my-portfolio",
        imageSource: "/lazycherryclub.jpeg"
    },
    {
        title: "Treasury Yield Curve Visualizer",
        description: "Overview of the Yield Curve using Python and Treasury Data.",
        date: "8.15",
        category: "economy",
        categoryColor: "#1d6517", 
        link: "https://github.com/tristan887/Yield-Curve/blob/main/yield.py",
        imageSource: "/yc.png"
    },
    {
        title: "Partial & General Equilibrium Models",
        description: "",
        date: "11.10",
        category: "economy",
        categoryColor: "#1d6517", 
        link: "/projects/ml-model",
        imageColor: "#1d6517" 
    },
];

function ProjectCards() {
  const getCategoryIcon = (category) => {
    const icons = {
      code: "{ }",
      economics: "◈",
      "AI/ML": "◉",
      mobile: "▣",
      backend: "⚙",
      data: "◍",
    };
    return icons[category] || "●";
  };

  return (
    <div className="bg-orange-100 py-12">
      <div className="container mx-auto px-4">
        <div
          id="projects-container"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="w-full h-48 overflow-hidden">
                {project.imageSource ? (
                  <img 
                    src={project.imageSource} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center text-6xl opacity-20"
                    style={{
                      background: `linear-gradient(135deg, ${project.imageColor}22, ${project.imageColor}44)`,
                      color: project.imageColor,
                    }}
                  >
                    {getCategoryIcon(project.category)}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-bold text-gray-700">{project.date}</span>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: project.categoryColor }}
                    ></span>
                    <span className="text-sm text-gray-600">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
