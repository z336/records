import React from "react";
import styled from "styled-components";
import "normalize.css";
import "../styles/global.scss";
import "../styles/typography.scss";
import Nav from "./nav";
import Header from "./header";
import Footer from "./footer";

const SiteContainer = styled.div`
  max-width: 1024px;
  min-height: calc(100vh - 10rem);
  margin: 0 auto 0 auto;
  padding: 1rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <SiteContainer>
        <Header />
        <Nav />
        {children}
      </SiteContainer>
      <Footer />
    </>
  );
}
