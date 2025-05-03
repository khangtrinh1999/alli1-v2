// app/layout.tsx
import "../globals.css";
import { ReactNode } from "react";
import Header from "@/components/ui/header/header";
import SideBar from "@/components/ui/sidebar/sidebar";
import { Geist, Geist_Mono } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative">
          <div className="fixed top-0 left-0 w-full ">
            <Header></Header>
            <SideBar></SideBar>
          </div>

          <div className="p-4 pl-[69px] pt-[69px] w-full h-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
