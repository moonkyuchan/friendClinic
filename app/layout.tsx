import type { Metadata } from "next";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/css/theme";

import Header from "@/app/_components/header/Header";
import Hedaer2 from "@/app/_components/header/Header copy";
import Footer from "app/_components/footer/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <body>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Hedaer2 />
            {/* <Header /> */}
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
