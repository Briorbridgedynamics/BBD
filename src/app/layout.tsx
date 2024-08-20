import type { Metadata } from "next";

import "./globals.css";
import { Navbar } from "@/components/navbar";
import BBD from "@/../../public/logo/BBD.png"




export const metadata: Metadata = {
  title: "Brior Bridge Dynamics",
  description: "NextGen Digital Marketing Company",
  icons: {
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4']
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar></Navbar>
        </div>
        <main className="bg-primary" >{children}</main>
      </body>
    </html>
  );
}
