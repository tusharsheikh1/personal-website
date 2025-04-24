'use client';
import { useEffect, useState } from 'react';
import ResumeButton from '@/components/ResumeButton';
import { ArrowRight, TrendingUp, Lightbulb, Code2, Rocket, Users, Trophy } from 'lucide-react';

export default function Home() {
  const [title, setTitle] = useState<string>('');
  const text = "Frontend Developer • AI Explorer • Content Creator";
  const speed = 50;

  useEffect(() => {
    let index: number = 0;
    const interval = setInterval(() => {
      setTitle(text.slice(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-24 gap-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[600px] h-[600px] bg-blue-100 dark:bg-blue-950 rounded-full blur-3xl opacity-40 z-0"></div>

      {/* Hero Section */}
      <div className="space-y-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Tushar Sheikh</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 h-8 font-mono">{title}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium shadow-lg hover:scale-105 transition-transform"
          >
            View My Projects <ArrowRight size={18} />
          </a>
          <ResumeButton />
        </div>
      </div>

      {/* Highlights Section */}
      <div className="w-full max-w-6xl grid gap-10 md:grid-cols-3 text-left relative z-10">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center gap-2"><Code2 size={20} /> Who I Am</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Developer from Bangladesh who loves crafting beautiful UI, clean code, and building scalable solutions that make a difference.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center gap-2"><TrendingUp size={20} /> What I Do</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Building modern full-stack applications with React, Next.js, MongoDB, and Tailwind CSS. Focused on clean UX and smart performance.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center gap-2"><Lightbulb size={20} /> What I Value</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Simplicity, creativity, and continuous growth. I believe in tech that empowers people and teams that build together.
          </p>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="max-w-4xl text-center mt-20 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Mission</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          My goal is to build seamless digital experiences that feel effortless yet powerful. Whether it&apos;s a portfolio site, a team dashboard, or an AI-powered tool — I aim to create with intention, clarity, and empathy.
        </p>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mt-20 text-left relative z-10">
        <div className="bg-blue-50 dark:bg-gray-900 border border-blue-200 dark:border-blue-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold flex items-center gap-2 text-blue-600 mb-2"><Rocket size={20} /> Fast Delivery</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">Quick turnarounds and deadline-oriented delivery using agile methodologies and best practices.</p>
        </div>
        <div className="bg-blue-50 dark:bg-gray-900 border border-blue-200 dark:border-blue-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold flex items-center gap-2 text-blue-600 mb-2"><Users size={20} /> Team Collaboration</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">Strong team spirit and communication. I thrive in collaborative spaces, remote or onsite.</p>
        </div>
        <div className="bg-blue-50 dark:bg-gray-900 border border-blue-200 dark:border-blue-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold flex items-center gap-2 text-blue-600 mb-2"><Trophy size={20} /> Growth Mindset</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">I constantly learn and adapt. Feedback fuels my improvement and excellence.</p>
        </div>
      </div>
    </section>
  );
}
