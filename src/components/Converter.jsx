import React, { useState, useEffect } from "react";
import axios from "axios";

const Converter = () => {
  const [usdValue, setUsdValue] = useState("");
  const [wlknValue, setWlknValue] = useState("");
  const [conversionRate, setConversionRate] = useState("");

  const apiKey = "c4c71554-c992-428d-884a-19e760eaed3f";
  const currencySymbol = "WLKN";

  useEffect(() => {
    const fetchConversionRate = async () => {
      const response = await axios.get(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${currencySymbol}&convert=USD`,
        { headers: { "X-CMC_PRO_API_KEY": apiKey } }
      );
      setConversionRate(response.data.data.WLKN.quote.USD.price);
    };
    fetchConversionRate();
  }, []);

  const handleUsdChange = (e) => {
    setUsdValue(e.target.value);
    setWlknValue(e.target.value / conversionRate);
  };

  const handleWlknChange = (e) => {
    setWlknValue(e.target.value);
    setUsdValue(e.target.value * conversionRate);
  };

  return (
    <div>
      <h1>USD to WLKN Converter</h1>
      <div>
        <label>Enter USD value:</label>
        <input className="inp" type="number" value={usdValue} onChange={handleUsdChange} />
      </div>
      <div>
        <label>WLKN value:</label>
        <input className="inp" type="number" value={wlknValue} onChange={handleWlknChange} />
      </div>
    </div>
  );
};

export default Converter;
