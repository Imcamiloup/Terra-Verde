import streamlit as st
import pandas as pd
import numpy as np
import joblib

# Cargar el pipeline entrenado
model_path = "cafe_price_model_pipeline.pkl"
pipeline = joblib.load(model_path)

# Título de la app
st.title("Predicción de Precios de Café Especial")
st.write("Introduce las características del café:")

# Entradas del usuario
quality_score = st.slider("Calidad del Café (0-100):", min_value=75, max_value=95, value=85, step=1)
certifications = st.selectbox("Certificaciones:", options=[0, 1], index=0)
precipitation_mm = st.slider("Precipitación (mm):", min_value=50.0, max_value=300.0, value=150.0, step=0.1)
temperature_c = st.slider("Temperatura (°C):", min_value=15.0, max_value=30.0, value=22.0, step=0.1)
humidity = st.slider("Humedad (%):", min_value=50.0, max_value=90.0, value=70.0, step=0.1)
region = st.selectbox("Región:", options=["Andes", "Centroamérica", "África"], index=0)

# Crear DataFrame de entrada
input_data = pd.DataFrame({
    "quality_score": [quality_score],
    "certifications": [certifications],
    "precipitation_mm": [precipitation_mm],
    "temperature_c": [temperature_c],
    "humidity": [humidity],
    "region": [region]
})

# Mostrar datos de entrada
st.write("Datos de entrada procesados:", input_data)

# Botón para predecir
if st.button("Predecir Precio"):
    try:
        # Realizar predicción usando el pipeline
        prediction = pipeline.predict(input_data)
        st.success(f"El precio predicho para el café es: ${prediction[0]:.2f} USD")
    except Exception as e:
        st.error(f"Hubo un error al realizar la predicción: {e}")
