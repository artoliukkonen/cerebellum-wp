import React from 'react';
import '../assets/styles/global.css';
import '../assets/styles/layout.css';

import Navigation from './navigation.jsx';

class Layout extends React.Component {
  render() {
    return (
      <div className="Layout">
        <Navigation />

        {this.props.children}
      </div>
    );
  }
}

export default Layout;
