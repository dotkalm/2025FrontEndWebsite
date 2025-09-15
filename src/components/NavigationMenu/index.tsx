'use client';
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";

const NavMenu: React.FC = () => {
    return (
        <AppBar
            color="transparent"
            elevation={0}
            sx={{
                backgroundColor: 'rgba(55, 95, 155, 0.1)',
                transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
                borderBottom: '1px solid rgba(55, 95, 155, 0.2)',
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                }}
            >
                <Typography variant="h1" color="pink">
                    Joel Holmberg
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default NavMenu;