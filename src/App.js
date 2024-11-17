import React, { useState, useEffect } from 'react';
import "./App.css";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function App() {
  const [stockData, setStockData] = useState([]);
  const APIkey = '4ee2d16b8b906c8743879b5fcd5b2415';
  const url = `http://api.marketstack.com/v1/eod?access_key=${APIkey}&symbols=AAPL`;


  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        const total = result.pagination.total;

        const fullDataResponse = await fetch(`${url}&limit=${total}`);
        const fullDataResult = await fullDataResponse.json();

        setStockData(fullDataResult.data);
        console.log("Stock data:", stockData);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, []);
  const data = {
    labels: stockData.map(entry => entry.date.split('T')[0]),
    datasets: [
      {
        label: 'AAPL Stock Price',
        data: stockData.map(entry => entry.close),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="App">
      <h1>AAPL Stock Price</h1>
      <Line data={data} />
    </div>
  );
}

export default App;
