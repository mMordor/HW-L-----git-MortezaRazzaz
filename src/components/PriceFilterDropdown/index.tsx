import React, { useState, type ChangeEvent } from 'react';
import { Divider, Button, Menu, Box, Typography, Slider, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';


interface prop{
    handleSliderChange : (event: Event,newValue: number | number[]) => void;
    handleRedioChange : (event: ChangeEvent<HTMLInputElement, Element>)=> void
    priceRange : number[]
    selected_categoriy : string
}


export default function PriceFilterDropdown({priceRange , selected_categoriy, handleSliderChange , handleRedioChange}:prop) {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="w-[20%] h-full shadow-md rounded-md ">

      <Button

        startIcon={<FilterListIcon />}
        onClick={handleClick}
        sx={{ width : '100%',height:'100%', display: 'flex', justifyContent:'center', alignItems:'center', textTransform: 'none', border:'none', color:'gray', backgroundColor:'white'}}
      >
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' }}>
            Select Price Range
          </Typography>
          
          <Slider
            value={priceRange}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            min={0}
            max={1500}
            step={1}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, fontSize: '0.85rem', color: 'text.secondary' }}>
            <span>{priceRange[0].toLocaleString()} $</span>
            <span>{priceRange[1].toLocaleString()} $</span>
          </Box>
          <Divider sx={{ mt:2}}/>
          <Box >
            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' , mt:2}}>
              Categories
            </Typography>

            <FormControl>
              <RadioGroup
                name="controlled-radio-buttons-group"
                defaultValue={"All"}
                value={selected_categoriy}
                onChange={handleRedioChange}
              >
                <FormControlLabel value="All" control={<Radio />} label={"All"}/>
                <FormControlLabel value="Electronics" control={<Radio />} label={"Electronics"}/>
                <FormControlLabel value="Home Decoration" control={<Radio />} label={"Home Decoration"}/>
                <FormControlLabel value="Fashion" control={<Radio />} label={"Fashion"}/>
                <FormControlLabel value="Equipments" control={<Radio />} label={"Equipments"}/>
                <FormControlLabel value="Beauty Product" control={<Radio />} label={"Beauty Product"}/>
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Menu>
    </div>
  );
}