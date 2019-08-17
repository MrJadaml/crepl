import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export const Link = ({ children, href, ...rest }) => {
  return (
    <a
      href={href}
      className={styles.link}
      {...rest}
    >
      {children}
    </a>
  )
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

Link.defaultProps = {
};
