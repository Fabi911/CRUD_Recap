import GlobalStyle from "../styles";
import { initialPlaces } from "@/lib/db";
import { useState } from "react";
import { uid } from "uid";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [places, setPlaces] = useState(initialPlaces);
  const router = useRouter();

  function handleAddPlace(data) {
    console.log("data: ", data);

    // const id = data.id || uid();
    setPlaces([...places, { ...data, id: uid() }]);
    console.log("places:", places);
  }
  function handleDeletePlace(id) {
    setPlaces(places.filter((place) => place.id !== id));
    router.push("/");
  }

  // function handleEditPlace(newPlace) {
  //   setPlaces(
  //     places.map((place) => (place.id === newPlace.id ? newPlace : place))
  //   );
  // }

  function handleEditPlace(newPlace) {
    setPlaces(
      places.map(function (place) {
        if (place.id === newPlace.id) {
          return newPlace;
        } else {
          return place;
        }
      })
    );
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        places={places}
        handleAddPlace={handleAddPlace}
        handleDeletePlace={handleDeletePlace}
        handleEditPlace={handleEditPlace}
      />
    </>
  );
}
