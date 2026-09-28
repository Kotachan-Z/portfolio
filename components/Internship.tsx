"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import internships from "@/data/internships.json";
import { SKILL_ICONS } from "@/lib/skillIcons";

export default function Internship() {
  return (
    <section id="internship" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-black mb-2 text-slate-800">
          Internship
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded-full mb-10" />
      </motion.div>

      <div className="flex flex-col gap-6">
        {internships.map((internship, i) => (
          <motion.div
            key={internship.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-start">
              {internship.image && (
                <div className="relative w-full aspect-video sm:w-72 shrink-0 bg-slate-50">
                  <Image
                    src={internship.image}
                    alt={`${internship.company}のスクリーンショット`}
                    fill
                    sizes="(max-width: 640px) 100vw, 288px"
                    className="object-cover object-top"
                  />
                </div>
              )}
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <h3 className="text-xl font-bold text-slate-800">
                    {internship.companyUrl ? (
                      <a
                        href={internship.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-600 transition-colors"
                      >
                        {internship.company}
                      </a>
                    ) : (
                      internship.company
                    )}
                    <span className="text-slate-400 font-medium"> — {internship.title}</span>
                  </h3>
                  {internship.period && (
                    <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-500 rounded-full">
                      {internship.period}
                    </span>
                  )}
                </div>
                <div className="text-slate-500 text-sm leading-relaxed mb-4 space-y-3">
                  {internship.description.split("\n\n").map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {internship.tags.map((tag) => {
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
                  {internship.github && (
                    <a
                      href={internship.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
                    >
                      <FaGithub size={16} /> GitHub
                    </a>
                  )}
                  {internship.companyUrl && (
                    <a
                      href={internship.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
                    >
                      <ExternalLink size={16} /> 公式サイト
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
