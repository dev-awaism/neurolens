import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Report.css';
import axios from 'axios';

const Report = () => {
    const email = localStorage.getItem('userEmail');
    console.log("User Email:", email);

    const [userData, setUserData] = useState(null);
    const [disease, setDisease] = useState("");
    const [accuracy, setAccuracy] = useState("");

    const location = useLocation();

    useEffect(() => {
        // Extract query parameters from the URL
        const params = new URLSearchParams(location.search);
        setDisease(params.get('disease') || "No disease detected");
        setAccuracy(params.get('accuracy') || "N/A");
    }, [location]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:8000/emp/getUserDetails', {
                    empName: email,
                }, {
                    headers: { 'Content-Type': 'application/json' },
                });

                setUserData(response.data);
                console.log("Data received from backend:", response.data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        if (email) {
            fetchData();
        }
    }, [email]);

    const today = new Date();

    return (
        <div className="report-container">
            <header className="report-header">
                <h1>NeuroLens</h1>
            </header>

            <div className="report-content">
                <div className="medical-report">
                    <h2>NeuroLens Medical Report</h2>
                    <div className="patient-information">
                        <strong>Patient Information:</strong>
                        {userData ? (
                            <ul>
                                <p>Email: {userData.empName}</p>
                                <p>Name: {userData.empFLname}</p>
                                <p>Contact Number: {userData.empPhone}</p>
                                <p>Date of Scan: {today.toISOString().split('T')[0]}</p>
                            </ul>
                        ) : (
                            <p>No user details available</p>
                        )}
                    </div>

                    <div className="analysis-results">
                        <strong>Analysis Results:</strong>
                        <ul>
                            <p>Brain Health Status: {disease === "No disease detected" ? "Healthy" : "Unhealthy"}</p>
                            <p>Type of Disease Detected: {disease}</p>
                            <p>Prediction Accuracy: {accuracy}%</p>
                        </ul>
                    </div>

                    <div className="recommendations">
                        <strong>Recommendations:</strong>
                        <ul>
                            {disease === "No disease detected" ? (
                                <p>No abnormalities detected. Maintain a healthy lifestyle.</p>
                            ) : (
                                <>
                                    <p>Consult a medical specialist for further analysis.</p>
                                    <p>Follow prescribed treatments and lifestyle changes.</p>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <footer className="report-footer">
                <p>"We prioritize your health and well-being and are committed to providing comprehensive support through your medical journey."</p>
            </footer>
        </div>
    );
};

export default Report;
