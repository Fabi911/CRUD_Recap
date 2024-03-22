import GlobalStyle from "../styles";
import { initialPlaces } from "@/lib/db";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
