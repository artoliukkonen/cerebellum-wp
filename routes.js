import React from 'react';
import Index from './components/index.jsx';
import Post from './components/post.jsx';

export default {
  "/": Index,
  "/post/:id": Post,
};
