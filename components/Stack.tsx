import React from 'react';
import {Box, Chip, Paper, Typography} from "@mui/material";
import {stack} from "@/app/config";

const Stack = () => {
    return (
        <Paper sx={{p: '24px', bgcolor: 'primary.light'}}>
            <Typography align={'left'} variant="h4" gutterBottom color = "primary.contrastText">
                Stack
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                {stack.map((tech, index) => (
                    <Chip key={index} label={tech} sx={{ bgcolor: 'primary.dark' }}/>
                ))}
            </Box>
        </Paper>
    );
};

export default Stack;
