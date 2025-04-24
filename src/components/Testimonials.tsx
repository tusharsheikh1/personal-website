// components/Testimonials.tsx
const testimonials = [
    {
      name: "Imanul Haq",
      role: "PhD Researcher, Texas A&M University",
      message:
        "Tushar is not only technically sound but also a great team player. His attention to detail is impressive.",
    },
    {
      name: "Hujjat Ullah",
      role: "Software Engineer",
      message:
        "Working with Tushar on collaborative projects has always been smooth. He's committed and quick to adapt.",
    },
    {
      name: "Rina Akter",
      role: "UI/UX Designer",
      message:
        "Tushar's frontend skills bring my designs to life with pixel-perfect precision. Highly recommended!",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="space-y-6 mt-16">
        <h2 className="text-3xl font-bold text-center">What Others Say</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">“{t.message}”</p>
              <div className="text-sm text-right">
                <p className="font-semibold text-blue-600 dark:text-blue-400">{t.name}</p>
                <p className="text-gray-500 dark:text-gray-400 italic">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }