from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Home route
@app.get("/")
def home():
    return {
        "message": "Churn Prediction API Running"
    }

# Prediction route
@app.post("/predict")
def predict(data: dict):

    tenure = float(data["tenure"])
    monthly = float(data["MonthlyCharges"])
    total = float(data["TotalCharges"])

    # AI Logic
    risk_score = 0

    # Monthly charges logic
    if monthly > 80:
        risk_score += 40
    elif monthly > 50:
        risk_score += 20

    # Tenure logic
    if tenure < 6:
        risk_score += 40
    elif tenure < 24:
        risk_score += 20

    # Total charges logic
    if total < 500:
        risk_score += 20

    # Final probability
    probability = min(risk_score, 100)

    # Prediction
    prediction = "Yes" if probability >= 50 else "No"

    return {
        "prediction": prediction,
        "probability": probability
    }