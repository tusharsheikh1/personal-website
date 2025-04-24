export default function Footer() {
    return (
      <footer className="w-full text-center py-6 mt-12 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
        <p>
          © {new Date().getFullYear()} Tushar Sheikh. Built with ❤️ using Next.js & Tailwind CSS.
        </p>
      </footer>
    );
  }
  