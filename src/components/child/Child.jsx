import React from 'react';
import PropTypes from 'prop-types';
import styles from './Child.module.css';

const Child = ({ numberOne, childWord}) => {
  return (
    <div className={styles.Child}>
      CHILD COMPONENT
      <p>
        NUMBER ONE: {numberOne}
      </p>
      <p>
        WORD: {childWord}
      </p>
    </div>
  )
}

Child.propTypes = {
  numberOne: PropTypes.number.isRequired,
  childWord: PropTypes.string.isRequired
}

export default Child;
