import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import styled from 'styled-components';
import './reset.css';

const WrapperBody = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Open Sans', sans-serif;
  color: #545454;
`;

const TemplateWrapper = ({ children }) => (
  <WrapperBody>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>
      {children()}
    </div>
  </WrapperBody>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
