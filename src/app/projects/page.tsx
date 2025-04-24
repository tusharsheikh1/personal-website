const projects = [
    {
      title: "Study Material Manager",
      description: "A full-featured departmental study system with role-based access, uploads, and filtering.",
      link: "https://your-link.com",
      github: "https://github.com/yourusername/project1"
    },
    {
      title: "Courier Delivery Ratio App",
      description: "Tracks success ratio of courier deliveries across providers using their APIs.",
      link: "https://your-link.com",
      github: "https://github.com/yourusername/project2"
    },
    {
      title: "Advanced User Management UI",
      description: "A sleek admin dashboard UI with drawer navigation, modals, and CRUD operations.",
      link: "https://your-link.com",
      github: "https://github.com/yourusername/project3"
    }
  ];
  
  export default function Projects() {
    return (
      <section className="space-y-8">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm bg-white dark:bg-gray-800 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="text-gray-600 hover:underline dark:text-gray-400"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    );
  }
  