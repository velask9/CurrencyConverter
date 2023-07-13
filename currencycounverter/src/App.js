import React, {useEffect, useState} from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const Base_url ="https://api.exchangerate.host/latest"
const request = new XMLHttpRequest();
request.open('GET', Base_url);
request.responseType = 'json';
request.send();



function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountFromCurrency, setAmountFromCurrency]= useState(true)
  console.log(exchangeRate)


  let toAmount, fromAmount
  if(amountFromCurrency){
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else{
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }





  useEffect(() => {
    fetch(Base_url)
    .then((res => res.json()))
    .then((data) => {
      const firstCurrency = Object.keys(data.rates)[0];
      setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      setFromCurrency(data.base);
      setToCurrency(firstCurrency);
      setExchangeRate(data.rates[firstCurrency]);
    });
  }, []);


useEffect(()=> {
  if (fromCurrency != null && toCurrency != null){
    fetch(`${Base_url}?base= ${fromCurrency}&symbols= ${toCurrency}`)
      .then(res => res.json())
      .then(data => setExchangeRate(data.rates[toCurrency]))

  }

}, [fromCurrency, toCurrency])


function handleFromAmountChange(e){
  setAmount(e.target.value)
  setAmountFromCurrency(true)
}


function handleToAmountChange(e){
  setAmount(e.target.value)
  setAmountFromCurrency(false)
}


  return (
    <>
    <h1>Currency Converter</h1>
    <CurrencyRow
    currencyOptions= {currencyOptions}
    selectCurrency= {fromCurrency}
    onChangeCurrency= {e => setFromCurrency(e.target.value)}
    onChangeAmount= {handleFromAmountChange}
    amount = {fromAmount}
    />
    <div className='equals'>=</div>
    <CurrencyRow 
    currencyOptions= {currencyOptions}
    selectedCurrency= {toCurrency}
    onChangeCurrency= {e => setToCurrency(e.target.value)}
    onChangeAmount= {handleToAmountChange}
    amount ={toAmount}
    />
    </>
  );
}

export default App;
