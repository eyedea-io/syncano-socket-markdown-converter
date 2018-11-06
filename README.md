# Syncano Socket for markdown converter

[![Syncano Socket](https://img.shields.io/badge/syncano-socket-blue.svg)](https://syncano.io)
[![CircleCI branch](https://img.shields.io/circleci/project/github/eyedea-io/syncano-socket-markdown-converter/master.svg)](https://circleci.com/gh/eyedea-io/syncano-socket-markdown-converter/tree/master)
[![Codecov branch](https://img.shields.io/codecov/c/github/eyedea-io/syncano-socket-markdown-converter/master.svg)](https://codecov.io/github/eyedea-io/syncano-socket-markdown-converter/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm](https://img.shields.io/npm/dw/@eyedea-sockets/markdown-converter.svg)](https://www.npmjs.com/package/@eyedea-sockets/markdown-converter)
![license](https://img.shields.io/github/license/eyedea-io/syncano-socket-markdown-converter.svg)

Main Socket features:

* **markdown-converter/convert** — convert markdown to HTML

## Getting Started

Install package in your project:

```sh
cd my_project
npm install @syncano/cli --save-dev
npm install @eyedea-sockets/markdown-converter --save
npx s deploy
```

Use it:

```js
import Syncano from '@syncano/client'

const s = new Syncano(<instaneName>)

const params = {
    content: 'Hello *World*!'
}

const convertMDtoHTML = await s.post('markdown-converter/convert', params)
```
