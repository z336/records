import React from "react";
import { Link, graphql } from "gatsby";
import { BlogContainer, SinglePost } from "../styles/Blog";

export default function Home({ data }) {
  const { posts } = data.blog;

  return (
    <>
      <BlogContainer>
        {posts.map(post => (
          <SinglePost key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <small>{post.frontmatter.date}</small>
            <p>{post.excerpt}</p>
          </SinglePost>
        ))}
      </BlogContainer>
    </>
  );
}

export const pageQuery = graphql`
  query PostsQuery {
    blog: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
        excerpt
        id
      }
    }
  }
`;
