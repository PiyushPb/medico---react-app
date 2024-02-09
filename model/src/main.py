from flask import Flask, jsonify, request
import pickle
import numpy as np
import flask_cors

app = Flask(__name__)
flask_cors.CORS(app)

# ------------------------ DIABETES PREDICTION API ------------------------

# Load the classifier and scaler for diabetes prediction model
with open('./models/diabetes_model.pkl', 'rb') as file:
    diabetes_model = pickle.load(file)

# Extract the classifier and scaler from the dictionary
loaded_classifier = diabetes_model['classifier']
scaler = diabetes_model['scaler']

# ------------------- Heart Disease PREDICTION API ------------------------

with open('./models/heart_model.pkl', 'rb') as file:
    heart_model = pickle.load(file)



@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api/v1/diabetesPrediction', methods=['POST'])
def diabetes_prediction():
    try:
        # Get input data from the request
        input_data_str = request.json.get('input_data')

        # Convert input_data to a list of floats
        input_data = [float(x) for x in input_data_str.split(',')]

        # Convert input_data to a NumPy array and reshape
        input_data_as_numpy_array = np.asarray(input_data)
        input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

        # Standardize the input data using the scaler
        std_data = scaler.transform(input_data_reshaped)

        # Make predictions
        prediction = loaded_classifier.predict(std_data)

        # Return the prediction as JSON
        result = {'prediction': int(prediction[0])}
        return jsonify(result)

    except Exception as e:
        # Handle any exceptions
        return jsonify({'error': str(e)})
    
@app.route('/api/v1/heartPrediction', methods=['POST'])
def heart_prediction():
    try:
        
        input_data_str = request.json.get('input_data')

        input_data = [float(x) for x in input_data_str.split(',')]

        input_data_as_numpy_array = np.asarray(input_data)
        input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

        prediction = heart_model.predict(input_data_reshaped)

        result = {'prediction': int(prediction[0])}
        return jsonify(result)
    except Exception as e:
        # Handle any exceptions
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True)
