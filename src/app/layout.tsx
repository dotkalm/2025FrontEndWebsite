import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import LayoutWrapper from "@/theme/LayoutWrapper";
import Box from "@mui/material/Box";

export const metadata: Metadata = {
  title: "Joel Holmberg dot com",
  description: "archive of artworks by Joel Holmberg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Box component="body">
          <LayoutWrapper>
            {children}
            <Analytics />
          </LayoutWrapper>
        </Box>
    </html>
  );
}
