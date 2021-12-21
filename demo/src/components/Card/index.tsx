import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.css';

const Card = () => {
  return (
    <Row className="mr-0 ml-0">
      <Col className='gradient-card pt-3 pb-1 px-4'>
        <Row>
          <Col md={8}>
            <p className="h1">test</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Card;
