import React, { FC } from 'react';
import { useSearchParams } from 'next/navigation'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface TRolloverCaptionsProps {
    _id: string;
    altDescription?: string;
    dimensions?: string;
    medium?: string;
    title: string;
    year?: number;
}
const RolloverCaptions: FC<TRolloverCaptionsProps> = imageInfo => {
    const searchParams = useSearchParams()
    const id = searchParams.get('_id');
    const isActive = id === imageInfo._id;
    return (
        <Box
            sx={{
                alignItems: 'flex-end',
                backgroundColor: 'rgba(5, 5, 225, 0.8)',
                color: 'white',
                display: 'flex',
                height: '100%',
                justifyContent: 'flex-start',
                position: 'absolute',
                transition: 'opacity 0.1s ease-in-out, visibility 0.1s ease-in-out',
                visibility: isActive ? 'visible' : 'hidden',
                width: '100%',
                pointerEvents: 'none',
            }}
        >
            <Typography
                variant="h3"
                gutterBottom
                component="div"
                sx={{
                    marginLeft: 2,
                    lineHeight: 1.2,
                }} >
                {imageInfo.altDescription} <br />
                {imageInfo.year && `${imageInfo.year}`}<br />
                {imageInfo.medium && `${imageInfo.medium}`}<br />
                {imageInfo.dimensions && ` ${imageInfo.dimensions}`}
            </Typography>
        </Box>
    );
};

export default RolloverCaptions;

