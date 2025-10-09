'use client';
import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { type TLandingPage } from '@/types';
import { carouselStyles } from '@/theme/styles';
import { useSearchParams } from 'next/navigation'
import ImageContainer from './components/ImageContainer';
import SingleImage from '@/components/FullSizeImage';

type ImageGridProps = Pick<TLandingPage, 'carousel'>;

const ImageGrid: FC<ImageGridProps> = ({ carousel }) => {
    const searchParams = useSearchParams()
    const id = searchParams.get('_id');
    const fullscreen = searchParams.get('fullscreen');
    const artwork = fullscreen ? carousel.find(item => item.mainImage?.asset._id === id) : null;
    return artwork ? <SingleImage {...artwork} /> : (
        <Box sx={carouselStyles}>
            {!fullscreen && carousel.map((artwork) => artwork.mainImage && (
                <ImageContainer
                    key={artwork._id}
                    altDescription={artwork.mainImage.alt}
                    dimensions={artwork.dimensions}
                    medium={artwork.medium}
                    title={artwork.title}
                    year={artwork.year}
                    {...artwork.mainImage.asset}
                />
            ))}
        </Box>
    );
};

export default ImageGrid;