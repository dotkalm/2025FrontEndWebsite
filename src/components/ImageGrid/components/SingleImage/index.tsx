import React, { FC } from 'react';
import NextImage from 'next/image';
import { type TSanityImageAsset } from '@/types';
import { makeResponsiveContain } from '@/utils/makeImageProps';

interface SingleImageProps extends TSanityImageAsset {
    altDescription?: string;
}
const SingleImage: FC<SingleImageProps> = (asset) => {
    const imageUrl = makeResponsiveContain(asset, false, [1200]).w1200;
    const { metadata: { lqip } } = asset;
    return (
        <NextImage
            alt={asset.altDescription || ''}
            blurDataURL={lqip}
            height={1200}
            placeholder={lqip ? "blur" : "empty"}
            quality={75}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1200px"
            src={imageUrl}
            width={1200}
        />
    );
};

export default SingleImage;
