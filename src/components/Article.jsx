import React from 'react';
import PropTypes from 'prop-types';

Article.propTypes = {
  index: PropTypes.number,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
};

function Article(props) {
  /* eslint-disable */
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{props.title}</a>
      </h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  );
}

export default Article;
