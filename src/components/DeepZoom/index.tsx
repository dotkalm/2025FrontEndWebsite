import { type FC, useEffect, useRef, useState } from 'react';
import OpenSeadragon from 'openseadragon';
import Box from '@mui/material/Box';

interface DeepZoomProps {
    assetId: string;
    onDziNotFound?: () => void;
}

const DeepZoom: FC<DeepZoomProps> = ({ assetId, onDziNotFound }) => {
    const viewerRef = useRef<HTMLDivElement>(null);
    const osdViewerRef = useRef<OpenSeadragon.Viewer | null>(null);
    const [dziExists, setDziExists] = useState<boolean | null>(null);

    useEffect(() => {
        // Check if DZI file exists in the bucket
        const checkDziExists = async () => {
            try {
                const dziUrl = `https://storage.googleapis.com/dzitiles2025/${assetId}/${assetId}.dzi`;
                const response = await fetch(dziUrl, { method: 'HEAD' });

                if (response.ok) {
                    setDziExists(true);
                } else {
                    setDziExists(false);
                    onDziNotFound?.();
                }
            } catch (error) {
                setDziExists(false);
                onDziNotFound?.();
            }
        };

        checkDziExists();
    }, [assetId, onDziNotFound]);

    useEffect(() => {
        if (!viewerRef.current || !assetId || dziExists !== true) return;

        // Initialize OpenSeadragon viewer
        osdViewerRef.current = OpenSeadragon({
            element: viewerRef.current,
            tileSources: `https://storage.googleapis.com/dzitiles2025/${assetId}/${assetId}.dzi`,
            prefixUrl: 'https://cdn.jsdelivr.net/npm/openseadragon@5.0/build/openseadragon/images/',
            animationTime: 0.5,
            blendTime: 0.1,
            constrainDuringPan: true,
            maxZoomPixelRatio: 2,
            minZoomLevel: 1,
            visibilityRatio: 1,
            zoomPerScroll: 2,
            showNavigationControl: true,
            navigationControlAnchor: OpenSeadragon.ControlAnchor.TOP_RIGHT,
            showZoomControl: true,
            showHomeControl: true,
            showFullPageControl: true,
            showRotationControl: false,
        });

        // Cleanup on unmount
        return () => {
            if (osdViewerRef.current) {
                osdViewerRef.current.destroy();
                osdViewerRef.current = null;
            }
        };
    }, [assetId, dziExists]);

    // Don't render anything if DZI doesn't exist
    if (dziExists === false) {
        return null;
    }

    return (
        <Box
            ref={viewerRef}
            sx={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: '#000',
            }}
        />
    );
};

export default DeepZoom;
