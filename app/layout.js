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
      <body className={`${robotMono.className} bg-slate-950`}>
        <div className="w-3/4 mx-auto border-x-slate-900 border border-y-0 px-4 pt-4">
          <div className="flex flex-col">
            <h1 className="text-slate-50 text-xl font-medium">
              Framer Motion Recipes
            </h1>
            <Nav />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
