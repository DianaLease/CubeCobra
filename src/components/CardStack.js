/* eslint-disable react/prop-types */
import React from 'react';
import { useDrop } from 'react-dnd';

import { Col } from 'reactstrap';

function CardStack({ location, children, ...props }) {
  const [{ isAcceptable }, drop] = useDrop({
    accept: 'card',
    drop: (item, monitor) => (monitor.didDrop() ? undefined : location),
    canDrop: () => true,
    collect: (monitor) => ({
      isAcceptable: !!monitor.isOver({ shallow: true }) && !!monitor.canDrop(),
    }),
  });

  let className = 'mt-3 col-md-1-5 col-lg-1-5 col-xl-1-5 col-low-padding';
  if (isAcceptable) {
    className += ' outline';
  }

  return (
    <Col className={className} xs={3} {...props}>
      <div ref={drop}>
        {!Array.isArray(children) ? (
          ''
        ) : (
          <div className="w-100 text-center mb-1">
            <b>{children.length > 0 ? children.length : ''}</b>
          </div>
        )}
        <div className="stack">{children}</div>
      </div>
    </Col>
  );
}

export default CardStack;
