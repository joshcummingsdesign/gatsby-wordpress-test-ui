const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          id
          slug
        }
      }
    }
  `).then((result) => {
    result.data.allWpPost.nodes.forEach((node) => {
      createPage({
        path: node.slug,
        component: path.resolve('./src/templates/post.js'),
        context: {
          id: node.id,
        },
      });
    });
  });
};
