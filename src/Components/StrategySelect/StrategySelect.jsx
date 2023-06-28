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
          label="Strategy"
          onChange={handleChange}
        >
          <MenuItem value={"MovingMomentum"}>Moving Momentum</MenuItem>
          <MenuItem value={"CCICorrection"}>CCI Correction</MenuItem>
          <MenuItem value={"ADX"}>ADX</MenuItem>
          <MenuItem value={"RSI2"}>RSI 2</MenuItem>
          <MenuItem value={"GlobalExtrema"}>Global Extrema</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
