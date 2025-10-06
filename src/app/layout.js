import React from "react";
import { Poppins } from "next/font/google";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

const font = Poppins({
  weight: ['400', '600', '700'],
  variable: "--font",
  subsets: ["latin"],
});

export const metadata = {
    title: "SweetSalty",
    icons: {
        icon: "/icons/restaurant (1).png",
        shortcut: "/icons/restaurant (1).png",
        apple: "/icons/restaurant (1).png",
    },
    description: "Projeto Final - Desenvolvimento Full Stack (front-end + back-end) | Website sobre Receitas Culinárias",
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={font.variable}>
                <Header />
                {children}
                <ScrollToTop />
                <ToastContainer 
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </body>
        </html>
    );
}
