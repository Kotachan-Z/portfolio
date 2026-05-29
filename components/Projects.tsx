"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import projects from "@/data/projects.json";
import { SKILL_ICONS } from "@/lib/skillIcons";

const ACCENT_COLORS = [
  "bg-indigo-400",
  "bg-slate-400",
  "bg-teal-400",
  "bg-blue-400",
  "bg-stone-400",
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-black mb-2 text-slate-800">
          Projects
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded-full mb-10" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-slate-100"
          >
            <div className={`h-1.5 ${ACCENT_COLORS[i % ACCENT_COLORS.length]}`} />
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                {project.featured && (
                  <span className="text-xs font-semibold px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 whitespace-pre-line">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => {
                  const cfg = SKILL_ICONS[tag];
                  const Icon = cfg?.icon;
                  return (
                    <span
                      key={tag}
                      className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full"
                    >
                      {Icon && (
                        <Icon style={{ color: cfg.color }} className="w-3.5 h-3.5 shrink-0" />
                      )}
                      {tag}
                    </span>
                  );
                })}
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
                  >
                    <FaGithub size={16} /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
