import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Button = ({ children, ...rest }) => (
  <button {...rest} className={styles.button}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
