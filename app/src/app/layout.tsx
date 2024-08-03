"use client";
import { useState, useEffect, createContext } from "react";
import { PT_Sans, PT_Serif } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IAppData, ILayoutAppContext } from "@/types";
import { fechCategories, fechCategoryArticles } from "@/http";
import "./globals.css";

const sans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
  display: "swap",
});
const serif = PT_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
  display: "swap",
});

const proximaNova = localFont({
  src: [
    {
      path: "../../public/fonts/ProximaNovaLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ProximaNovaBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-proxima",
  display: "swap",
});

export const AppContext = createContext<ILayoutAppContext>({
  setAppData: () => undefined,
  searchTerm: "",
  actualCategory: "",
  categoriesList: [],
  articlesSlider: [],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [appData, setAppData] = useState<IAppData>({
    searchTerm: "",
    actualCategory: "people",
    categoriesList: [],
    articlesSlider: [],
  });

  const appContextValue = {
    setAppData,
    searchTerm: appData.searchTerm,
    actualCategory: appData.actualCategory,
    categoriesList: appData.categoriesList,
    articlesSlider: appData.articlesSlider,
  };

  useEffect(() => {
    fechCategories().then((data) => {
      setAppData((prevState: IAppData) => {
        return { ...prevState, categoriesList: data.data };
      });
    });
  }, [appData.actualCategory]);

  useEffect(() => {
    fechCategoryArticles(appData.actualCategory).then((data) => {
      setAppData((prevState: IAppData) => {
        return { ...prevState, articlesSlider: data.data };
      });
    });
  }, [appData.actualCategory]);

  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} ${proximaNova.variable}`}
      >
        <AppContext.Provider value={appContextValue}>
          <Header />
          <main>{children}</main>
          <Footer />
        </AppContext.Provider>
      </body>
    </html>
  );
}
