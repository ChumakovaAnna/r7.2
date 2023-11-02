import React from 'react';
import PropTypes from 'prop-types';

Popular.propTypes = {
  children: PropTypes.node.isRequired,
};

function Popular(props) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  );
}

export default Popular;
