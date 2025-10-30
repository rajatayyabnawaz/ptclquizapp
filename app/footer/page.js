import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <Image
            src="/logoptcl.webp" // ✅ located in public/
            alt="PTCL Logo"
            width={40}
            height={40}
            className="rounded-full shadow-md"
          />
          <h2 className="text-lg font-semibold tracking-wide">
             Created By <span className="font-bold">Raja Tayyab Nawaz</span>
          </h2>
        </div>

        {/* Middle Section */}
        <p className="text-sm text-gray-200 text-center md:text-left">
          © {new Date().getFullYear()} PTCL Quiz App. All rights reserved.
        </p>

        {/* Right Section (Links) */}
        <div className="flex gap-4 text-gray-100 text-sm">
          <a href="#" className="hover:text-yellow-300 transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-yellow-300 transition-colors duration-300">
            Terms
          </a>
          <a href="#" className="hover:text-yellow-300 transition-colors duration-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
