import React from 'react';
import PureComponent from 'react-pure-render/component';
import {Panel, Row} from 'react-bootstrap';
import Post from './post.jsx';

class Posts extends PureComponent {

  render() {
    const {store, selectLink} = this.props;

    const posts = this.props.posts.toArray().map((post, i) => {
      return <Post key={post.get("id")} post={post} excerpt="true" />
    });

    return (
      <div className="Posts">
        <Panel>
          <Row>
            {posts}
          </Row>
        </Panel>
      </div>
    );
  }
}

export default Posts;
