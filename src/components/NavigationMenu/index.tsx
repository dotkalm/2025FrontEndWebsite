'use client';
import React from "react";
import { useSearchParams } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Image from "next/image";

const NavMenu: React.FC = () => {
    const searchParams = useSearchParams()
    const fullscreen = searchParams.get('fullscreen');
    return (
        <AppBar
            color="transparent"
            elevation={0}
            sx={{
                backgroundColor: 'rgba(255, 195, 155, 1)',
                transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
                borderBottom: '2px solid rgba(5, 5, 5, 1)',
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    paddingTop: 0.5,
                    paddingBottom: 0.5,
                    '& img': {
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        height: {
                            xs: fullscreen ? 0 : 12.5,
                            sm: 25,
                            md: 50,
                        },
                        width: {
                            xs: fullscreen ? 0 : 75,
                            sm: 150,
                            md: 300,
                        },
                    }
                }}
            >
                <Image
                    priority
                    src="/myName.svg"
                    alt="joel holmberg"
                    width={300}
                    height={50}
                />
            </Toolbar>
        </AppBar>
    );
}

export default NavMenu;