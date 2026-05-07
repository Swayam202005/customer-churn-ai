import {
  FaChartLine,
  FaUsers,
  FaRobot,
  FaChartPie,
  FaCog
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Sidebar() {

  const menu = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaChartLine />
    },

    {
      name: "Customers",
      path: "/customers",
      icon: <FaUsers />
    },

    {
      name: "Predictions",
      path: "/predictions",
      icon: <FaRobot />
    },

    {
      name: "Analytics",
      path: "/analytics",
      icon: <FaChartPie />
    },

    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />
    }
  ];

  return (

    <div className="w-72 min-h-screen bg-black/20 backdrop-blur-2xl border-r border-white/10 p-8 relative z-20">

      <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-14">
        ChurnAI
      </h1>

      <div className="space-y-4">

        {menu.map((item, index) => (

          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-5 rounded-2xl cursor-pointer transition-all ${
                isActive
                  ? "bg-cyan-500 text-black font-bold"
                  : "hover:bg-white/5 text-gray-300"
              }`
            }
          >

            <div className="text-xl">
              {item.icon}
            </div>

            <span className="text-lg">
              {item.name}
            </span>

          </NavLink>

        ))}

      </div>

    </div>

  );
}

export default Sidebar;