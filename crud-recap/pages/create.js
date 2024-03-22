import Link from "next/link";
import Form from "@/components/PlaceCard/Form";

export default function CreatePage({ handleAddPlace }) {
  return (
    <>
      <Form onSubmit={handleAddPlace} />
      <Link href="/">Back to Homepage</Link>
    </>
  );
}
