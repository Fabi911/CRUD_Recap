import Link from "next/link";
import Form from "@/components/PlaceCard/Form";

export default function CreatePage({ onSubmit }) {
  return (
    <>
      <Form onSubmit={onSubmit} />
      <Link href="/">Back to Homepage</Link>
    </>
  );
}
