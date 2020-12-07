import styled from "styled-components";

export const StyledH2 = styled.h2`
  margin-bottom: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(1fr);
  gap: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 0.15rem solid var(--black);
  @media (min-width: 416px) and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: ". .";
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: ". . .";
  }
`;

export const GridItem = styled.div`
  padding: 1rem;
  border: 3px solid var(--black);
`;

export const Pagination = styled.div`
  text-align: center;
  @media (min-width: 368px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
`;
