import React from 'react';
import PropTypes from 'prop-types';

Video.propTypes = {
  index: PropTypes.number,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
};

function Video(props) {
  return (
    <div className="item item-video">
      <iframe
        title={`iframe${props.index}`}
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  );
}

export default Video;
