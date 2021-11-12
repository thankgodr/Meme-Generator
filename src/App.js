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
    };
    this.memeHandler = this.memeHandler.bind(this);
  }

  memeHandler(e) {
    this.setState((prev) => {
      return { ...prev, ...e };
    });
  }

  render() {
    return (
      <div className="row">
        <Header func={this.memeHandler} />
        <MemGenerator text={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
