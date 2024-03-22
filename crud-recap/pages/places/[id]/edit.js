import { useRouter } from "next/router";
import Link from "next/link";
import Form from "@/components/PlaceCard/Form";

export default function EditPage({ places, handleEditPlace }) {
  const router = useRouter();
  const { id } = router.query;

  const foundPlace = places.find((place) => place.id === id);

  if (!foundPlace) return null;

  // console.log("newPlace: ", newPlace);

  return (
    <>
      <Form onSubmit={handleEditPlace} defaultData={foundPlace} isEditMode />
      <Link href="/">Back to Homepage</Link>
    </>
  );
}
