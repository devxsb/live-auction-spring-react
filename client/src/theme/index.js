import PropTypes from 'prop-types';
import {useMemo} from 'react';
// @mui
import {CssBaseline} from '@mui/material';
import {createTheme, StyledEngineProvider, ThemeProvider as MUIThemeProvider} from '@mui/material/styles';
//
import palette from './palette';
import shadows from './shadows';
import typography, {pxToRem} from './typography';
import GlobalStyles from './globalStyles';
import customShadows from './customShadows';
import componentsOverride from './overrides';
import boxShadow from "./functions/boxShadow";
import linearGradient from "./functions/linearGradient";
import rgba from "./functions/rgba";
import boxShadows from "./base/boxShadows";
import borders from "./base/borders";
import colors from "./base/colors";
import fonts from "./base/fonts";
// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
    children: PropTypes.node,
};

export default function ThemeProvider({children}) {
    const themeOptions = useMemo(
        () => ({
            palette,
            shape: {borderRadius: 6},
            typography,
            shadows: shadows(),
            customShadows: customShadows(),
            functions: {
                boxShadow,
                rgba,
                linearGradient,
                pxToRem,
            },
            colors: {...colors},
            boxShadows: {...boxShadows},
            borders: {...borders},
            fonts: {...fonts}
        }),
        []
    );

    const theme = createTheme(themeOptions);
    theme.components = componentsOverride(theme);

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline/>
                <GlobalStyles/>
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
}
