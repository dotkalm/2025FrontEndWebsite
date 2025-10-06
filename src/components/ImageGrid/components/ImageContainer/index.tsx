'use client';
import React, { type FC, useRef, type PointerEvent, useCallback } from 'react';
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
    const pathname = usePathname()
    const router = useRouter()
    const id = searchParams.get('_id');
    
    const lastPointerUpRef = useRef<number>(0);
    const pointerDownRef = useRef<{ x: number; y: number } | null>(null);

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    );

    const handlePointerDown = (e: PointerEvent) => {
        pointerDownRef.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = (e: PointerEvent) => {
        const start = pointerDownRef.current;

        // Check if it's a click (not a drag)
        if (start) {
            const deltaX = Math.abs(e.clientX - start.x);
            const deltaY = Math.abs(e.clientY - start.y);

            if (deltaX < 10 && deltaY < 10) {
                // It's a click, check for double click
                const now = Date.now();
                const timeSinceLastClick = now - lastPointerUpRef.current;

                if (timeSinceLastClick < 300 && timeSinceLastClick > 0) {
                    // Double click detected
                    e.preventDefault();
                    lastPointerUpRef.current = 0;
                    router.push(pathname + '?' + createQueryString('_id', imageProps._id) + '&fullscreen=true', { scroll: false });
                } else {
                    // Single click
                    lastPointerUpRef.current = now;
                    if(id === imageProps._id) {
                        router.push(pathname, { scroll: false });
                    } else {
                        router.push(pathname + '?' + createQueryString('_id', imageProps._id), { scroll: false });
                    }
                }
            }
        }

        pointerDownRef.current = null;
    };

    return (
        <Box 
            sx={{
                cursor: 'pointer !important',
                pointerEvents: 'auto !important',
                '& *': {
                    cursor: 'pointer !important',
                },
            }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
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