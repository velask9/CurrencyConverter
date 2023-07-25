import React, { useEffect, useState } from 'react';
import { fetchStockData } from '../stockAPI'; // Update the path to fetchStockData

const StockData = ({ symbol }) => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    fetchStockData(symbol)
      .then((data) => setStockData(data))
      .catch((error) => console.error('Error:', error));
  }, [symbol]);

  if (!stockData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{stockData.name}</h2>
      <p>Symbol: {stockData.symbol}</p>
      <p>Last Price: {stockData.last_price}</p>
      {/* Add more stock data fields as needed */}
    </div>
  );
};

export default StockData;
