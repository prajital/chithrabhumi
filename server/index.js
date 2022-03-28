import path from 'path'
import fs from 'fs'
import { ApolloProvider } from 'react-apollo';
import client from '../src/ApolloClient';
import { Helmet } from 'react-helmet';
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../src/App'

const PORT = 5000
const app = express()

app.get('/*', (req, res) => {
  //const app = ReactDOMServer.renderToString(<App />);
  const appString = ReactDOMServer.renderToString(<App />);
  const helmet = Helmet.renderStatic();
  const indexFile = path.resolve('./build/index.html');
  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
    </head>
    <body>
      <div id="root">
        ${ appString }
      </div>
    </body>
  </html>
`
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(html);
  });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});