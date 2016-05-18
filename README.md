# cerebellum-wp

> Cerebellum.js WordPress example. Proudly copying a lot from https://github.com/SC5/cerebellum-urls

cerebellum-wp hooks WordPress REST API to Cerebellum.js providing isomorphic SPA. Views are rendered using React and styles use PostCSS. 

**Note: this is still very much work in progress and not suitable for production use. For now think about it more as a tutorial for the tools rather than full-blown app.**

## Get it running for development

Install dependencies

	npm install
	
Change URLs from `config/api.js`and `config/api-browser.js` to your WordPress installation.

Start server

	npm start
	open http://localhost:4000
	
(optional, for hot reload hotness)

	npm run watch
	open http://localhost:4001
	
	
## License

MIT