import React, { useState } from 'react';
import StockData from './Components/StockData';
import { fetchStockData } from './stockAPI';

const StockMarket = () => {
  const [symbol, setSymbol] = useState('AAPL');

  const handleSymbolChange = (e) => {
    setSymbol(e.target.value);
  };

  return (
    <div>
      <h2>Stock Market</h2>
      <div>
        <input
          type="text"
          value={symbol}
          onChange={handleSymbolChange}
          placeholder="Enter Stock Symbol"
        />
        <button onClick={() => setSymbol(symbol.toUpperCase())}>Submit</button>
      </div>
      <StockData symbol={symbol} />
    </div>
  );
};

export default StockMarket;
