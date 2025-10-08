import React, { type FC, Fragment } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import NextImage from 'next/image';
import { type TSanityImageAsset } from '@/types';
import { makeResponsiveContain } from '@/utils/makeImageProps';
import { type TArtwork } from "@/types";

const SingleImage: FC<TArtwork> = artwork => {
    const theme = useTheme();
    const altDescription = artwork.mainImage?.alt || '';
    const asset = artwork.mainImage?.asset as TSanityImageAsset;
    const imageUrl = makeResponsiveContain(asset, false, [1200]).w1200;
    const { metadata: { lqip } } = asset;

    function handleClose() {
        const params = new URLSearchParams(window.location.search);
        params.delete('fullscreen');
        params.delete('_id');
        window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    }
    console.log(artwork)
    const { assetId } = asset;

    return (
        <Fragment>
            <Box
                sx={{
                    paddingLeft: {
                        xs: 1,
                        sm: 2,
                        md: 2,
                        lg: 2
                    },
                    paddingRight: 1,
                    paddingTop: {
                        xs: 1,
                    },
                    position: 'fixed',
                    right: 0,
                    top: 0,
                    zIndex: 10000,
                    height:{
                        xs: '3rem',
                        sm: '3.5rem',
                    },
                    lineHeight: {
                        xs: .9,
                    },
                    display: 'flex',
                    fleDirection: 'row',
                    gap: {
                        xs: 1,
                        sm: 1,
                        md: 2
                    },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                <Typography
                    component="h1"
                    variant="h6"
                    sx={{
                        lineHeight: {
                            xs: .9,
                        },
                    }}
                >
                    {artwork.title}, {artwork.year ? artwork.year : ''}, {artwork.medium ? artwork.medium : ''}, {artwork.dimensions ? artwork.dimensions : ''}
                </Typography>
                <Button
                    onClick={handleClose}
                    sx={{
                        minWidth: 'auto',
                        padding: 1,
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        },
                        aspectRatio: '1 / 1',
                        maxWidth: { xs: 30, lg: 40 },
                        maxHeight: { xs: 30, lg: 40 },
                    }}
                >
                    <CloseIcon />
                </Button>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: '95%',
                    margin: 0,
                    position: 'fixed',
                    backgroundColor: 'rgba(0, 0, 0, 1)',
                    '& img': {
                        height: {
                            xs: '98%',
                        },
                        paddingTop: 2,
                        objectFit: 'contain',
                        objectPosition: 'center',
                        width: {
                            xs: '100%',
                        },
                        maxHeight: {
                            xs: '95vh',
                        },
                        backgroundPosition: 'inherit !important',
                        backgroundSize: 'inherit !important',
                    }
                }}
            >
                <NextImage
                    alt={altDescription || ''}
                    blurDataURL={lqip}
                    height={1200}
                    placeholder={lqip ? "blur" : "empty"}
                    quality={75}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1200px"
                    src={imageUrl}
                    width={1200}
                />
            </Box>
        </Fragment>
    );
};

export default SingleImage;

