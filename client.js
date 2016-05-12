import React from 'react';
import ReactDOM from 'react-dom';
import Cerebellum from 'cerebellum/client';
import CerebellumReact from 'cerebellum-react'
import options from './options';

options.initialize = function(client) {
  function reloadIndex() {
    client.router.replace(document.location.pathname);
  }

  client.store.on("posts", reloadIndex);
};

// cerebellum-react specific options
const Layout = React.createFactory(require('./components/layout.jsx'));
options.prependTitle = "cerebellum-wp - ";
options.containerComponent = (store, children, props) => {
  return Layout({ store, children });
};

CerebellumReact(Cerebellum, React, ReactDOM, options);
