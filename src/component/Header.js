import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const genreate = () => {
  console.log('Generate was clicked');
};

const Header = () => {
  return (
    <Col md={12}>
      <div className="p-5 text-center bg-light">
        <h1 className="mb-3">Meme Generator</h1>
        <button onClick={genreate} className="btn btn-primary" href="#" role="button">
          Generate Meme
        </button>
      </div>
    </Col>
  );
};

export default Header;
