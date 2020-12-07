import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <h1 style={{ color: "white", marginRight: "15px" }}>Project Repo</h1>
      <a
        className="github-link"
        href="https://github.com/Rayhan1998/Ecommerce"
        target="_blank"
      >
        <i className="fab fa-github" style={{ fontSize: "60px" }}></i>
      </a>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  background: var(--mainBlue);
  height: 150px;
  display: flex;

  justify-content: center;
  align-items: center;

  .github-link {
    text-decoration: none;
    color: white;
  }
`;
