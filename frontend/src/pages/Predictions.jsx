import PredictionForm from "../components/PredictionForm";
import ResultCard from "../components/ResultCard";

import { useState } from "react";

function Predictions() {

  const [result, setResult] = useState(null);

  return (

    <div>

      <h1 className="text-5xl font-black mb-8">
        AI Predictions
      </h1>

      <PredictionForm setResult={setResult} />

      <div className="mt-8">

        {result && (
          <ResultCard result={result} />
        )}

      </div>

    </div>

  );
}

export default Predictions;