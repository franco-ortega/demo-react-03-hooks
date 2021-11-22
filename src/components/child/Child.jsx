import React from 'react'
import PropTypes from 'prop-types'

const Child = ({ numberOne, childWord}) => {
  return (
    <div>
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
