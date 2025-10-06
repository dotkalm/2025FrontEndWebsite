'use client';
import React, { type FC, useRef, type TouchEvent, useCallback } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import Box from '@mui/material/Box';
import { type TSanityImageAsset } from '@/types';
import SingleImage from '../SingleImage';
import RolloverCaptions from '../CaptionRollover';

interface SingleImageProps extends TSanityImageAsset {
    _id: string;
    altDescription?: string;
    dimensions?: string;
    medium?: string;
    title: string;
    year?: number;
}

const ImageContainer: FC<SingleImageProps> = ({ 
    altDescription,
    dimensions,
    medium,
    title,
    year,
    ...imageProps 
}) => {
    const searchParams = useSearchParams()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const lastTouchRef = useRef<number>(0);
    const touchStartRef = useRef<{ x: number; y: number } | null>(null);
    const pathname = usePathname()
    const router = useRouter()
    const id = searchParams.get('_id');


    function handleClick() {
        if(id === imageProps._id) {
            router.push(pathname, { scroll: false });
        }else{
            router.push(pathname + '?' + createQueryString('_id', imageProps._id), { scroll: false });
        }
    }

    function handleDoubleClick() {
        console.log('double click');
        router.push(pathname + '?' + createQueryString('_id', imageProps._id) + '&fullscreen=true', { scroll: false });
    }

    const handleTouchStart = (e: PointerEvent) => {
        const touch = e.touches[0];
        touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (e: PointerEvent) => {
        const touch = e.changedTouches[0];
        const start = touchStartRef.current;

        // Check if it's a tap (not a swipe)
        if (start) {
            const deltaX = Math.abs(touch.clientX - start.x);
            const deltaY = Math.abs(touch.clientY - start.y);

            if (deltaX < 10 && deltaY < 10) {
                // It's a tap, check for double tap
                const now = Date.now();
                const timeSinceLastTap = now - lastTouchRef.current;

                if (timeSinceLastTap < 300 && timeSinceLastTap > 0) {
                    // Double tap detected
                    e.preventDefault(); // Prevent default zoom
                    lastTouchRef.current = 0;
                    console.log('double tap');
                } else {
                    console.log('single tap');
                    lastTouchRef.current = now;
                    createQueryString('showCaptions', 'true');
                    createQueryString('_id', imageProps._id);
                }
            }
        }

        touchStartRef.current = null;
    };

    const handlers = isMobile
        ? {
            onPointerDown: handleTouchStart,
            onTouchEnd: handleTouchEnd,
        }
        : {
            onClick: handleClick,
            onDoubleClick: handleDoubleClick,
        };

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    );

    return (
        <Box 
            sx={{
                cursor: 'pointer !important',
                pointerEvents: 'auto !important',
                '& *': {
                    cursor: 'pointer !important',
                },
            }}
            {...handlers}
        >
            <RolloverCaptions
                altDescription={altDescription}
                title={title}
                year={year}
                medium={medium}
                dimensions={dimensions}
                _id={imageProps._id}
            />
            <SingleImage
                {...imageProps}
                altDescription={altDescription}
            />
        </Box>
    );
};

export default ImageContainer;
