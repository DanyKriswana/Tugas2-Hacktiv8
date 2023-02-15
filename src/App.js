import React from 'react';
import './App.css';

const App = () => {
  const DataCurrency = [
    {
      date: "2022-11-11 00:05:00+00",
      base: "USD",
      rates: {
          CAD: "1.3327",
          IDR: "15511.4999",
          JPY: "141.5488",
          CHF: '0.9645',
          EUR: "0.9808",
          GBP: "0.8547"
      }
  }
  ]

  return (
    <div className="App">
      <div className='container-table'>
        <table className='table'>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
          {DataCurrency.map(data =>(
              <tr>
                <td>CAD</td>
                <td>{data.rates.CAD + 0.05}</td>
                <td>{data.rates.CAD}</td>
                <td>{data.rates.CAD - 0.05}</td>
              </tr>
          ))}
          {DataCurrency.map(data => (
            <tr>
              <td>IDR</td>
                <td>{data.rates.IDR + 0.05}</td>
                <td>{data.rates.IDR}</td>
                <td>{data.rates.IDR - 0.05}</td>
            </tr>
          ))}
          {DataCurrency.map(data => (
            <tr>
              <td>JPY</td>
                <td>{data.rates.JPY + 0.05}</td>  
                <td>{data.rates.JPY}</td>
                <td>{data.rates.JPY - 0.05}</td>
            </tr>
          ))}
          {DataCurrency.map(data => (
            <tr>
              <td>CHF</td>
                <td>{data.rates.CHF + (5/100)}</td>  
                <td>{data.rates.CHF}</td>
                <td>{data.rates.CHF - 0.05}</td>
            </tr>
          ))}
          {DataCurrency.map(data => (
            <tr>
              <td>EUR</td>
                <td>{data.rates.EUR + (5/100)}</td>  
                <td>{data.rates.EUR}</td>
                <td>{data.rates.EUR - 0.05}</td>
            </tr>
          ))}
          {DataCurrency.map(data => (
            <tr>
              <td>GBP</td>
                <td>{data.rates.GBP + (5/100)}</td>  
                <td>{data.rates.GBP}</td>
                <td>{data.rates.GBP - 0.05}</td>
            </tr>
          ))}
        </table>
        <h2>
          Rates are based from 1 USD
          This application uses API from https://currencyfreaks.com.
        </h2>
      </div>
    </div>
  );
}

export default App;
