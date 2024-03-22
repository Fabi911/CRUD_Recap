import { useRouter } from "next/router";
import styled from "styled-components";

const Label = styled.label`
  font-weight: bold;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Form({ onSubmit }) {
  const router = useRouter();

  function handleSubmit(event) {
    onSubmit(event);
    router.push("/");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <input type="text" id="name" name="name" />
      <Label htmlFor="location">Location</Label>
      <input type="text" id="location" name="location" />
      <Label htmlFor="description">Description</Label>
      <input type="text" id="description" name="description" />
      <Label htmlFor="mapURL">MapURL</Label>
      <input type="text" id="mapURL" name="mapURL" />
      <Label htmlFor="image">Image</Label>
      <input type="text" id="image" name="image" />
      <button type="submit">Submit</button>
    </StyledForm>
  );
}
