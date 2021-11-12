import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import TextComponent from './TextComponent';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handlerTOP = (e) => {
    this.props.func({ topText: e });
  };

  handlerBtm = (e) => {
    this.props.func({ btmtext: e });
  };

  render() {
    return (
      <Col md={12}>
        <div className="p-5 text-center bg-light">
          <h1 className="mb-3">Meme Generator</h1>
          <TextComponent formLabel="Top Text" handler={this.handlerTOP} />
          <TextComponent formLabel="Buttom Text" handler={this.handlerBtm} />
          <button className="btn btn-primary" href="#" role="button">
            Generate Meme
          </button>
        </div>
      </Col>
    );
  }
}

export default Header;
