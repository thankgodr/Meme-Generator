import React from 'react';
import { Image } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

class MemGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: '',
      bottomText: '',
      image: 'https://via.placeholder.com/300',
    };
  }

  componentWillReceiveProps(prev) {
    this.setState({ ...this.state, image: prev.text.imageurl.links.url });
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center mt-2">
          <Col className="text-center" xs={12} md={6}>
            <p className="topText">{this.props.text.topText}</p>
            <Image width="100%" height="80%" src={this.state.image} rounded />
            <p className="btmText">{this.props.text.btmtext}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MemGenerator;
