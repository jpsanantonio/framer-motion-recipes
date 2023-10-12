import Nav from "./_components/Nav";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";

const robotMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Framer Motion Recipes",
  description: "Beautiful animations for React apps using Framer Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotMono.className} bg-slate-950 relative`}>
        <div className="w-10/12 flex mx-auto border-x-slate-900 border-x px-1">
          <div className="relative w-1/3 px-4 flex flex-col pt-36 border-x-slate-900 border-x">
            <h1 className="text-slate-50 text-xl font-medium">
              Framer Motion Recipes
            </h1>
            <Nav />
          </div>
          <div className="w-2/3">{children}</div>
        </div>
      </body>
    </html>
  );
}
