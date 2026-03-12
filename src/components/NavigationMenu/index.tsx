'use client';
import React from "react";
import { useSearchParams } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
//import Image from "next/image";
import Name from "@/components/Name";

const NavMenu: React.FC = () => {
    const searchParams = useSearchParams()
    const fullscreen = searchParams.get('fullscreen');
    console.log('fullscreen:', fullscreen, fullscreen === 'true');
    return (
        <AppBar
            color="transparent"
            elevation={0}
            sx={{
                backgroundColor: 'rgba(255, 195, 155, 1)',
                transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
                borderBottom: '2px solid rgba(5, 5, 5, 1)',
                '.MuiToolbar-gutters': {
                    paddingX: 0,
                }
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    paddingTop: 0.5,
                    paddingBottom: 0.5,
                    paddingLeft: 0,
                }}
            >
                <Name 
                    fullscreen={fullscreen === 'true'}
                />
            </Toolbar>
        </AppBar>
    );
}

export default NavMenu;