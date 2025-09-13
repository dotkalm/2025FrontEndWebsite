# Responsive Layout System

This system preserves the margin and mobile trigger logic from the previous Django site.

## What Was Extracted

### From `styles.less`:

1. **Body Padding Logic**:
   - Desktop: `padding: 12px 64px 60px 64px`
   - Mobile: `padding: 12px 25px 60px 25px`

2. **Breakpoints** (Bootstrap-based):
   - Mobile: `@screen-xs-max` (480px)
   - Tablet: `@screen-sm` (768px)
   - Desktop: `@screen-md` (992px)
   - Large: `@screen-lg` (1200px)

3. **Layout Patterns**:
   - Detail layout with meta sidebar (300px) and content area
   - Responsive spacing for navigation, lists, headers
   - Logo positioning patterns

4. **Spacing System**:
   - Navigation margins: 40px bottom
   - List item spacing: 35px between items
   - Header margins: 50px bottom on tablet+
   - Content spacing: 30px top on mobile

## Usage

### Main Layout Container
```tsx
import MainLayout from '@components/MainLayout';

// Automatically applies the body padding logic from the previous site
<MainLayout>
  {children}
</MainLayout>
```

### Detail Layout Pattern
```tsx
import DetailLayout from '@components/DetailLayout';

// Two-column layout that collapses on mobile
<DetailLayout metaContent={<SidebarContent />}>
  <MainContent />
</DetailLayout>
```

### Responsive Utilities
```tsx
import { mediaQueries, spacing } from '@theme/responsiveLayout';

const styles = {
  container: {
    marginBottom: spacing.navBottom,
    [mediaQueries.mobile]: {
      padding: '20px',
    },
    [mediaQueries.desktop]: {
      padding: '40px',
    },
  },
};
```

### Theme Integration
The responsive values are integrated into the Material UI theme:
```tsx
const theme = useTheme();
// Access custom spacing: theme.customSpacing
// Access media queries: theme.mediaQueries
```

## Files Structure

- `src/theme/responsiveLayout.ts` - Core responsive logic and values
- `src/components/MainLayout/` - Main container with body padding
- `src/components/DetailLayout/` - Two-column responsive layout
- `src/app/globals.css` - Global styles adapted from previous site

This preserves the visual consistency and responsive behavior of the original Django site while adapting it to the Next.js + Material UI architecture.
