import React, { Component } from 'react';

import './css/app.css';
import './css/foundation.css';
import './css/magnific-popup.css';

import './js/instafeed/instafeed.js'

import Menu from './template/menu';
import Home from './template/home';
import Listen from './template/listen';
import Watch from './template/watch';
import Gallery from './template/gallery';
import Footer from './template/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu />
          <Home />
          <Listen />
          <Watch />
          <Gallery />
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
