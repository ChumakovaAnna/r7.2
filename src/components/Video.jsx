import React from 'react';

export default function Video(props) {
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
