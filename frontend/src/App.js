import { useState } from "react";
import axios from "axios";
import {
  FaBrain,
  FaUsers,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";

function App() {
  const [formData, setFormData] = useState({
    tenure: "",
    MonthlyCharges: "",
    TotalCharges: "",
    Contract: "Month-to-month",
    InternetService: "DSL",
    PaymentMethod: "Electronic check",
    TechSupport: "No",
    OnlineSecurity: "No",
    PaperlessBilling: "Yes",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const predictChurn = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        {
          tenure: Number(formData.tenure),
          MonthlyCharges: Number(formData.MonthlyCharges),
          TotalCharges: Number(formData.TotalCharges),
          Contract: formData.Contract,
          InternetService: formData.InternetService,
          PaymentMethod: formData.PaymentMethod,
          TechSupport: formData.TechSupport,
          OnlineSecurity: formData.OnlineSecurity,
          PaperlessBilling: formData.PaperlessBilling,
        }
      );

      setResult(response.data);
    } catch (error) {
      console.log(error);
      alert("Backend not running!");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-cyan-400">
          AI Churn Dashboard
        </h1>

        <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl font-semibold transition">
          Live Analytics
        </button>
      </nav>

      {/* Hero */}
      <section className="px-10 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h1 className="text-6xl font-extrabold leading-tight">
              Customer Churn
              <span className="text-cyan-400"> Prediction AI</span>
            </h1>

            <p className="text-slate-400 mt-6 text-lg">
              Enterprise-grade machine learning dashboard for predicting
              customer churn using AI-powered analytics.
            </p>

            <div className="flex gap-5 mt-8">
              <div className="bg-slate-900 p-5 rounded-2xl w-40">
                <FaUsers className="text-3xl text-cyan-400 mb-3" />
                <h2 className="text-2xl font-bold">7K+</h2>
                <p className="text-slate-400 text-sm">Customers</p>
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl w-40">
                <FaChartLine className="text-3xl text-green-400 mb-3" />
                <h2 className="text-2xl font-bold">79%</h2>
                <p className="text-slate-400 text-sm">Accuracy</p>
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl w-40">
                <FaBrain className="text-3xl text-pink-400 mb-3" />
                <h2 className="text-2xl font-bold">AI</h2>
                <p className="text-slate-400 text-sm">Powered</p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold mb-6">
              Predict Customer Churn
            </h2>

            <div className="grid grid-cols-2 gap-4">

              <input
                type="number"
                name="tenure"
                placeholder="Tenure"
                className="bg-slate-800 p-3 rounded-xl outline-none"
                onChange={handleChange}
              />

              <input
                type="number"
                name="MonthlyCharges"
                placeholder="Monthly Charges"
                className="bg-slate-800 p-3 rounded-xl outline-none"
                onChange={handleChange}
              />

              <input
                type="number"
                name="TotalCharges"
                placeholder="Total Charges"
                className="bg-slate-800 p-3 rounded-xl outline-none"
                onChange={handleChange}
              />

              <select
                name="Contract"
                className="bg-slate-800 p-3 rounded-xl"
                onChange={handleChange}
              >
                <option>Month-to-month</option>
                <option>One year</option>
                <option>Two year</option>
              </select>

              <select
                name="InternetService"
                className="bg-slate-800 p-3 rounded-xl"
                onChange={handleChange}
              >
                <option>DSL</option>
                <option>Fiber optic</option>
                <option>No</option>
              </select>

              <select
                name="PaymentMethod"
                className="bg-slate-800 p-3 rounded-xl"
                onChange={handleChange}
              >
                <option>Electronic check</option>
                <option>Mailed check</option>
                <option>Bank transfer (automatic)</option>
              </select>

              <select
                name="TechSupport"
                className="bg-slate-800 p-3 rounded-xl"
                onChange={handleChange}
              >
                <option>No</option>
                <option>Yes</option>
              </select>

              <select
                name="OnlineSecurity"
                className="bg-slate-800 p-3 rounded-xl"
                onChange={handleChange}
              >
                <option>No</option>
                <option>Yes</option>
              </select>

            </div>

            <button
              onClick={predictChurn}
              className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-2xl text-lg font-bold transition"
            >
              {loading ? "Predicting..." : "Predict Churn"}
            </button>

            {result && (
              <div className="mt-8 bg-slate-800 rounded-2xl p-6 border border-slate-700">

                <h2 className="text-2xl font-bold mb-4">
                  Prediction Result
                </h2>

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-slate-400">Prediction</p>

                    <h1
                      className={`text-4xl font-bold ${
                        result.prediction === 1
                          ? "text-red-400"
                          : "text-green-400"
                      }`}
                    >
                      {result.prediction === 1
                        ? "Likely to Churn"
                        : "Customer Safe"}
                    </h1>
                  </div>

                  <div>
                    <FaMoneyBillWave className="text-6xl text-cyan-400" />
                  </div>

                </div>

                <div className="mt-6">
                  <p className="text-slate-400 mb-2">
                    Churn Probability
                  </p>

                  <div className="w-full bg-slate-700 rounded-full h-5">
                    <div
                      className="bg-cyan-400 h-5 rounded-full"
                      style={{
                        width: `${(result.probability * 100).toFixed(0)}%`,
                      }}
                    ></div>
                  </div>

                  <p className="mt-2 text-lg font-bold">
                    {(result.probability * 100).toFixed(2)}%
                  </p>
                </div>

              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}

export default App;