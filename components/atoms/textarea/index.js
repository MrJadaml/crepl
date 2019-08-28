import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export const Textarea = ({ value, ...rest }) => {
  const handleChange = () => {
  };

  return (
    <textarea
      value={value}
      className={styles.textarea}
      onChange={handleChange}
      {...rest}>
    </textarea>
  );
};

Textarea.propTypes = {
  value: PropTypes.string,
};

Textarea.defaultProps = {
  value: '',
};
