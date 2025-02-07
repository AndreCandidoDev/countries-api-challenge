import "./globals.scss";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { AppProvider } from "@/context";
import { Header } from "@/components/header";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Countries API App",
  description: "Solution of countries api challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable}`}>
        <AppProvider>
          <Header/>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
