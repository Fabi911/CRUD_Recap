import { useState } from "react";
import { initialPlaces } from "@/lib/db";
import PlaceCard from "@/components/PlaceCard/PlaceCard";
import styled from "styled-components";
import Link from "next/link";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export default function HomePage({ places }) {
  return (
    <div>
      <h1>Places</h1>
      <StyledUl>
        {places.map((place) => (
          <PlaceCard
            key={place.id}
            name={place.name}
            location={place.location}
            image={place.image}
          />
        ))}
      </StyledUl>
      <Link href="/create">+City</Link>
    </div>
  );
}
