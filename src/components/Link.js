import React from 'react';

const Link = ({ url, children }) => (
  <a href={url} target="_blank">{children}</a>
);

export default Link;
