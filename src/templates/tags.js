import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

const StyledUl = styled.ul`
  li {
    list-style: none;
    line-height: 1.75rem;
  }
`;

export default function Tags({ pageContext, data }) {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;
  return (
    <section>
      <h2>{tagHeader}</h2>
      <StyledUl>
        {edges.map(({ node }) => {
          const { slug } = node.fields;
          const { title } = node.frontmatter;
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        })}
      </StyledUl>
      <Link to="/tags">All tags</Link>
    </section>
  );
}

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
