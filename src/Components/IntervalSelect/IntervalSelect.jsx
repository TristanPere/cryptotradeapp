import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function IntervalSelect({ handleChange, interval }) {
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
          Interval
        </InputLabel>
        <Select
          sx={{ color: "white" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={interval}
          onChange={handleChange}
        >
          <MenuItem value={"1d"}>1 day</MenuItem>
          <MenuItem value={"6h"}>6 hour</MenuItem>
          <MenuItem value={"4h"}>4 hour</MenuItem>
          <MenuItem value={"2h"}>2 hour</MenuItem>
          <MenuItem value={"1h"}>1 hour</MenuItem>
          <MenuItem value={"30m"}>30 minute</MenuItem>
          <MenuItem value={"15m"}>15 minute</MenuItem>
          <MenuItem value={"5m"}>5 minute</MenuItem>
          <MenuItem value={"1m"}>1 minute</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
