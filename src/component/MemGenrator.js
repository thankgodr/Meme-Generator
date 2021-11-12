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

  componentDidMount() {
    setTimeout(() => {
      this.setState((prev) => {
        return { ...prev, image: 'http://i.imgflip.com/1bij.jpg' };
      });
    }, 1500);
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center mt-2">
          <Col className="text-center" xs={12} md={4}>
            <p>{this.props.text.topText}</p>
            <Image width={300} src={this.state.image} rounded />
            <p>{this.props.text.btmtext}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MemGenerator;
