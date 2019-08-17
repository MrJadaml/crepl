import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export const Button = ({ children, ...rest }) => (
  <button {...rest} className={styles.button}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
