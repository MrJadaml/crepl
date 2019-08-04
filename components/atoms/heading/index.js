import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Heading = ({ children, type, ...rest }) => {
  const HeadingType = type;

  return (
    <HeadingType className={styles[`${type}`]} {...rest}>
      {children}
    </HeadingType>
  )
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

Heading.defaultProps = {
  type: 'h1',
};

export default Heading;
