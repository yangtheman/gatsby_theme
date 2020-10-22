import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const Footer = props => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allFooterMenuJson {
        edges {
          node {
            weight
            url
            name
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="footer mt-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img height="36px" alt="KarFarm Logo" src="../../images/logo/logo.png" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-center">© 2020 KarFarm Inc. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
