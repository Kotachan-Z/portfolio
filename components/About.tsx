"use client";
import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import profile from "@/data/profile.json";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-black mb-2 text-slate-800">
          About
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded-full mb-10" />

        <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 border border-slate-100">
          <p className="text-slate-600 text-lg leading-relaxed mb-8">{profile.bio}</p>
          <div className="flex flex-col gap-3">
            {profile.location && (
              <div className="flex items-center gap-3 text-slate-500">
                <MapPin size={18} className="text-slate-400" />
                <span>{profile.location}</span>
              </div>
            )}
            {profile.email && (
              <div className="flex items-center gap-3 text-slate-500">
                <Mail size={18} className="text-slate-400" />
                <a href={`mailto:${profile.email}`} className="hover:text-indigo-600 transition-colors">
                  {profile.email}
                </a>
              </div>
            )}
            {profile.github && (
              <div className="flex items-center gap-3 text-slate-500">
                <FaGithub size={18} className="text-slate-400" />
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
                  {profile.github.replace("https://", "")}
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
