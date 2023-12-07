import React from 'react';
import { Box, FormControl, MenuItem, Paper, Select, Typography } from "@mui/material";

const Header = () => {
    return (
        <Paper sx={{display: 'flex', justifyContent: 'space-between', p: '24px', bgcolor: 'primary.light'}}>
            <Box>
                <Typography variant="h4" color = "primary.contrastText">
                    Theme
                </Typography>
                <Typography variant="h6" color = "primary.contrastText">
                    Synthwave
                </Typography>
            </Box>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Paper>
    );
};

export default Header;
