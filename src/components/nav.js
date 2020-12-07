import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledNav = styled.nav`
  margin-bottom: 1.5rem;
  border-bottom: 0.15rem solid var(--black);
`;

const StyledUl = styled.ul`
  display: flex;
`;

const StyledLi = styled.li`
  padding-right: 2rem;
  line-height: 3rem;
`;

export default function Nav() {
  return (
    <StyledNav>
      <StyledUl role="menu">
        <StyledLi>
          <Link to="/">Blog</Link>
        </StyledLi>
        <StyledLi>
          <Link to="/collection">Collection</Link>{" "}
        </StyledLi>
        <StyledLi>
          <Link to="/wantlist">Wantlist</Link>{" "}
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
}
