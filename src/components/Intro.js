import React from 'react';

const Intro = props => {
  const intro = props.intro;
  const introImageClasses = `intro-image ${intro.frontmatter.intro_image_absolute && 'intro-image-absolute'}
    ${intro.frontmatter.intro_image_hide_on_mobile && 'intro-image-hide-mobile'}`;

  return (
    <div className="intro">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-12 col-md-7 col-lg-6 order-2 order-md-1">
            <h1>CUSTOMER ENGAGEMENT REIMAGINED</h1>
            <p>Sales automation comes to the automotive retail industry</p>
            <button type="button" className="text-white btn btn-primary-button rounded-pill">
              Learn More
            </button>
          </div>
          <div className="col-12 col-md-5 col-lg-6 order-1 order-md-2 position-relative">
            <img alt={intro.frontmatter.title} className={introImageClasses} src={intro.frontmatter.intro_image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
