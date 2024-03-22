import styled from "styled-components";
import Image from "next/image.js";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  background-color: #505050;
`;

const StyledImage = styled(Image)``;

export default function PlaceCard({ image, name, location }) {
  return (
    <StyledSection>
      <figcaption>{name}</figcaption>
      <p>Location: {location}</p>
      <figure>
        <StyledImage
          src={image}
          alt={name}
          sizes="30vh"
          width={200}
          height={200}
        ></StyledImage>
      </figure>
    </StyledSection>
  );
}
