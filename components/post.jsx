import React from 'react';
import PureComponent from 'react-pure-render/component';
import {Panel, Col, Label, ButtonGroup, Button} from 'react-bootstrap';
import '../assets/styles/post.css';

import apiConfig from '../config/api';

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
    const content = !this.props.excerpt ? post.get('content').get('rendered') : null;

    const featuredMedia = post.get('_embedded').get('wp:featuredmedia').toJSON()[0].source_url;

    return (
      <Col className='Post' md={content ? 12 : 3}>
        <img src={apiConfig.url + featuredMedia} />
        <h3><a href={`/post/${post.get("id")}`} dangerouslySetInnerHTML={({__html: post.get("title").get('rendered')})}></a></h3>
        <div dangerouslySetInnerHTML={({__html: content})} />
      </Col>
    );
  }
}

export default Post;
