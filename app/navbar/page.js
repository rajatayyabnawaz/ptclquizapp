import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo / Title */}
        <div className="flex items-center gap-3">
          <Image
            src="/logoptcl.webp" // ✅ stored in public/
            alt="PTCL Logo"
            width={40}
            height={40}
            className="rounded-full shadow-md"
          />
          <h1 className="text-2xl font-bold tracking-wide">PTCL Quiz App</h1>
        </div>
      </div>
    </nav>
  );
}

