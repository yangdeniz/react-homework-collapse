import React, { useState } from 'react';
import CollapseButton from './collapse-button/collapse-button';
import CollapseArea from './collapse-area/collapse-area';

function Collapse(props) {
  const [expanded, setExpanded] = useState(false);
  const id = 'collapse_area';

  const toggle = () => setExpanded(prev => !prev);

  return (
    <>
      <p>
        <CollapseButton id={id} expanded={expanded} onClick={toggle} />
      </p>
      <CollapseArea id={id} expanded={expanded}>
        {props.children}
      </CollapseArea>
    </>
  );
}

export default Collapse;