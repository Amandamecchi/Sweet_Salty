import React from "react";
import { Roboto } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";

const font = Roboto ({
  variable: "--font",
  subsets: ["latin"],
});

export const metadata = {
    title: "SweetSalty",
    icons: {
    icon: "/icons/restaurant.png",
  },
    description: "Projeto Final - Desenvolvimento Full Stack (front-end + back-end) | Website sobre Receitas Culinárias",

};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={font.variable}>
                <Header />
                {children}
            </body>
        </html>
    );
}
