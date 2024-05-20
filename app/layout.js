import { Inter } from "next/font/google";
import "./css/globals.css";
import "./css/observer.css";
import { NavbarDefault } from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sport Club Time ASD",
  description: "Sport Club Time ASD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NavbarDefault />
        <div className=" min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
