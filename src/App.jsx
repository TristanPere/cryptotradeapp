import { useEffect, useState } from "react";
import "./App.scss";
import StrategyCard from "./Components/StrategyCard/StrategyCard";
import StrategySelect from "./Components/StrategySelect/StrategySelect";
import IntervalSelect from "./Components/IntervalSelect/IntervalSelect";
import PairSelect from "./Components/PairSelect/PairSelect";
import CandleChart from "./Components/CandleChart/CandleChart";
import TradingViewWidget from "./Components/TradeViewChart/TradingViewWidget";
function App() {
  const [strategyRecord, setStategyRecord] = useState([]);
  const [summary, setSummary] = useState("");
  const [candles, SetCandles] = useState([]);
  const [strategy, setStrategy] = useState("MovingMomentum");
  const [interval, setInterval] = useState("1d");
  const [pair, setPair] = useState("BTC-USD");
  const getStrategyRecord = async () => {
    let url =
      "http://localhost:8080/strategy/" +
      pair +
      "/" +
      interval +
      "/" +
      strategy;
    const res = await fetch(url);
    const data = await res.json();
    setStategyRecord(data);
  };
  const getSummary = async () => {
    let url = "http://localhost:8080/summary/" + pair + "/" + interval;
    const res = await fetch(url);
    const data = await res.text();
    setSummary(data);
  };
  const getCandles = async () => {
    let url = "http://localhost:8080/" + pair + "/" + interval;
    const res = await fetch(url);
    const data = await res.json();
    const candles = await data.map((candle) => {
      return {
        open: candle[1],
        high: candle[2],
        low: candle[3],
        close: candle[4],
        time: candle[0],
      };
    });
    SetCandles(candles);
  };
  const handleStratChange = (event) => {
    setStrategy(event.target.value);
    console.log(event.target.value);
  };
  const handleIntervalChange = (event) => {
    setInterval(event.target.value);
  };
  const handlePairChange = (event) => {
    setPair(event.target.value);
  };
  useEffect(() => {
    getSummary();
  }, [pair, interval]);
  useEffect(() => {
    getCandles();
    getStrategyRecord();
  }, [strategy, interval, pair]);

  return (
    <div className="app">
      <div className="options">
        <StrategySelect handleChange={handleStratChange} strategy={strategy} />
        <IntervalSelect
          handleChange={handleIntervalChange}
          strategy={interval}
        />
        <PairSelect handleChange={handlePairChange} strategy={interval} />
      </div>
      <div className="results">
        <StrategyCard strategyRecord={strategyRecord} summary={summary} />
        <CandleChart candles={candles} />
        <div className="tradeWidget"></div>
        <TradingViewWidget />
      </div>
    </div>
  );
}

export default App;
