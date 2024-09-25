import React, { useState } from 'react';
import "./main.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
            setSelectedFile(file);
        } else {
            alert("Only .jpg or .png files are allowed");
            setSelectedFile(null);
        }
    };


    const handleSubmit = async () => {
        if (!selectedFile) {
            alert("Please select a .jpg or .png file");
            return;
        }
    
        const formData = new FormData();
        formData.append("image", selectedFile);
    
        try {
            const response = await fetch("http://localhost:5000/predict", {
                method: "POST",
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error("Prediction failed");
            }
    
            const data = await response.json();
    
            const disease = data.prediction;
            const accuracy = (data.confidence * 100).toFixed(2);
    
            navigate(`/report?disease=${encodeURIComponent(disease)}&accuracy=${encodeURIComponent(accuracy)}`);
        } catch (err) {
            console.error("Error:", err);
            alert("Failed to analyze scan. Please try again.");
        }
    };

    
    return (
        <div className="app-container">
            <header className="app-header">
                <h1>NeuroLens</h1>
            </header>
            
            <div className="content-container">
                <div className="background-image"></div>
                <div className="upload-container">
                    <h2>Upload Image of your scan </h2>
                    <input type="file" onChange={handleFileChange} className="file-input" />
                    <button onClick={handleSubmit} className="submit-button">Analyze Scan</button>
                </div>
            </div>

            <footer className="app-footer">
                <p>Powered by Advanced CNN Models</p>
            </footer>
        </div>
    );
};

export default Home;
// Updated on Sun Jul  6 12:57:27 CDT 2025
// Updated on Sun Jul  6 12:57:27 CDT 2025
