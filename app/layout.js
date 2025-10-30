import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PTCL Hello To The Future"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar/>
      <body
    
      >
        {children}
      </body>
      <Footer/>
    </html>
  );
}
