from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

# Load the trained model
with open('linear_regression_model.pkl', 'rb') as file:
    model = pickle.load(file)

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def home():
    return "Linear Regression Model API"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    year = data['year']
    prediction = model.predict(np.array([[year]]))
    return jsonify({'prediction': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
