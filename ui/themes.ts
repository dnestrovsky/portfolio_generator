import { createTheme } from '@mui/material/styles';

//Synthwave
const background_Synthwave = '#241655';
const backgroundText_Synthwave = '#2D1B69';
const Tech_Synthwave = "#D470B8"
const Text_Synthwave = '#BCB5D1';

//Light
const background_Light = '#E5E6E6';
const backgroundText_Light = '#FFFFFF';
const Tech_Light = "#6725F8"
const Text_Light = '#626973';

//Dark
const background_Dark = '#20252E';
const backgroundText_Dark = '#2A303C';
const Tech_Dark = "#601CD5"
const Text_Dark = '#818795';

//Emerald
const background_Emerald = '#CFCFCF';
const backgroundText_Emerald = '#FFFFFF';
const Tech_Emerald = "#75D195"
const Text_Emerald = '#707682';

//Cupcake
const background_Cupcake = '#E7E2DF';
const backgroundText_Cupcake = '#FAF7F5';
const Tech_Cupcake = "#74C8CC"
const Text_Cupcake = '#68576D';

//Retro
const background_Retro = '#C6B386';
const backgroundText_Retro = '#E4D8B4';
const Tech_Retro = "#EE9F98"
const Text_Retro = '#605950';



const themes = {
    Synthwave: createTheme({
        palette: {
            primary: {
                main: background_Synthwave,
                light: backgroundText_Synthwave,
                dark: Tech_Synthwave,
                contrastText: Text_Synthwave,
            }
        },
        typography: {
            fontFamily: 'ui-monospace',
        },
    }),

    Light: createTheme({
        palette: {
            primary: {
                main: background_Light,
                light: backgroundText_Light,
                dark: Tech_Light,
                contrastText: Text_Light,
            }
        }
    }),

    Dark: createTheme({
        palette: {
            primary: {
                main: background_Dark,
                light: backgroundText_Dark,
                dark: Tech_Dark,
                contrastText: Text_Dark,
            }
        }
    }),

    Emerald: createTheme({
        palette: {
            primary: {
                main: background_Emerald,
                light: backgroundText_Emerald,
                dark: Tech_Emerald,
                contrastText: Text_Emerald,
            }
        }
    }),

    Cupcake: createTheme({
        palette: {
            primary: {
                main: background_Cupcake,
                light: backgroundText_Cupcake,
                dark: Tech_Cupcake,
                contrastText: Text_Cupcake,
            }
        }
    }),

    Retro: createTheme({
        palette: {
            primary: {
                main: background_Retro,
                light: backgroundText_Retro,
                dark: Tech_Retro,
                contrastText: Text_Retro,
            }
        }
    }),
};

export default themes;
