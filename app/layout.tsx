import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import "./header.css";

export const metadata = {
  metadataBase: new URL("https://www.lib.miamioh.edu"),
  title: "Miami University Libraries Digital Collections",
  description: "MU Libraries Digital Collections Splash Page",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
