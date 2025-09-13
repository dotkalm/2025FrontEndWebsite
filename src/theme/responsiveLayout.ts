// Responsive layout utilities extracted from the previous Django site
// Keeping the margin and mobile trigger logic from the previous site
export const breakpoints = {
  // Bootstrap equivalent breakpoints from the previous site
  xs: 480,   // @screen-xs-max in Bootstrap
  sm: 768,   // @screen-sm in Bootstrap  
  md: 992,   // @screen-md in Bootstrap
  lg: 1200,  // @screen-lg in Bootstrap
} as const;

// Body padding logic from the previous site
export const bodyPadding = {
  // From the original: padding: 12px 64px 60px 64px (top, right, bottom, left)
  desktop: {
    top: 12,
    right: 64,
    bottom: 60,
    left: 64,
  },
  // From the original: padding: 12px 25px 60px 25px
  mobile: {
    top: 12,
    right: 25,
    bottom: 60,
    left: 25,
  },
} as const;

// Layout margins and spacing patterns from the previous site
export const spacing = {
  // Navigation and content spacing
  navBottom: 40,           // #main-nav margin-bottom
  listItemBottom: 35,      // .exhibition-list > li margin-bottom
  detailContentTop: 30,    // .detail-content margin-top on mobile
  newsItemBottom: 50,      // .news-item margin-bottom
  homepageAnnouncement: {
    mobile: 20,            // .homepage-announcement margin-bottom
    desktop: 80,           // .homepage-announcement margin-bottom on @screen-md+
  },
  headerBottom: 50,        // h1 margin-bottom on @screen-sm+
} as const;

// Logo positioning from the previous site
export const logoPosition = {
  desktop: {
    bottom: 20,
    left: 29,
  },
  mobile: {
    bottom: 20,
    left: 24,
  },
} as const;

// Media query helpers that match the previous site's breakpoint logic
export const mediaQueries = {
  // Fixed: Your mobile query should be based on small breakpoint, not xs
  mobile: `@media (max-width: ${breakpoints.sm - 1}px)`,     // Mobile-first: up to 767px
  tablet: `@media (min-width: ${breakpoints.sm}px)`,         // Tablet: 768px and up
  desktop: `@media (min-width: ${breakpoints.md}px)`,        // Desktop: 992px and up
  large: `@media (min-width: ${breakpoints.lg}px)`,          // Large: 1200px and up
  
  // Specific ranges
  mobileOnly: `@media (max-width: ${breakpoints.sm - 1}px)`,  // Mobile only: up to 767px
  tabletOnly: `@media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md - 1}px)`, // Tablet only: 768-991px
  
  // Additional useful queries
  smallScreen: `@media (max-width: ${breakpoints.xs}px)`,     // Very small screens: up to 480px
  mediumUp: `@media (min-width: ${breakpoints.md}px)`,       // Medium screens and up: 992px+
} as const;

// CSS-in-JS styles for the main layout container
export const layoutStyles = {
  // Main body/container padding that matches the previous site
  container: {
    background: 'white',
    // Fixed: Use desktop media query for desktop padding
    [mediaQueries.desktop]: {
      padding: `${bodyPadding.desktop.top}px ${bodyPadding.desktop.right}px ${bodyPadding.desktop.bottom}px ${bodyPadding.desktop.left}px`,
    },
    // Use mobile query for mobile padding
    [mediaQueries.mobile]: {
      padding: `${bodyPadding.mobile.top}px ${bodyPadding.mobile.right}px ${bodyPadding.mobile.bottom}px ${bodyPadding.mobile.left}px`,
    },
    // Add tablet fallback
    [mediaQueries.tabletOnly]: {
      padding: `${bodyPadding.desktop.top}px ${bodyPadding.desktop.right}px ${bodyPadding.desktop.bottom}px ${bodyPadding.desktop.left}px`,
    },
  },
  
  // Detail layout pattern from the previous site
  detailLayout: {
    '&::after': {
      content: '""',
      display: 'table',
      clear: 'both',
    },
    [mediaQueries.desktop]: {
      '& .meta-content': {
        float: 'left',
        width: '300px',
      },
      '& .detail-content': {
        float: 'left',
        width: 'calc(100% - 364px)',
      },
    },
    [mediaQueries.mobileOnly]: {
      '& .detail-content': {
        marginTop: `${spacing.detailContentTop}px`,
      },
    },
  },
} as const;