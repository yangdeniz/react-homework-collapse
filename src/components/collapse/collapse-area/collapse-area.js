import React, { useEffect, useRef } from 'react';

function CollapseArea(props) {
  const collapseAreaRef = useRef();

  const setHeight = () => {
    let height = 0;
    for (const item of collapseAreaRef.current.children) {
      height += item.offsetHeight;
    }
    collapseAreaRef.current.style.height = props.expanded ? height + 'px' : '0px';
  }

  useEffect(setHeight);

  return (
    <div ref={collapseAreaRef} className={'collapse' + (props.expanded ? ' show' : '')} id={props.id}>
      {props.children}
    </div>
  )
}

export default CollapseArea;