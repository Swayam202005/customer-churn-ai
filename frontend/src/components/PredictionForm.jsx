import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function PredictionForm({ setResult }) {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    tenure: "",
    MonthlyCharges: "",
    TotalCharges: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handlePredict = async () => {

    setLoading(true);

    try {

      const response = await axios.post(
        "http://localhost:8000/predict",
        formData
      );

      setTimeout(() => {
        setResult(response.data);
        setLoading(false);
      }, 1200);

    } catch (error) {
      alert("Backend not running!");
      setLoading(false);
    }
  };

  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl"
    >

      <h2 className="text-3xl font-bold mb-8">
        Predict Customer Churn
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <input
          type="number"
          name="tenure"
          placeholder="Tenure"
          onChange={handleChange}
          className="bg-[#0f172a] border border-white/10 p-4 rounded-2xl outline-none focus:border-cyan-400 transition-all"
        />

        <input
          type="number"
          name="MonthlyCharges"
          placeholder="Monthly Charges"
          onChange={handleChange}
          className="bg-[#0f172a] border border-white/10 p-4 rounded-2xl outline-none focus:border-cyan-400 transition-all"
        />

        <input
          type="number"
          name="TotalCharges"
          placeholder="Total Charges"
          onChange={handleChange}
          className="bg-[#0f172a] border border-white/10 p-4 rounded-2xl outline-none focus:border-cyan-400 transition-all"
        />

      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={handlePredict}
        className="mt-8 w-full bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 text-black font-bold py-4 rounded-2xl text-lg shadow-lg"
      >

        {loading ? "Analyzing Customer..." : "Predict Churn Risk"}

      </motion.button>

    </motion.div>
  );
}

export default PredictionForm;