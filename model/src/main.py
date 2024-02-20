from flask import Flask, jsonify, request
import pickle
import numpy as np
import flask_cors
import cv2
from tensorflow.keras.preprocessing import image  
import matplotlib.pyplot as plt
from tensorflow.keras.models import load_model

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


# ------------------- BrainTumor Detection API --------------------------
brainTumModel = load_model('./models/braintumor.h5')

def preprocess_image(img_path):
    img = cv2.imread(img_path)
    img = cv2.resize(img, (150, 150))
    img_array = np.array(img)
    img_array = img_array.reshape(1, 150, 150, 3)
    return img_array



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


@app.route('/api/v1/brainTumorPrediction', methods=['POST'])
def brain_tumor_prediction():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400

    image_file = request.files['image']

    allowed_extensions = {'jpg', 'jpeg', 'png'}
    if not image_file.filename.lower().endswith(tuple(allowed_extensions)):
        return jsonify({'error': 'Invalid file type. Allowed types: jpg, jpeg, png'}), 400

    # Save the image to a temporary file
    temp_path = 'temp_image.jpg'
    image_file.save(temp_path)

    # Preprocess the image
    img_array = preprocess_image(temp_path)

    # Make prediction
    prediction = brainTumModel.predict(img_array)
    indices = prediction.argmax()

    # Return the result
    return jsonify({'prediction': int(indices)})

if __name__ == '__main__':
    app.run(debug=True)
