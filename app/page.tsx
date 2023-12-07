'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "@/components/Header";
import {Box, Container, Grid} from "@mui/material";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Description from "@/components/Description";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import themes from "@/ui/themes";


export default function Home() {
  return (
      <ThemeProvider theme={themes.Synthwave}>
          <Box sx={{ bgcolor: 'primary.main' }}>
              <Container maxWidth={'xl'}>
                  <Grid container spacing={2} columns={{ xs: 4, sm: 4, md: 12 }}>
                      <Grid item xs={5}>
                          <Header/>
                      </Grid>
                      <Grid item xs={7}>
                          <Projects/>
                      </Grid>
                      <Grid item xs={5}>
                          <About/>
                      </Grid>
                      <Grid item xs={5}>
                          <Description/>
                      </Grid>
                      <Grid item xs={5}>
                          <Stack/>
                      </Grid>
                      <Grid item xs={5}>
                          <Experience/>
                      </Grid>
                      <Grid item xs={5}>
                          <Education/>
                      </Grid>
                  </Grid>
              </Container>
          </Box>
      </ThemeProvider>
  )
}
