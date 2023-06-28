import { React } from "react";
import "./StrategyCard.scss";

const StrategyCard = ({ strategyRecord }) => {
  let tradesRecord = "";
  let backTest = "";
  let strategyName = "";
  let noOfBars = "";
  let interval = "";
  let action = "";

  if (strategyRecord !== undefined && strategyRecord !== null) {
    const stratRecordKeys = Object.keys(strategyRecord);
    stratRecordKeys.forEach((key) => {
      if (key !== undefined && key !== null) {
        if (key === "tradesRecord") {
          tradesRecord += "Recent Recommended Trades: \n";
          const tradesRecordkeys = Object.keys(strategyRecord.tradesRecord);
          tradesRecordkeys.forEach((key) => {
            const trade = Object.keys(strategyRecord.tradesRecord[key])[0];
            const candle = strategyRecord.tradesRecord[key][trade];
            let candleFormated = "";
            candleFormated +=
              "\n" + candle.split(",")[0].slice(11,21) + "\n";
              for (let i = 1; i <= 4; i++) {
                candleFormated +=
                candle
                  .split(",")[i]
                  .trim()
                  .split(": ")[0].concat(": ", candle
                  .split(",")[i]
                  .trim()
                  .split(": ")[1].slice(0,8)) + "\n";
                
              }
            tradesRecord += key + ": " + candleFormated + "\n";
          });
        } else if (key === "backTest") {
          backTest += "Back Test Results" + ": \n";
          const backTestkeys = Object.keys(strategyRecord.backTest);
          backTestkeys.forEach((comparison) => {
            backTest +=
              comparison +
              ": " +
              strategyRecord.backTest[comparison].slice(0, 10) +
              "\n";
          });
        } else if (key === "strategyName") {
          strategyName = "Strategy: " + strategyRecord[key].toUpperCase();
        } else if (key === "noOfBars") {
          noOfBars = "Number of Candles Analysed: " + strategyRecord[key];
        } else if (key === "interval") {
          interval = "Interval" + ": " + strategyRecord[key];
        } else if (key === "action") {
          action = "Recommended Action: " + strategyRecord[key];
        }
      }
    });
  }

  return (
    <div className="container">
      <p>{strategyName}</p>
      <p>{action}</p>
      <p>{noOfBars}</p>
      <p>{interval}</p>
      <p>{tradesRecord}</p>
      <p>{backTest}</p>
    </div>
  );
};
export default StrategyCard;
