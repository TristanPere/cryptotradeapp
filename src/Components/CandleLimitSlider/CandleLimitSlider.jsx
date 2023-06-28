import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

export default function NonLinearSlider({handleChange,value}) {
 

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom>
        Storage: {value}
      </Typography>
      <Slider
        value={value}
        min={50}
        step={5}
        max={500}
        valueLabelFormat={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
}
