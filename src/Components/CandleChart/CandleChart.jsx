import { ColorType, createChart } from "lightweight-charts";
import { React, useEffect, useRef, useState } from "react";

const CandleChart = ({candles}) => {
  const chartContainerRef = useRef();
  

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "white" },
      },
      width: chartContainerRef.current.clientWidth,
      height: 500,
    });
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });
     candlestickSeries.setData(candles);
    return () => [chart.remove()];
  }, [candles]);

  return <div ref={chartContainerRef}></div>;
};
export default CandleChart;
