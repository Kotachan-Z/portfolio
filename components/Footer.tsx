import profile from "@/data/profile.json";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-100">
      © {new Date().getFullYear()} {profile.nameEn}. All rights reserved.
    </footer>
  );
}
