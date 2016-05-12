// load environment variables from .env with dotenv
import dotenv from 'dotenv';
dotenv.load();

import React from 'react';
import ReactDOM from 'react-dom/server';
import {server as Cerebellum} from 'cerebellum';
import CerebellumReact from 'cerebellum-react'
import compress from 'compression';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import ConnectMongo from 'connect-mongo';
import options from './options';
import request from 'request';

options.middleware = [
  compress(),
  cookieParser(process.env.COOKIE_SECRET),
  bodyParser.json(),
  bodyParser.urlencoded({extended: true}),
  session({
    secret: process.env.COOKIE_SECRET,
    saveUninitialized: true,
    resave: true
  }),
  passport.initialize(),
  passport.session()
];

// cerebellum-react specific options
const Layout = React.createFactory(require('./components/layout.jsx'));
options.prependTitle = "cerebellum-wp - ";
options.containerComponent = (store, children, props) => {
  return Layout({ store, children });
};

const app = CerebellumReact(Cerebellum, React, ReactDOM, options);

// always register static files middleware after defining routes
app.useStatic();

app.listen(Number(process.env.PORT || 4000), function() {
  console.log(`cerebellum-wp development server listening on port ${this.address().port}`);
});
