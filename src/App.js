import React from 'react';
import Header from './component/Header';
import MemGenerator from './component/MemGenrator';
import Footer from './component/Footer';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      btmtext: '',
      imageurl: '',
    };
    this.memeHandler = this.memeHandler.bind(this);
    this.getUrls = this.getUrls.bind(this);
  }

  memeHandler(e) {
    this.setState((prev) => {
      return { ...prev, ...e };
    });
  }

  getUrls(e) {
    this.setState((prev) => {
      return { ...prev, imageurl: e };
    });
  }

  render() {
    return (
      <div className="row">
        <Header func={this.memeHandler} imageUrls={this.getUrls} />
        <MemGenerator text={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
