// app/contact/page.tsx
export default function Contact() {
    return (
      <section className="space-y-8">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Feel free to reach out if you want to collaborate on a project, have a question, or just want to say hi! 💬
        </p>
        <div className="space-y-4">
          <a href="mailto:youremail@example.com" className="text-blue-600 text-lg hover:underline">
            youremail@example.com
          </a>
          <div className="flex gap-6 mt-2">
            <a
              href="https://github.com/yourusername"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
  
        <form className="space-y-4 max-w-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }
  