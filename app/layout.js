import { Inter } from "next/font/google";
import "./css/globals.css";
import "./css/observer.css";
import { NavbarDefault } from "@/components/nav";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sport Club Time ASD",
  description: "Affito Campi di Padel a Norbello",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NavbarDefault />
        <div className=" min-h-screen">{children}</div>
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
