import { motion } from "framer-motion";

function ResultCard({ result }) {

  return (

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl"
    >

      <h2 className="text-3xl font-bold mb-6">
        AI Prediction Result
      </h2>

      <div className="flex items-center justify-between mb-6">

        <h3
          className={`text-2xl font-bold ${
            result.prediction === "Yes"
              ? "text-red-400"
              : "text-green-400"
          }`}
        >
          {result.prediction === "Yes"
            ? "⚠️ High Churn Risk"
            : "✅ Low Churn Risk"}
        </h3>

        <div className="text-4xl font-black text-cyan-400">
          {result.probability}%
        </div>

      </div>

      {/* Animated Progress Bar */}
      <div className="w-full bg-gray-700 h-5 rounded-full overflow-hidden mb-8">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${result.probability}%` }}
          transition={{ duration: 1 }}
          className={`h-5 ${
            result.prediction === "Yes"
              ? "bg-red-500"
              : "bg-green-500"
          }`}
        />

      </div>

      {/* AI Insights */}
      <div className="bg-[#0f172a] border border-white/10 p-6 rounded-2xl">

        <h4 className="text-cyan-400 text-xl font-bold mb-4">
          AI Insights
        </h4>

        <p className="text-gray-300 leading-7">

          {result.prediction === "Yes"
            ? "Customer has strong churn indicators due to low engagement duration and high monthly billing patterns."
            : "Customer shows healthy retention behavior with stable engagement and lower churn probability."}

        </p>

      </div>

    </motion.div>
  );
}

export default ResultCard;