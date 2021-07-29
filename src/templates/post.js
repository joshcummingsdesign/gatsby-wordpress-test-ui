import React from 'react';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';
import { Layout } from '../components/layout';

export default function Post({ data }) {
  const post = data.wpPost;

  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div>{parse(post.content)}</div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PostQuery($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      date
      content
    }
  }
`;
