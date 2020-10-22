import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Call from '../components/Call';
import Intro from '../components/Intro';
import Mobile from '../components/Mobile';
import Dashboard from '../components/Dashboard';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';

const Home = props => {
  const intro = props.data.intro;
  const site = props.data.site.siteMetadata;
  const features = props.data.features.edges;

  return (
    <Layout bodyClass="page-home">
      <SEO title={site.title} />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>

      <Intro intro={intro} />
      <div className="border-top my-3" id="features" />
      <Mobile />
      <div className="border-top my-3" />
      <Dashboard />
      <div className="border-top my-3" />
      <Features features={features} />
      <div className="border-top my-3" id="about_us" />
      <AboutUs />
      <div className="border-top my-3" id="contact_us" />
      <ContactUs />
    </Layout>
  );
};

export const query = graphql`
  query {
    services: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/services/.*/" } }, sort: { fields: [frontmatter___weight], order: ASC }, limit: 6) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    intro: markdownRemark(fileAbsolutePath: { regex: "/content/index.md/" }) {
      html
      frontmatter {
        image
        intro_image
        intro_image_absolute
        intro_image_hide_on_mobile
        title
      }
    }
    features: allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Home;
