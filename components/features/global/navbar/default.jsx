import React from 'react';
import PropTypes from 'prop-types';
import { useComponentContext } from 'fusion:context';
import { useContent } from 'fusion:content';

const NavBar = (props) => {
  const navLinks = useContent({
    source: props.customFields.contentSource,
    filter: `{ children { _id name } }`,
  });

  const renderLinks = (arr) => {
    return arr.map(item => <a href={item._id}>{item.name}</a>);
  }

  return (
    <>
      {navLinks && navLinks.children ? renderLinks(navLinks.children) : <div>No data</div>}
    </>
  );
}

NavBar.propTypes = {
  customFields: PropTypes.shape({
    contentSource: PropTypes.oneOf([
      'site-menu',
      'content-api',
    ])
  }),
};

export default NavBar;
