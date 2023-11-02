import React from 'react';
import PropTypes from 'prop-types';
import Video from './Video';
import Article from './Article';
import filter from './filter';

List.propTypes = {
  list: PropTypes.array.isRequired,
};

function List(props) {
  return props.list.map((item, index) => {
    let ItemFilter = null;
    switch (item.type) {
      case 'video':
        ItemFilter = filter(Video);
        break;
      case 'article':
        ItemFilter = filter(Article);
        break;
      default:
    }

    return <ItemFilter key={index} {...item} index={index}></ItemFilter>;
  });
}

export default List;
