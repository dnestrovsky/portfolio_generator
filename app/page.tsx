'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "@/components/Header";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function Home() {
  return (
      <ThemeProvider theme={darkTheme}>
            <Header/>
      </ThemeProvider>
  )
}
