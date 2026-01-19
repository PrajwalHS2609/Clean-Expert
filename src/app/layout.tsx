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
import WhatsApp from './../components/WhatsApp/WhatsApp';
import Script from "next/script";
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
        <meta name="google-site-verification" content="HB8Fb5pElFDLcAuCFjaqSH7QqvC05IEMD52NGQuPO_M" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QJMDDEKF85"></script>
        <script>
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QJMDDEKF85');`}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Prime Clean ",
            "image": "https://primecleanco.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.71430d74.png&w=3840&q=75",
            "description": "Say goodbye to mediocre cleaning that never meets your expectations. It’s time to upgrade your space with Prime Clean’ premium deep cleaning services. Our skilled cleaning professionals take on even the toughest grime, transforming your home or workplace into a spotless, revitalized environment. Don’t compromise on cleanliness — choose Prime Clean and experience the remarkable difference of truly professional deep cleaning.At Prime Clean, we go beyond basic cleaning — we create living spaces that are spotless, healthy, and welcoming. As one of Bangalore’s most trusted home service providers, we offer a complete range of solutions designed to elevate the comfort and cleanliness of your home.",
            "brand": {
              "@type": "Thing",
              "name": "Prime Clean"
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Rishi"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "2792"
            }

          })}</script>

        <Script
          id="google-ads-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {
                'send_to': 'AW-17441114317/vVPECIDiwc4bEM2RyfxA'
              });
            `,
          }}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17441114317');
    `,
          }}
        />
      </head>
      <body >
        {isPaintLanding ? <LpPaintNavbar /> : <NavBar />}
        {loading ? <Loader /> : children}
        {isPaintLanding ? <LpPaintFooter /> : <Footer />}
        <PopupForm />
        <WhatsApp />
      </body>
    </html>
  );
}
