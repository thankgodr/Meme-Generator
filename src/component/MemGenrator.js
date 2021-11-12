import React from 'react';
import { Image } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

class MemGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center mt-2">
          <Col className="text-center" xs={12} md={4}>
            <Image src="https://via.placeholder.com/300" rounded />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MemGenerator;
