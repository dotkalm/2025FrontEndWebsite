import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { type TLandingPage } from '@/types';
import SingleImage from './components/SingleImage';
import { carouselStyles } from '@/theme/styles';

type HeroSliderProps = Pick<TLandingPage, 'carousel'>;

const HeroSlider: FC<HeroSliderProps> = ({ carousel }) => {
    return (
        <Box sx={carouselStyles}>
            {carousel.map((artwork) => artwork.mainImage && (
                <SingleImage key={artwork._id} { ...artwork.mainImage.asset} altDescription={artwork.mainImage.alt} />
            ))}
        </Box>
    );
};

export default HeroSlider;