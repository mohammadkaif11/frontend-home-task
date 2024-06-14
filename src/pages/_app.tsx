import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import logo from "../logo.svg";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="text-center bg-[#b9e3bd] h-[100vmin]">
      <header className="min-h-[10vh] flex flex-col items-center justify-center text-[calc(10px_+_2vmin)] text-[white]">
        <Image
          src={logo}
          alt="logo"
          className="h-[4vmin] pointer-events-none"
        />
      </header>
      <Component {...pageProps} />
    </div>
  );
}
