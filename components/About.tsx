import React from 'react';
import { Avatar, Paper, Typography } from "@mui/material";
import { about } from "@/app/config";


const About = () => {
    return (
        <Paper sx={{ display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', bgcolor: 'primary.light' }} >
            <Avatar>Img</Avatar>
            <Typography variant="h5" gutterBottom color = "primary.contrastText">
                { about.name }
            </Typography>
            <Typography variant="subtitle1" gutterBottom color = "#797F87">
                { about.description }
            </Typography>
        </Paper>
    );
};

export default About;
