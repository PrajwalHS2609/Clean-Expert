import { Merriweather } from "next/font/google";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./../components/NavBar/NavBar";
import Footer from "./../components/Footer/Footer";

const merri = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={merri.className}>
      <head>
        <link rel="icon" type="image/png" href="./favIcon.png" />
      </head>
      <body style={{ backgroundColor: "var(--customColor3)" }}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
