import { useRouter } from "next/router";
import Link from "next/link";
import Form from "@/components/PlaceCard/Form";

export default function EditPage({ places, handleEditPage }) {
  const router = useRouter();
  const { id } = router.query;

  const newPlace = places.find((place) => place.id === id);

  if (!newPlace) return null;

  console.log("newPlace: ", newPlace);

  return (
    <>
      <Form onSubmit={handleEditPage} defaultData={newPlace} />;
      <Link href="/">Back to Homepage</Link>
    </>
  );
}
