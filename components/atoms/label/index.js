import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export const Label = ({ children, htmlFor, ...rest }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={styles.label}
      {...rest}
    >
      {children}
    </label>
  )
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

Label.defaultProps = {
};
