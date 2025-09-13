import { createTheme, Theme } from '@mui/material/styles';
import { TDesignTokens } from '@/types';
import { breakpoints, mediaQueries, spacing } from '@/theme/responsiveLayout';

export function createMuiTheme(designTokens: TDesignTokens): Theme {
    return createTheme({
        palette: {
            primary: {
                main: designTokens.colors.black,
            },
            secondary: {
                main: designTokens.colors.gray,
            },
            background: {
                default: designTokens.colors.white,
                paper: designTokens.colors.white,
            },
            text: {
                primary: designTokens.colors.black,
                secondary: designTokens.colors.gray,
            },
            error: {
                main: designTokens.colors.red,
            },
            info: {
                main: designTokens.colors.red,
            },
            // Add custom color tokens directly to palette for easy access
            customColors: {
                black: designTokens.colors.black,
                gray: designTokens.colors.gray,
                red: designTokens.colors.red,
                white: designTokens.colors.white,
            },
        },
        typography: {
            fontFamily: 'Helvetica Neue',

            // Map MUI typography variants to your design tokens
            h1: {
                ...designTokens.typography.large.headline,
                [mediaQueries.mobile]: {
                    ...designTokens.typography.small.headline,
                },
            },
            h2: {
                ...designTokens.typography.large.headline,
                [mediaQueries.mobile]: {
                    ...designTokens.typography.small.headline,
                },
            },
            h3: {
                ...designTokens.typography.large.headline,
                [mediaQueries.mobile]: {
                    ...designTokens.typography.small.headline,
                },
            },
            h4: {
                ...designTokens.typography.large.headline,
                [mediaQueries.mobile]: {
                    ...designTokens.typography.small.headline,
                },
            },
            h5: {
                ...designTokens.typography.large.headline,
                [mediaQueries.mobile]: {
                    ...designTokens.typography.small.headline,
                },
            },
            h6: {
                ...designTokens.typography.large.headline,
                [mediaQueries.mobile]: {
                    ...designTokens.typography.small.headline,
                },
            },
            subtitle1: {
                ...designTokens.typography.large.anchoredAnnouncement,
                [mediaQueries.mobile]: {
                    ...designTokens.typography.small.anchoredAnnouncement,
                },
            },
            subtitle2: {
                ...designTokens.typography.large.captions,
                [mediaQueries.mobile]: {
                    ...designTokens.typography.small.captions,
                },
            },
            body1: {
                ...designTokens.typography.large.body,
                [mediaQueries.mobile]: {
                    ...designTokens.typography.small.body,
                },
            },
            body2: {
                ...designTokens.typography.large.body,
                fontSize: '9pt', // Slightly smaller than body1
                [mediaQueries.mobile]: {
                    ...designTokens.typography.small.body,
                    fontSize: '9pt',
                },
            },
            button: {
                ...designTokens.typography.large.navigation,
                textTransform: 'none', // Remove default uppercase
                [mediaQueries.mobile]: {
                    ...designTokens.typography.small.navigation,
                },
            },
            caption: {
                ...designTokens.typography.large.captions,
                [mediaQueries.mobile]: {
                    ...designTokens.typography.small.captions,
                },
            },
            overline: {
                ...designTokens.typography.large.anchoredAnnouncement,
                textTransform: 'uppercase',
                [mediaQueries.mobile]: {
                    ...designTokens.typography.small.anchoredAnnouncement,
                },
            },
            h1Italic: {
                ...designTokens.typography.large.headlineItalic,
                [mediaQueries.mobile]: {
                    ...designTokens.typography.small.headlineItalic,
                },
            },
            h2Italic: {
                ...designTokens.typography.large.headlineItalic,
                [mediaQueries.mobile]: {
                    ...designTokens.typography.small.headlineItalic,
                },
            },
            h3Italic: {
                ...designTokens.typography.large.headlineItalic,
                [mediaQueries.mobile]: {
                    ...designTokens.typography.small.headlineItalic,
                },
            },
            body1Italic: {
                ...designTokens.typography.large.bodyItalic,
                [mediaQueries.mobile]: {
                    ...designTokens.typography.small.bodyItalic,
                },
            },
            body2Italic: {
                ...designTokens.typography.large.bodyItalic,
                fontSize: '9pt',
                [mediaQueries.mobile]: {
                    ...designTokens.typography.small.bodyItalic,
                    fontSize: '9pt',
                },
            },
        },

        // Custom breakpoints to match your existing responsive system
        breakpoints: {
            values: {
                xs: 0,
                sm: breakpoints.sm,
                md: breakpoints.md,
                lg: breakpoints.lg,
                xl: 1440, // Add xl for very large screens
            },
        },

        // Custom spacing that integrates with your layout system
        spacing: (factor: number) => spacing.navBottom / 5 * factor, // Base unit derived from your spacing

        // Custom component overrides for italic styles
        // Add your custom tokens for direct access
        customTokens: designTokens,
    });
}