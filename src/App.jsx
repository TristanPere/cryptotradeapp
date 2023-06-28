import { useEffect, useState } from "react";
import "./App.scss";
import StrategyCard from "./Components/StrategyCard/StrategyCard";
import CandleLimitSlider from "./Components/CandleLimitSlider/CandleLimitSlider";
import StrategySelect from "./Components/StrategySelect/StrategySelect";
import IntervalSelect from "./Components/IntervalSelect/IntervalSlect";
import PairSelect from "./Components/PairSelect/PairSelect";
import CandleChart from "./Components/CandleChart/CandleChart";
function App() {
  const [strategyRecord, setStategyRecord] = useState([]);
  const [candles, SetCandles] = useState([]);
  const [strategy, setStrategy] = useState("MovingMomentum");
  const [interval, setInterval] = useState("1d");
  const [candleLimit, setCandleLimit] = useState(365);
  const [pair, setPair] = useState("BTC-USD");

  const getStrategyRecord = async () => {
    let url =
      "http://localhost:8080/strategy/" +
      pair +
      "/" +
      interval +
      "/" +
      strategy +
      "/" +
      candleLimit;
    const res = await fetch(url);
    const data1 = await res.json();
    setStategyRecord(data1);
  };
  const getCandles = async () => {
    let url = "http://localhost:8080/" + pair + "/" + interval + "/" + candleLimit;
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
  };
  const handleIntervalChange = (event) => {
    setInterval(event.target.value);
  };
  const handlePairChange = (event) => {
    setPair(event.target.value);
  };
  
  const handleCandleLimitChange = (event, candleLimit) => {
    if (typeof candleLimit === "number") {
      setCandleLimit(candleLimit);
    }
    console.log(candleLimit);
  };
  useEffect(() => {
    getCandles();
    getStrategyRecord();
  }, [strategy, interval, pair, candleLimit]);

  return (
    <div className="App">
      <div>
        <div className="options">
          <StrategySelect
            handleChange={handleStratChange}
            strategy={strategy}
          />
          <IntervalSelect
            handleChange={handleIntervalChange}
            strategy={interval}
          />
          <PairSelect handleChange={handlePairChange} strategy={interval} />
          <CandleLimitSlider handleChange={handleCandleLimitChange} value={candleLimit}/>
        </div>
        <StrategyCard strategyRecord={strategyRecord} />
      </div>
      <CandleChart candles={candles} />
    </div>
  );
}

export default App;
