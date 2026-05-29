"use client";
import { motion } from "framer-motion";
import skills from "@/data/skills.json";
import { SKILL_ICONS } from "@/lib/skillIcons";

const CATEGORIES: { key: keyof typeof skills; label: string; bg: string; text: string }[] = [
  { key: "languages",  label: "Languages",  bg: "bg-indigo-50", text: "text-indigo-700" },
  { key: "frameworks", label: "Frameworks", bg: "bg-teal-50",   text: "text-teal-700"   },
  { key: "tools",      label: "Tools",      bg: "bg-slate-100", text: "text-slate-700"  },
  { key: "other",      label: "Other",      bg: "bg-blue-50",   text: "text-blue-700"   },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-black mb-2 text-slate-800">Skills</h2>
        <div className="w-12 h-1 bg-indigo-500 rounded-full mb-10" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100"
          >
            <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full ${cat.bg} ${cat.text} mb-4 tracking-wide uppercase`}>
              {cat.label}
            </span>

            <div className="flex flex-wrap gap-2">
              {skills[cat.key].map((skill) => {
                const cfg = SKILL_ICONS[skill];
                const Icon = cfg?.icon;
                return (
                  <span
                    key={skill}
                    className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full hover:border-indigo-300 hover:text-indigo-600 transition-colors cursor-default"
                  >
                    {Icon && (
                      <Icon style={{ color: cfg.color }} className="w-4 h-4 flex-shrink-0" />
                    )}
                    {skill}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
