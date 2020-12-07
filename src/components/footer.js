import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 6rem;
`;

const FooterContainer = styled.div`
  max-width: 1024px;
  margin: 1rem auto;
  padding-top: 3rem;
  text-align: center;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <p>© {new Date().getFullYear()}</p>
      </FooterContainer>
    </StyledFooter>
  );
}
