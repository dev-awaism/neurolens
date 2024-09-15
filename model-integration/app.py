from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from flask_cors import CORS
import numpy as np
import tensorflow as tf
import os

# Load model
model = tf.saved_model.load('saved_model')
infer = model.signatures["serving_default"]

# Class labels
disease_categories = ['Tumor', 'Stroke', 'Hemorrhage']

app = Flask(__name__)
CORS(app)

# Image preprocessing function
def preprocess_image(image_path, target_size=(240, 240)):
    image = load_img(image_path, target_size=target_size)
    image = img_to_array(image)
    image = np.expand_dims(image, axis=0)
    image = tf.keras.applications.efficientnet.preprocess_input(image)
    return image

# Predict route
@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    image_file = request.files['image']
    image_path = os.path.join('temp', image_file.filename)
    os.makedirs('temp', exist_ok=True)
    image_file.save(image_path)

    try:
        image = preprocess_image(image_path)
        result = infer(tf.constant(image))
        prediction = list(result.values())[0].numpy()

        class_index = np.argmax(prediction, axis=1)[0]
        confidence = float(prediction[0][class_index])

        if confidence < 0.65:
            label = "Unknown"
            confidence = 0.0
        else:
            label = disease_categories[class_index]


        return jsonify({
            'prediction': label,
            'confidence': confidence
        })
    finally:
        os.remove(image_path)

# Run the app
if __name__ == '__main__':
    app.run(debug=True, port=5000)
