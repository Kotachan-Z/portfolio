"use client";
import { motion } from "framer-motion";
import profile from "@/data/profile.json";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      <div className="text-center px-4">
        <motion.p
          className="text-sm font-semibold tracking-widest text-indigo-500 uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I&apos;m
        </motion.p>
        <motion.h1
          className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-slate-400 font-light mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {profile.nameEn}
        </motion.p>
        <motion.p
          className="text-lg md:text-xl font-medium text-slate-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {profile.title}
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-slate-300 text-slate-600 font-semibold rounded-full hover:border-indigo-400 hover:text-indigo-600 transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
