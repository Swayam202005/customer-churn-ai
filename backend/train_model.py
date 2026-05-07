import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# =========================
# LOAD DATA
# =========================
df = pd.read_csv("data/Telco-Customer-Churn.csv")

# =========================
# DATA CLEANING
# =========================
df['TotalCharges'] = pd.to_numeric(df['TotalCharges'], errors='coerce')
df = df.dropna()

# =========================
# DROP CUSTOMER ID
# =========================
df = df.drop('customerID', axis=1)

# =========================
# ENCODE CATEGORICAL DATA
# =========================
df = pd.get_dummies(df, drop_first=True)

# =========================
# FEATURES & TARGET
# =========================
X = df.drop('Churn_Yes', axis=1)
y = df['Churn_Yes']

# =========================
# TRAIN TEST SPLIT
# =========================
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# =========================
# MODEL
# =========================
model = RandomForestClassifier()

# =========================
# TRAIN MODEL
# =========================
model.fit(X_train, y_train)

# =========================
# SAVE MODEL
# =========================
joblib.dump(model, "churn_model.pkl")

# SAVE COLUMNS
joblib.dump(X.columns.tolist(), "columns.pkl")

print("✅ MODEL TRAINED & SAVED")