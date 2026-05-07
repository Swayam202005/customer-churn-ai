import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Predictions from "./pages/Predictions";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (

    <BrowserRouter>

      <div
        className={`flex min-h-screen overflow-hidden transition-all duration-500 ${
          darkMode
            ? "bg-[#030712] text-white"
            : "bg-gray-100 text-black"
        }`}
      >

        {/* Background */}
        <div className="fixed top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full"></div>

        <div className="fixed bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full"></div>

        {/* Sidebar */}
        <Sidebar darkMode={darkMode} />

        {/* Main */}
        <div className="flex-1 relative z-10">

          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <div className="p-10">

            <Routes>

              <Route
                path="/"
                element={<Dashboard darkMode={darkMode} />}
              />

              <Route
                path="/customers"
                element={<Customers darkMode={darkMode} />}
              />

              <Route
                path="/predictions"
                element={<Predictions darkMode={darkMode} />}
              />

              <Route
                path="/analytics"
                element={<Analytics darkMode={darkMode} />}
              />

              <Route
                path="/settings"
                element={<Settings darkMode={darkMode} />}
              />

            </Routes>

          </div>

        </div>

      </div>

    </BrowserRouter>

  );
}

export default App;