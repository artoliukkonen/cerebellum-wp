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

  constructor(props) {
    super(props);

    this.state = {
      selectedLink: null
    };

    this.selectLink = this.selectLink.bind(this);
  }

  selectLink(link) {
    this.setState({selectedLink: link});
  }

  render() {
    let {posts} = this.props;

    return (
      <div className="Index">
        <Jumbotron>
          <h1>cerebellum/WordPress demo app</h1>
          <Posts posts={posts} selectLink={this.selectLink} />
        </Jumbotron>
      </div>
    );
  }

}

export default Index;
