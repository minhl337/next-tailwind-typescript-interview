import "@/styles/tailwind.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${interFont.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
