export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 text-white py-6 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Section */}
        <h2 className="text-lg font-semibold tracking-wide">
          🎓 Quiz App Created By Raja Tayyab Nawaz
        </h2>

        {/* Middle Section */}
        <p className="text-sm text-gray-200 text-center md:text-left">
          © {new Date().getFullYear()} Quiz App. All rights reserved.
        </p>

        {/* Right Section (Social Links or Extras) */}
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
