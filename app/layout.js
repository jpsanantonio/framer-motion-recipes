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
          <hr className="bg-slate-900 top-12 border-0 w-screen h-[1px] absolute left-0" />
          <hr className="bg-slate-900 top-14 border-0 w-screen h-[1px] absolute left-0" />
          <hr className="bg-slate-900 bottom-12 border-0 w-screen h-[1px] absolute left-0" />
          <div className="relative w-1/3 px-4 pt-4 flex flex-col justify-center border-x-slate-900 border-x">
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
