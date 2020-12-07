import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const StyledHeader = styled.header`
  border-bottom: 0.25rem solid var(--black);
`;

const StyledH1 = styled.h1`
  font-size: 3.5rem;
  text-transform: uppercase;
`;

export default function Header() {
  const data = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <StyledHeader>
      <Link to="/">
        <StyledH1>{title}</StyledH1>
      </Link>
    </StyledHeader>
  );
}
