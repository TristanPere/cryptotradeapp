import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function PairSelect({ handleChange, pair }) {
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
          Stock Pair
        </InputLabel>
        <Select
          sx={{ color: "white" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pair}
          onChange={handleChange}
        >
          <MenuItem value={"BTC-USD"}>BTC-USD</MenuItem>
          <MenuItem value={"ETH-USD"}>ETH-USD</MenuItem>
          <MenuItem value={"QNT-USD"}>QNT-USD</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
