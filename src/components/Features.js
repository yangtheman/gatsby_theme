import React from 'react';

const Features = props => {
  const features = props.features;

  return (
    <div className="features mt-3">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-12">
            <h1 className="text-center">Gain Access Over the Customer Experience</h1>
          </div>
        </div>

        {features.length > 0 && (
          <div className="strip">
            <div className="container pt-6 pb-6 pt-md-10 pb-md-10">
              <div className="row justify-content-center">
                {features.map(({ node }) => (
                  <div key={node.id} className="col-12 col-md-6 col-lg-4 mb-2">
                    <div className="feature">
                      {node.image && (
                        <div className="feature-image">
                          <img alt={node.title} src={node.image} />
                        </div>
                      )}
                      <h2 className="feature-title">{node.title}</h2>
                      <div className="feature-content">{node.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;
