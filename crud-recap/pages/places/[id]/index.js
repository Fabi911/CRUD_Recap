import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function DetailPage({ places }) {
  const router = useRouter();
  const { id } = router.query;
  const placeDetail = places.find((place) => place.id === id);
  /* console.log("Place: ", place); */
  /* if (!place) return null; */

  return (
    <section>
      <h2>{placeDetail.name}</h2>
      <Image
        alt={placeDetail.name}
        src={placeDetail.image}
        width={200}
        height={200}
      ></Image>

      <p>{placeDetail.location}</p>
      <p>{placeDetail.description}</p>
      <Link href={placeDetail.mapURL}>Map URL</Link>
      <Link href="/">Back to Homepage</Link>
    </section>
  );
}
