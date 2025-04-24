"use client";
import Link from "next/link";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDark() {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
    }
    setDarkMode(!darkMode);
  }

  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-12 py-4 shadow-sm bg-white dark:bg-gray-900">
      <Link href="/" className="text-xl font-bold text-blue-600">
        Adnan.dev
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/projects" className="hover:underline">Projects</Link>
        <Link href="/skills" className="hover:underline">Skills</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
        <button onClick={toggleDark} className="text-xl">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}