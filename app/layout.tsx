import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/haeder/haeder";
import Stars from "./components/stars/stars";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className={inter.className}>
        <Header />
        <div className={"notice"}>
          <Stars />
          <div className="bg-white fixed left-2 top-[110px] z-10 w-[9%] h-[600px] hidden sm:inline">광고 사이드 배너</div>
          <div className="bg-white fixed right-2 top-[110px] z-10 w-[9%] h-[600px] hidden sm:inline">광고 사이드 배너</div>
          {children}
          <div className=" flex items-center justify-center">
            <div className="fixed w-[100%] h-[120px] bg-violet-600 sm:w-[500px] md:w-[700px] ">광고배너</div>
          </div>
        </div>
      </body>
    </html>
  );
}
