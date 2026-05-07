import { motion } from "framer-motion";

function Dashboard({ darkMode }) {

  const stats = [
    {
      title: "Customers",
      value: "7,043+"
    },
    {
      title: "Prediction Accuracy",
      value: "79%"
    },
    {
      title: "Revenue Saved",
      value: "$2.3M"
    },
    {
      title: "AI Status",
      value: "ACTIVE"
    }
  ];

  return (

    <div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >

        <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 mb-6">
          AI Powered Customer Intelligence
        </div>

        <h1 className="text-7xl font-black leading-[90px] max-w-5xl">

          Predict Customer
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {" "}Churn
          </span>

        </h1>

        <p
          className={`text-xl mt-8 max-w-3xl leading-9 ${
            darkMode
              ? "text-gray-400"
              : "text-gray-700"
          }`}
        >

          Advanced AI analytics platform for predicting customer churn,
          retention intelligence, behavioral insights, and revenue optimization.

        </p>

      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        {stats.map((item, index) => (

          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className={`backdrop-blur-xl border rounded-3xl p-6 shadow-2xl ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-200"
            }`}
          >

            <p className="text-gray-400 mb-3">
              {item.title}
            </p>

            <h2 className="text-4xl font-black">
              {item.value}
            </h2>

          </motion.div>

        ))}

      </div>

      {/* Live Activity */}
      <div
        className={`rounded-3xl p-8 border ${
          darkMode
            ? "bg-white/5 border-white/10"
            : "bg-white border-gray-200"
        }`}
      >

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Live AI Activity
          </h2>

          <button className="bg-cyan-400 text-black px-5 py-3 rounded-2xl font-bold">
            Export Report
          </button>

        </div>

        <div className="space-y-5">

          {[
            "AI analyzed 1,203 customers today",
            "27 high-risk customers detected",
            "Retention campaign success increased by 18%",
            "Revenue leakage prediction updated"
          ].map((item, index) => (

            <div
              key={index}
              className={`p-5 rounded-2xl ${
                darkMode
                  ? "bg-black/20"
                  : "bg-gray-100"
              }`}
            >

              {item}

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;