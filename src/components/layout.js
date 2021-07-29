import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export const Layout = ({ children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
        }
      }
    }
  `);

  return (
    <>
      <header className='global-header'>
        <Link to='/'>{title}</Link>
      </header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}</footer>
    </>
  );
};
