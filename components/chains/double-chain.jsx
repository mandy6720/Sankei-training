'use strict'

/* Third party libs */
import PropTypes from 'prop-types'
import React from 'react'

const DoubleChain = (props) => {
  const {
    children = [],
    customFields = {},
    id,
  } = props;
  const col_one_count = customFields.columnOne
  const layout = customFields.layout

  const getClassName = (layout, column) => {
    switch (layout) {
      case 'even-width':
        return 'col-lg-6';
      case 'wide-left':
        if (column === 'col_one') {
          return 'col-lg-8';
        }
        return 'col-lg-4';
      case 'wide-right':
        if (column === 'col_one') {
          return 'col-lg-4';
        }
        return 'col-lg-8';
      default:
        return
    }
  }


return (
  <div className={`double_chain | default row`} id={id}>
    <div className={`col_one ${getClassName(layout, 'col_one')}`}>
      {children.map((feature, index) => {
        return (index < col_one_count) ? feature : ''
      })}
    </div>
    <div className={`col_two ${getClassName(layout, 'col_two')}`}>
      {children.map((feature, index) => {
        return (index >= col_one_count) ? feature : ''
      })}
    </div>
  </div>

)
}

DoubleChain.propTypes = {
  id: PropTypes.string.isRequired,
  customFields: PropTypes.shape({
    layout: PropTypes
      .oneOf([
        'even-width',
        'wide-left',
        'wide-right'
      ]).tag({
        name: 'Layout',
        labels: {
          'even-width': 'Even Width',
          'wide-left': 'Wide Left',
          'wide-right': 'Wide Right'
        }
      }),
    columnOne: PropTypes.number.tag({
      name: 'Number of features in column one?',
      description: 'Enter the number of features to go in the first column. The rest will go in the second'
    }).isRequired,
  }),
};

export default DoubleChain
