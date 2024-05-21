import { Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import "./globals.css";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Keiru Dev",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="forest">
      <body className={inter.className}>
        <nav>
            <Navigation/>
        </nav>
        {children}

        <Footer/>
      </body>
    </html>
  );
}
