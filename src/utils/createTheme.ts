import { createTheme, type Theme }  from '@mui/material/styles';
import { breakpoints, mediaQueries } from '@/theme/responsiveLayout';

export function createMuiTheme(): Theme {
    const circularFont = '"Circular Std", "Helvetica Neue", Arial, sans-serif';

    return createTheme({
        typography: {
            fontFamily: circularFont,
            fontWeightLight: 400,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,
            fontWeightBlack: 900,
            h1: {
                fontFamily: circularFont,
                fontWeight: 900,
                fontSize: '2.5rem',
                lineHeight: 1.2,
                [mediaQueries.mobile]: {
                    fontSize: '2rem',
                    lineHeight: 1.15
                }
            },
            h2: {
                fontFamily: circularFont,
                fontWeight: 900,
                fontSize: '2rem',
                lineHeight: 1.2,
                [mediaQueries.mobile]: {
                    fontSize: '1.75rem',
                    lineHeight: 1.15
                }
            },
            h3: {
                fontFamily: circularFont,
                fontWeight: 700,
                fontSize: '1.75rem',
                lineHeight: 1.2,
                [mediaQueries.mobile]: {
                    fontSize: '1.5rem',
                    lineHeight: 1.15
                }
            },
            h1Italic: {
                fontFamily: circularFont,
                fontWeight: 900,
                fontStyle: 'italic',
                fontSize: '2.5rem',
                lineHeight: 1.2,
                [mediaQueries.mobile]: {
                    fontSize: '2rem',
                    lineHeight: 1.15
                }
            },
            h2Italic: {
                fontFamily: circularFont,
                fontWeight: 900,
                fontStyle: 'italic',
                fontSize: '2rem',
                lineHeight: 1.2,
                [mediaQueries.mobile]: {
                    fontSize: '1.75rem',
                    lineHeight: 1.15
                }
            },
            body1: {
                fontFamily: circularFont,
                fontWeight: 400,
                fontSize: '1rem',
                lineHeight: 1.5,
                [mediaQueries.mobile]: {
                    fontSize: '0.9375rem',
                    lineHeight: 1.4
                }
            },
            body2: {
                fontFamily: circularFont,
                fontWeight: 400,
                fontSize: '0.875rem',
                lineHeight: 1.43,
                [mediaQueries.mobile]: {
                    fontSize: '0.875rem',
                    lineHeight: 1.35
                }
            },
            body1Italic: {
                fontFamily: circularFont,
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: '1rem',
                lineHeight: 1.5,
                [mediaQueries.mobile]: {
                    fontSize: '0.9375rem',
                    lineHeight: 1.4
                }
            },
            body2Italic: {
                fontFamily: circularFont,
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: '0.875rem',
                lineHeight: 1.43,
                [mediaQueries.mobile]: {
                    fontSize: '0.875rem',
                    lineHeight: 1.35
                }
            }
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: breakpoints.sm,
                md: breakpoints.md,
                lg: breakpoints.lg,
                xl: 1440
            }
        },
    });
}
