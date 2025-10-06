import { type SxProps } from "@mui/material";
export const carouselStyles: SxProps = {
    paddingTop: 2,
    backgroundColor: 'rgba(45, 45, 145, 1)',
    justifyContent: 'flex-start',
    mx: 0,
    willChange: 'transform, grid-template-columns',
    transform: 'translateZ(0)',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    marginBottom: {
        xs: 3,
        md: 8,
        lg: 6,
    },
    paddingBottom: {
        md: 8,
        lg: 6,
    },
    width: {
        xs: '100vw',
    },
    position: 'relative',
    overflow: 'hidden',
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: {
        xs: '100vw',
        md: '50vw 50vw',
        lg: '33vw 33vw 33vw',
    },
    '& > *': {
        position: 'relative',
        padding: 1,
    },
    '& img': {
        display: 'block',
        height: {
            xs: '100%',
        },
        objectFit: 'contain',
        objectPosition: 'center',
        width: {
            xs: '100%',
        },
        maxHeight: {
            xs: '100%',
            sm: '100%',
            md: '80%',
            lg: '400px'
        },
        backgroundPosition: 'inherit !important',
        backgroundSize: 'inherit !important',
    }
};