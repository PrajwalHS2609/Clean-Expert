"use client";
import { Merriweather } from "next/font/google";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./../components/NavBar/NavBar";
import Footer from "./../components/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "./../components/Loader/Loader";
import PopupForm from "./../components/PopupForm/PopupForm";
import { usePathname } from "next/navigation";
import LpPaintNavbar from "./../components/LandingPage/PaintLandingPage/LpPaintNavbar/LpPaintNavbar";
import LpPaintFooter from "./../components/LandingPage/PaintLandingPage/LpPaintFooter/LpPaintFooter";
import "@/components/styles.css"
const merri = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isPaintLanding = pathname.startsWith("/lp-paint");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fake loading for animation effect
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <html lang="en" className={merri.className}>
      <head>
        <link rel="icon" type="image/png" href="./favicon.png" />
      </head>
      <body >
        {isPaintLanding ? <LpPaintNavbar /> : <NavBar />}
        {loading ? <Loader /> : children}
        {isPaintLanding ? <LpPaintFooter /> : <Footer />}
        <PopupForm />
      </body>
    </html>
  );
}
