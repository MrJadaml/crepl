import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export const Input = ({ type, ...rest }) => {
  return (
    <input
      type={type}
      className={styles.input}
      {...rest}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
};
