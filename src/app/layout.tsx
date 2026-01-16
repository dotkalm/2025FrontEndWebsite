import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import LayoutWrapper from "@/theme/LayoutWrapper";

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
      <body
        style={{
          margin: 0,
          padding: 0,
          height: '101%',
          overscrollBehaviorY: 'none',
          overscrollBehavior: 'none',
          overflowY: 'auto',
          overflowX: 'hidden',
          background: 'linear-gradient(135deg, rgba(205, 200, 240, 1) 0%, rgba(245, 240, 235, 1) 50%, rgba(250, 245, 200, 1) 100%)',
        }}>
        <LayoutWrapper>
          {children}
          <Analytics />
        </LayoutWrapper>
      </body>
    </html>
  );
}
