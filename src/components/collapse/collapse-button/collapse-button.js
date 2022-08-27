import React from 'react';

function CollapseButton(props) {
  return (
    <a className='btn btn-primary'
      data-toggle='collapse'
      href={`#${props.id}`}
      role='button'
      aria-expanded={props.expanded}
      aria-controls={props.id}
      onClick={props.onClick}>
      {props.expanded ? 'Collapse' : 'Expand'}
    </a>
  );
}

export default CollapseButton;