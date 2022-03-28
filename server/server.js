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

const router = express.Router()

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    app.get('/*', (req, res) => {
      const appString = ReactDOMServer.renderToString(<App />);
      const helmet = Helmet.renderStatic();
    
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
      });
    
    return res.send(html)
  })
}
router.use('^/$', serverRenderer)

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

// tell the app to use the above rules
app.use(router)

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})