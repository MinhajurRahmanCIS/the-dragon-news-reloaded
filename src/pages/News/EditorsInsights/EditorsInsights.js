import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import eI1 from '../../../assets/editorsInsight1.png';
import eI2 from '../../../assets/editorsInsight2.png';
import eI3 from '../../../assets/editorsInsight3.png';
const EditorsInsights = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={eI1} />
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={eI2} />
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={eI3} />
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    );
};

export default EditorsInsights;