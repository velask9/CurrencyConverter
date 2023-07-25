import axios from 'axios';

const API_KEY = '6b15b1f3552a282562458bbe834cbd96';
const BASE_URL = 'http://api.marketstack.com/v1/';

export const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(`${BASE_URL}/eod?access_key=${API_KEY}&symbols=${symbol}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return null;
  }
};
