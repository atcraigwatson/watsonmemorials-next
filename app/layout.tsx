import type { Metadata } from "next";
// import "./globals.css";
import "../styles/globals.scss";

import SiteNav from "@/components/siteNavbar/SiteNavbar";
import BootstrapClient from "@/components/BootstrapClient";

export const metadata: Metadata = {
  title: "Watson Memorials",
  description: "Creating Headstones, Memorials & Gravestones across the North East of England.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        {children}
        {/* @ts-expect-error this just keep throwing an error, when I can rectify without break the js I wil */}
        <BootstrapClient />
      </body>
    </html>
  );
}
