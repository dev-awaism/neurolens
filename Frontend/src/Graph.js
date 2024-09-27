import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";

function ApiComponent() {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:7001/items'); // Change the endpoint as needed
        const data = await response.json();
        setResponseData(data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
    
  }, []);
  
  const forecastdata = []

  for (const [dateStr, timeStr] of responseData) {
    forecastdata.push({date:dateStr,forecast:timeStr})
  }

  return (
    <>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={forecastdata} width={500} height={300} margin={{ top: 60, right: 300, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray />

          <XAxis dataKey="date" interval="preserveStartEnd"></XAxis>
          <Tooltip />
          <YAxis dataKey="forecast"></YAxis>
          <Legend />
          <Line type="monotone" dataKey="forecast" stroke="red" activeDot={{ r: 8 }}></Line>
          <Line type="monotone" dataKey="date" stroke="green" activeDot={{ r: 8 }}></Line>
        </LineChart>
      </ResponsiveContainer>

    </>
  )

};

export default ApiComponent;// Updated on Sun Jul  6 12:57:27 CDT 2025
