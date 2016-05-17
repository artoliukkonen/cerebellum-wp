import React from 'react';
import PureComponent from 'react-pure-render/component';
import {Jumbotron} from 'react-bootstrap';

import Posts from './posts.jsx';

class Index extends PureComponent {

  static title = "Blog"

  static stores = (request) => {
    return {
      "posts": {}
    };
  }

  render() {
    let {posts} = this.props;

    return (
      <div className="Index">
        <h1>cerebellum/WordPress demo app</h1>
        <Posts posts={posts} />
      </div>
    );
  }

}

export default Index;
