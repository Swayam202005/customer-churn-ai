import { FaMoon, FaSun } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {

  return (

    <div className="flex items-center justify-between px-10 py-6">

      <div>

        <h2 className="text-3xl font-black">
          ChurnAI Platform
        </h2>

        <p className="text-gray-400 mt-1">
          Enterprise AI Retention Dashboard
        </p>

      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl hover:bg-white/10 transition-all flex items-center gap-3"
      >

        {darkMode ? <FaSun /> : <FaMoon />}

        {darkMode ? "Light" : "Dark"}

      </button>

    </div>

  );
}

export default Navbar;