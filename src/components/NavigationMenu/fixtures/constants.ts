import { type NavigationMenu } from "@/types";   

export const navigationFixtures: NavigationMenu= {
    _id: 'navigationMenu',
    title: 'Navigation',
    items: [
        {
            route: 'artists',
            linkType: 'artist',
            label: 'Artists',
            _key: '4ae748feb0e5',
            _type: 'menuItem',
        },
        {
            route: 'exhibitions',
            linkType: 'exhibitions',
            label: 'Exhibitions',
            _key: '41d537999357',
            _type: 'menuItem',
            current: { label: 'Current', route: 'current' },
            past: { label: 'Past', route: 'past' }
        },
        {
            route: 'news',
            linkType: 'news',
            label: 'News',
            _key: '3e53d3d6bd83',
            _type: 'menuItem',
        },
        {
            route: 'fairs',
            linkType: 'fairs',
            label: 'Fairs',
            _key: '34562ac11a3a',
            _type: 'menuItem',
        },
        {
            url: 'https://shopify.com/',
            linkType: 'shop',
            label: 'Shop',
            _key: '07cff99d1df3',
            _type: 'menuItem',
        },
        {
            route: 'info',
            linkType: 'gallery',
            label: 'Info',
            _key: 'b1417c9c4d7e',
            _type: 'menuItem',
        }
    ]
};