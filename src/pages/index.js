import React from 'react';
import { graphql, Link } from 'gatsby';
import parse from 'html-react-parser';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';

export default function Home({ data }) {
  const posts = data.allWpPost.nodes;

  return (
    <Layout>
      <Seo title='Home' />
      {posts.map((post) => (
        <Link to={post.uri}>
          <h2 key={post.slug}>{post.title}</h2>
          <p>{post.date}</p>
          <div>{parse(post.excerpt)}</div>
        </Link>
      ))}
    </Layout>
  );
}

export const pageQuery = graphql`
  query PageQuery {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        uri
        slug
        title
        date
        excerpt
      }
    }
  }
`;
