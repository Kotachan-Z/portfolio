"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* ドットグリッド */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.045,
        }}
      />

      {/* ソフトオーブ 1 - 右上 */}
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-indigo-200 opacity-20 blur-[110px] animate-blob" />

      {/* ソフトオーブ 2 - 左中 */}
      <div className="absolute top-1/3 -left-48 w-[440px] h-[440px] rounded-full bg-slate-300 opacity-15 blur-[90px] animate-blob animation-delay-2000" />

      {/* ソフトオーブ 3 - 右下 */}
      <div className="absolute -bottom-24 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-200 opacity-15 blur-[100px] animate-blob animation-delay-4000" />
    </div>
  );
}
