import { Footer } from "@/components/layout/Footer";
import { ProvidersAggrergator } from "@/lib/ProvidersAggrergator";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const alataRegular = localFont({
  src: "./fonts/Alata-Regular.ttf",
  variable: "--font-alata-regular",
  weight: "400",
  preload: true,
});
const montserrat = localFont({
  src: [
    {
      path: "./fonts/Montserrat-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/Montserrat-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/Montserrat-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-montserrat",
  preload: true,
});

export const metadata: Metadata = {
  title: "My daily dashboard",
  description: "Get an overview on your day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: ADD QUERY CLIENT
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${alataRegular.variable}`}>
        <ProvidersAggrergator>
          {children}
          <Footer />
        </ProvidersAggrergator>
      </body>
    </html>
  );
}
