import { type SxProps } from "@mui/material";
export const artistDetailsStyles = {
    exhibitionSubTypeContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    },
    sidebarItem: {
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
        background: 'none',
        py: 0,
    },
    main: {
        display: 'flex',
        flexDirection: {
            xs: 'column',
            sm: 'row',
        },
        paddingTop: {
            xs: 0,
            sm: 2,
        },
        columnCount: {
            xs: 1,
            sm: 2,
            md: 2
        },
        columnGap: 2,
        minWidth: {
            xs: '90vw',
            sm: '85vw',
            md: '70vw',
            lg: '55vw',
            xl: '40vw',
        },
        maxWidth: {
            xs: '80%',
            sm: '35vw',
            md: '10vw',
        },
        '& > *': {
            flexShrink: {
                xs: 1,
                sm: 0,      // Prevent Safari shrinking on small screens and up
            },
            flexBasis: {
                xs: 'none',
                sm: '50%',  // 50% basis on small screens and up
            },
            breakInside: 'avoid',
            marginBottom: 1,
        }
    },
    artistName: {
        paddingTop: {
            xs: 3.1,
            sm: 0,
        }
    },
    leftSidebarContainer: {
        paddingTop: {
            xs: 1,
            sm: 3.1,
        }
    },
    listItemContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
};

export const pastExhibitionStyles = {
    title: {
        paddingTop: {
            xs: 3.1,
            sm: 2,
        }
    },
    container: {
        paddingTop: {
          xs: 2,
          md: 2,
        },
        paddingBottom: {
            xs: 10,
            sm: 10,
        }
    },
    exhibitionItem: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: {
            xs: 2,
            md: 4,
        }
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    }
};

export const sharedLayoutStyles = {
    twoColumnGrid: {
        display: 'grid',
        paddingTop: {
            xs: 2,
            sm: 3,
            md: 2
        },
        gridTemplateColumns: {
            xs: '90vw',
            md: '30vw 30vw',
            lg: '20vw 20vw',
        },
    },
    secondColumn: {
        display: 'flex', 
        flexDirection: 'column'
    }

};

export const carouselStyles: SxProps = {
    display: 'flex',
    justifyContent: 'flex-start',
    mx: 0,
    paddingTop: {
        xs: 2,
    },
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
        sm: '80vw',
    },
    marginLeft: {
        xs: '-24.80px !important',
        sm: '0 !important',
    },
    position: 'relative',
    overflow: 'hidden',
    '& img': {
        cursor: 'pointer',
        display: 'block',
        height: {
            xs: undefined,
            sm: '100%',
        },
        objectFit: 'contain',
        objectPosition: 'top left',
        width: {
            xs: '100vw',
            sm: '45vw',
            md: '55vw',
            lg: '65vw',
        },
        maxHeight: '100vh',
        backgroundPosition: 'inherit !important',
        backgroundSize: 'inherit !important',
    }
};