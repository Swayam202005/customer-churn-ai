from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib

# =========================
# CREATE APP
# =========================
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================
# LOAD MODEL
# =========================
model = joblib.load("churn_model.pkl")
columns = joblib.load("columns.pkl")

# =========================
# INPUT SCHEMA
# =========================
class Customer(BaseModel):
    tenure: int
    MonthlyCharges: float
    TotalCharges: float
    Contract: str
    InternetService: str
    PaymentMethod: str
    TechSupport: str
    OnlineSecurity: str
    PaperlessBilling: str

# =========================
# HOME ROUTE
# =========================
@app.get("/")
def home():
    return {"message": "Churn Prediction API Running"}

# =========================
# PREDICTION ROUTE
# =========================
@app.post("/predict")
def predict(data: Customer):

    input_data = {
        'tenure': data.tenure,
        'MonthlyCharges': data.MonthlyCharges,
        'TotalCharges': data.TotalCharges,

        'Contract_Two year': 1 if data.Contract == "Two year" else 0,
        'Contract_One year': 1 if data.Contract == "One year" else 0,

        'InternetService_Fiber optic': 1 if data.InternetService == "Fiber optic" else 0,

        'PaymentMethod_Electronic check': 1 if data.PaymentMethod == "Electronic check" else 0,

        'TechSupport_Yes': 1 if data.TechSupport == "Yes" else 0,
        'OnlineSecurity_Yes': 1 if data.OnlineSecurity == "Yes" else 0,
        'PaperlessBilling_Yes': 1 if data.PaperlessBilling == "Yes" else 0
    }

    # CREATE DATAFRAME
    df = pd.DataFrame([input_data])

    # MATCH TRAINING COLUMNS
    df = df.reindex(columns=columns, fill_value=0)

    # PREDICT
    prediction = model.predict(df)[0]
    probability = model.predict_proba(df)[0][1]

    return {
        "prediction": int(prediction),
        "probability": float(probability)
    }