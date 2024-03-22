import GlobalStyle from "../styles";
import { initialPlaces } from "@/lib/db";
import { useState } from "react";
import { uid } from "uid";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [places, setPlaces] = useState(initialPlaces);

  function handleAddPlace(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log("data: ", data);

    // const id = data.id || uid();
    setPlaces([...places, { ...data, id: uid() }]);
    console.log("places:", places);
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} places={places} onSubmit={handleAddPlace} />
    </>
  );
}
