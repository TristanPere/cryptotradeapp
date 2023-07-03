import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function StrategySelect({ handleChange, value }) {
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
          Data Point Limit
        </InputLabel>
        <Select
          sx={{ color: "white" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
        >
          <MenuItem value={"25"}>25</MenuItem>
          <MenuItem value={"50"}>50</MenuItem>
          <MenuItem value={"75"}>75</MenuItem>
          <MenuItem value={"100"}>100</MenuItem>
          <MenuItem value={"200"}>200</MenuItem>
          <MenuItem value={"350"}>350</MenuItem>
          <MenuItem value={"500"}>500</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
