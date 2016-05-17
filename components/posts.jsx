import React from 'react';
import PureComponent from 'react-pure-render/component';
import {Panel, Row} from 'react-bootstrap';
import Post from './post.jsx';

class Posts extends PureComponent {

  render() {
    let {posts} = this.props;

    posts = posts.toArray().reverse().map((post, i) => {
      return <Post key={post.get("id")} post={post} excerpt="true" />
    });

    return (
      <div className="Posts">
        <Row>
          {posts}
        </Row>
      </div>
    );
  }
}

export default Posts;
