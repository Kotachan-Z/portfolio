"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import profile from "@/data/profile.json";

export default function Contact() {
  const links = [
    profile.email && {
      icon: <Mail size={20} />,
      label: "Email",
      href: `mailto:${profile.email}`,
      className: "bg-indigo-600 hover:bg-indigo-700 text-white",
    },
    profile.github && {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      href: profile.github,
      className: "bg-slate-800 hover:bg-slate-900 text-white",
    },
    profile["X(旧Twitter)"] && {
      icon: <FaXTwitter size={20} />,
      label: "X (Twitter)",
      href: profile["X(旧Twitter)"],
      className: "bg-slate-700 hover:bg-slate-800 text-white",
    },
  ].filter(Boolean) as { icon: React.ReactNode; label: string; href: string; className: string }[];

  return (
    <section id="contact" className="py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-black mb-2 text-slate-800">
          Contact
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded-full mb-10" />

        <p className="text-slate-500 text-lg mb-8">お気軽にご連絡ください。</p>

        <div className="flex flex-col sm:flex-row gap-3">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-3 px-6 py-3.5 font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 ${link.className}`}
            >
              {link.icon}
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
