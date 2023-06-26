import React from 'react';
import { Link } from 'react-router-dom';

const GameContainerBox = ({ content }) => {
  const { data, url } = content;
  return (
    <Link to={url} className="box has-background-primary has-border-secondary has-text-white has-margin-2 is-inline-flex m-6 expand-on-hover" style={{ height: '300px', width: '250px' }}>
      {data}
    </Link>
  );
};

export default GameContainerBox;
