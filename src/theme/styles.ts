import { type SxProps } from "@mui/material";
export const carouselStyles: SxProps = {
      transform: 'translateZ(0)',
    paddingTop: 2,
    paddingX: {
        xs: 0,
        md: '2rem',
    },
    justifyContent: 'flex-start',
    mx: 0,
    willChange: 'transform, grid-template-columns',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    marginBottom: {
        xs: 3,
        md: 8,
        lg: 6,
    },
    width: {
        xs: '100vw',
        md: '100vw',
        lg: '100vw',
    },
    boxSizing: 'border-box',
    display: 'grid',
    alignItems: 'center',
    gap: 2,
    gridTemplateColumns: {
        xs: '100vw',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
    },
    '& > *': {
        position: 'relative',
                boxShadow: '3px 3px 4px rgba(0,0,0,0.5)',
                padding: 2,
                backgroundColor: 'white',
                borderRadius: 2,
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