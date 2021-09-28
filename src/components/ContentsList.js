import React from 'react';
import Content from './Content';
import classes from './ContentsList.module.css';

const ContentList = (props) => {
  return (
    <ul className={classes['contents-list']}>
      {props.contents.map((content) => (
        <Content
          key={content.id}
          title={content.title}
          releaseDate={content.releaseDate}
          openingText={content.openingText}
          photo={content.photo}
        />
      ))}
    </ul>
  );
};

export default ContentList;
