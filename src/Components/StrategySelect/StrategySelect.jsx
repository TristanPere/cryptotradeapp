import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./StrategySelect.scss";
export default function StrategySelect({ handleChange, strategy }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl
        fullWidth
        sx={{
          color: "white",
        }}
      >
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            color: "white",
          }}
        >
          Strategy
        </InputLabel>
        <Select
          sx={{ color: "white" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={strategy}
          onChange={handleChange}
        >
          <MenuItem value={"MovingMomentum"}>Moving Momentum</MenuItem>
          <MenuItem value={"BOLLINGERRSI"}>Bollinger Band RSI</MenuItem>
          <MenuItem value={"CANDLESTICK"}>Candlestick Analysis</MenuItem>
          <MenuItem value={"CCICorrection"}>CCI Correction</MenuItem>
          <MenuItem value={"COMBINATION"}>Combination</MenuItem>
          <MenuItem value={"GlobalExtrema"}>Global Extrema</MenuItem>
          <MenuItem value={"ICHIMOKUCLOUD"}>Ichimoku Cloud</MenuItem>
          <MenuItem value={"MEANREVERSION"}>Mean Reversion</MenuItem>
          <MenuItem value={"RSI2"}>RSI 2</MenuItem>
          <MenuItem value={"TRENDBREAKOUTMOMENTUM"}>
            Trend Momentum Breakout
          </MenuItem>
          <MenuItem value={"UnstableIndicator"}>Unstable Indicator</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
