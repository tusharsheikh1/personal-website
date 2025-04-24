// app/skills/page.tsx
const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "MongoDB"],
    Tools: ["Git", "VS Code", "Figma", "Postman"]
  };
  
  export default function Skills() {
    return (
      <section className="space-y-6">
        <h1 className="text-4xl font-bold mb-4">Skills</h1>
        <div className="space-y-4">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">{category}</h2>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  