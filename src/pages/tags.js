import React from "react";
import { Link, graphql } from "gatsby";
import kebabCase from "lodash/kebabCase";
import styled from "styled-components";

const StyledUl = styled.ul`
  li {
    list-style: none;
    line-height: 1.75rem;
  }
`;

export default function TagsPage({
  data: {
    allMarkdownRemark: { group },
  },
}) {
  return (
    <>
      <section>
        <h2>All the things</h2>
        <StyledUl>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </StyledUl>
      </section>
    </>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
