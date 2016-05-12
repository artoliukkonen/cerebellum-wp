import React from 'react';
import PureComponent from 'react-pure-render/component';
import {Col, Label, ButtonGroup, Button} from 'react-bootstrap';
import '../assets/styles/link.css';

class Post extends PureComponent {

  static title(props) {
    return props.post.get('title').get('rendered');
  }
  static stores = (request) => {
    return {
      post: {id: request.params.id}
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const post = this.props.post;
    const content = !this.props.excerpt ? post.get('content').get('rendered') : '';

    return (
      <Col className="Post" md={12}>
        <div className="caption">
          <h3><a href={`/post/${post.get("id")}`} dangerouslySetInnerHTML={({__html: post.get("title").get('rendered')})}></a></h3>
          <div dangerouslySetInnerHTML={({__html: content})} />
        </div>
      </Col>
    );
  }
}

export default Post;
