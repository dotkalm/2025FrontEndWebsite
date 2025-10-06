import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { type TLandingPage } from '@/types';
import { carouselStyles } from '@/theme/styles';
import ImageContainer from './components/ImageContainer';

type HeroSliderProps = Pick<TLandingPage, 'carousel'>;

const HeroSlider: FC<HeroSliderProps> = ({ carousel }) => {
    return (
        <Box sx={carouselStyles}>
            {carousel.map((artwork) => artwork.mainImage && (
                <ImageContainer 
                    key={artwork._id} 
                    altDescription={artwork.mainImage.alt}
                    dimensions={artwork.dimensions}
                    medium={artwork.medium}
                    title={artwork.title}
                    year={artwork.year}
                    { ...artwork.mainImage.asset}
                />
            ))}
        </Box>
    );
};

export default HeroSlider;