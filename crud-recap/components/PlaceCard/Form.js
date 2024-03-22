import { useRouter } from "next/router";
import styled from "styled-components";
import { uuid } from "uuid";

const Label = styled.label`
  font-weight: bold;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Form({ onSubmit, defaultData, isEditMode }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const id = defaultData.id || uuid();
    const placeData = { ...data, id };

    console.log("onSubmit: ", onSubmit);
    onSubmit(placeData);

    router.push("/");
  }

  return (
    <>
      <h2>{isEditMode ? "Edit" : "Add"} place</h2>
      <StyledForm onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={defaultData.name}
        />
        <Label htmlFor="location">Location</Label>
        <input
          type="text"
          id="location"
          name="location"
          defaultValue={defaultData.location}
        />
        <Label htmlFor="description">Description</Label>
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={defaultData.description}
        />
        <Label htmlFor="mapURL">MapURL</Label>
        <input
          type="text"
          id="mapURL"
          name="mapURL"
          defaultValue={defaultData.mapURL}
        />
        <Label htmlFor="image">Image</Label>
        <input
          type="text"
          id="image"
          name="image"
          defaultValue={defaultData.image}
        />
        <button type="submit">
          {isEditMode ? "Edit place" : "Add new place"}
        </button>
      </StyledForm>
    </>
  );
}
