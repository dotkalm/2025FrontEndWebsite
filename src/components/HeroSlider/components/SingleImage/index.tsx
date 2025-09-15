import React, { FC } from 'react';
import Box from '@mui/material/Box';
import NextImage from 'next/image';
import { type TSanityImageAsset } from '@/types';
import { makeResponsiveContain } from '@/utils/makeImageProps';

interface SingleImageProps extends TSanityImageAsset {
    altDescription?: string;
}
const SingleImage: FC<SingleImageProps> = (asset) => {
    const imageUrl = makeResponsiveContain(asset, false, [1200]).w1200;
    const { metadata: { lqip, dimensions } } = asset;
    return (
        <Box>
            SingleImage Component
            <NextImage
                src={imageUrl}
                height={1200}
                width={1200}
                alt={asset.altDescription || ''}
                placeholder={lqip ? "blur" : "empty"}
                blurDataURL={lqip}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1200px"
                quality={75}
            />
        </Box>
    );
};

export default SingleImage;
