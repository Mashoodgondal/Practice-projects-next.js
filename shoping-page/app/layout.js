import { Inter } from "next/font/google";
import "./globals.css";

import Uper from "./(components)/uperHader/page";
import Hader from "./(components)/mainHader/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Uper />
        <Hader />
        {children}
      </body>
    </html>
  );
}
