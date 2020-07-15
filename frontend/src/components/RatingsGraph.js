import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './RatingsGraph.module.css';

const RatingsGraph = (props) => {
  const ratings = props.ratings;
  const [show, setShow] = useState(false);
  let max_val = 0;
  ratings.forEach((rating) => {
    max_val = Math.max(rating, max_val);
  });

  const colors = ['#f54242', '#f5a142', '#f5f542', '#9ef542', '#42f578'];
  if (props.reverse) colors.reverse();

  let columns = [];
  let indx = 0;
  ratings.forEach((rating) => {
    const height = 15 + (rating / max_val) * 100;
    if (indx === 1 && ratings.length === 2) indx = 4;
    columns.push(
      <div className={styles.bar}>
        <p className={styles.value + ' m-0'}>{!show ? '' : rating}</p>
        <div
          key={indx}
          className={styles.column + ' px-1 mx-3'}
          style={{
            backgroundColor: colors[indx],
            height: height.toString() + 'px',
          }}
        />
      </div>
    );
    indx++;
  });

  return (
    <Row
      className={styles.container + ' mx-auto pl-2 pr-4 mb-4 align-items-end'}
      onMouseEnter={() => setShow(!show)}
      onMouseLeave={() => setShow(!show)}
    >
      {columns}
    </Row>
  );
};

export default RatingsGraph;
