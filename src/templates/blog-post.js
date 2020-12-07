import React from "react";
import { Link, graphql } from "gatsby";
import kebabCase from "lodash/kebabCase";
import styled from "styled-components";

const PostGrid = styled.section`
  @media screen and (max-width: 1023px) {
    max-width: 650px;
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 650px 1fr;
    grid-template-rows: 1fr;
    gap: 0 2rem;
    grid-template-areas: ". .";
  }
`;

const StyledArticle = styled.article`
  p {
    line-height: 1.75rem;
    margin: 1rem 0;
  }
  img {
    border-radius: 5px;
  }
`;

const StyledAside = styled.aside`
  li {
    list-style: none;
    line-height: 1.75rem;
  }
`;

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <>
      <PostGrid>
        <StyledArticle>
          <h2>{post.frontmatter.title}</h2>
          <small>{post.frontmatter.date}</small>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </StyledArticle>
        <StyledAside>
          <h3>Filed Under</h3>{" "}
          <ul>
            {" "}
            {post.frontmatter.tags.map(tag => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </StyledAside>
      </PostGrid>
    </>
  );
}

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`;
