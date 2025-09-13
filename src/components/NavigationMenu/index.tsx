'use client';
import React from "react";
import Typography from '@mui/material/Typography';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "next/link";
import { usePathname } from 'next/navigation';

import {
    type NavigationMenu,
    type NavigationMenuSubItem,
    type ExhibitionMin as TExhibitionMin,
} from "@/types";
import { EXHIBITION_ROUTES } from "@/types";
import { checkDateIsInPast } from "@/utils";

const NavMenu: React.FC<NavigationMenu & { 
    pathname?: string;
    exhibitionSlugs: string[];
    exhibitionMin: TExhibitionMin[];
}> = ({ items, pathname: pathnameArg = '', ...rest }) => {
    const { exhibitionSlugs, exhibitionMin } = rest;
    let pathname = usePathname();
    if(pathnameArg) pathname = pathnameArg;
    const paths = pathname.split('/').filter(Boolean);
    const submenuItems = items.find(item => !!item.current && !!item.past);
    const { route: routeWithSubmenu, current, past } = submenuItems || {};
    const submenuArray = [current, past] as NavigationMenuSubItem[];
    return (
        <AppBar 
            position="static" 
            color="transparent" 
            elevation={0}
            sx={{
                paddingTop: {
                    xs: 1,
                    sm: 3.5,
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                    paddingBottom: {
                        xs: 0,
                        sm: .5,
                    }
                }}
            >
                {items.map(({ route, url, _key, label, ...rest }) => {
                    const href = !route ? url : `/${route}`;
                    const currentPath = !!route && paths[0] === route;
                    let linkUrl = href ? href : '#';
                    if(rest.current){
                        linkUrl = `${linkUrl}/${rest.current.route}`;
                    }
                    return (
                        <Link
                            href={linkUrl}
                            key={_key}
                            {...(!route && {
                                target: "_blank",
                                rel: "noopener noreferrer"
                            })}
                        >
                            <Typography 
                                variant="button"
                                color={!currentPath ? "secondary" : "primary"}
                            >
                                {label}
                            </Typography>
                        </Link>
                    )
                })}
            </Box>
            {paths[0] === routeWithSubmenu && (
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                    }}
                >
                    {submenuArray.map(({ label, route }) => {
                        const isAnExhibition = exhibitionSlugs.includes(paths[1]); 
                        const exhibition = isAnExhibition ? exhibitionMin.find(({ slug }) => slug === paths[1]) : null;
                        const isPastExhibition = exhibition && checkDateIsInPast(exhibition.endDate); 
                        const currentPath = paths[1] === route || isPastExhibition;
                        const grayOutCurrent = route === EXHIBITION_ROUTES.CURRENT && isPastExhibition;
                        let color = !currentPath ? "secondary" : "primary";
                        if (
                            exhibition
                            && !checkDateIsInPast(exhibition.endDate)
                            && route === EXHIBITION_ROUTES.CURRENT
                        ) {
                            color = "primary";
                        }
                        if (grayOutCurrent){
                            color = "secondary"
                        }
                        return (
                            <Link
                                href={`/${routeWithSubmenu}/${route}`}
                                key={route}
                            >
                                <Typography
                                    variant="button"
                                    color={color}
                                >
                                    {label}
                                </Typography>
                            </Link>

                        )
                    })}
                </Box>
            )}
        </AppBar>
    );
}

export default NavMenu;