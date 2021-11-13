import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import TextComponent from './TextComponent';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      imgData: [],
      selected: this.randomIntFromInterval(0, 79),
    };
    this.generate = this.generate.bind(this);
  }

  handlerTOP = (e) => {
    this.props.func({ topText: e });
  };

  handlerBtm = (e) => {
    this.props.func({ btmtext: e });
  };

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  generate() {
    this.setState((prev) => {
      console.log(prev);
      return { ...prev, selected: this.randomIntFromInterval(0, 79) };
    });
    console.log(this.state);
    if (this.state.imageUrl.length == 0) {
      fetch('https://api.imgflip.com/get_memes')
        .then((response) => response.json())
        .then((data) => {
          this.setState((prev) => {
            return { ...prev, imgData: data.data.memes };
          });
          this.props.imageUrls({ links: this.state.imgData[this.state.selected] });
        });
    } else {
      this.props.imageUrls(this.state.imgData[this.state.selected]);
    }
  }

  render() {
    return (
      <Col md={12}>
        <div className="p-5 text-center bg-light">
          <h1 className="mb-3">Meme Generator</h1>
          <TextComponent formLabel="Top Text" handler={this.handlerTOP} />
          <TextComponent formLabel="Buttom Text" handler={this.handlerBtm} />
          <button onClick={this.generate} className="btn btn-primary" href="#" role="button">
            Change Image
          </button>
        </div>
      </Col>
    );
  }
}

export default Header;
