import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export const Picture = ({ sources, src, ...rest }) => {
  return (
    <picture className={styles.picture}>
      {sources.map(({ media, srcset }) => (
        <source
          srcset={srcset}
          media={media}
          className={styles.source}
        />
      ))}

      <img
        src={src}
        className={styles.image}
      />
    </picture>
  );
};

Picture.propTypes = {
  sources: PropTypes.array,
  src: PropTypes.string.isRequired,
};

Picture.defaultProps = {
  sources: [],
};
