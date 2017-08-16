<div align="center">
  <a href="https://www.englishaccentsmap.com">
    <img src="https://www.englishaccentsmap.com/android-chrome-512x512.png" width="256" />
  </a>
</div>

# English Accents Database

[![build](https://img.shields.io/travis/ismaelgt/english-accents-db.svg?style=flat-square)](https://travis-ci.org/ismaelgt/english-accents-db)
[![dependencies](https://img.shields.io/david/ismaelgt/english-accents-db.svg?style=flat-square)](https://david-dm.org/ismaelgt/english-accents-db)
[![license](https://img.shields.io/github/license/ismaelgt/english-accents-db.svg?style=flat-square)](https://github.com/ismaelgt/english-accents-db/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blue.svg?style=flat-square)](http://makeapullrequest.com)


A database of English accent videos, in JSON format.

Used by [English Accents Map](https://www.englishaccentsmap.com/) and [English Accents CLI](https://github.com/ismaelgt/english-accents-cli).

## Usage

### In Node.js

1. Install this module as a dependency: `npm i english-accents-db`
1. Use it with:

```javascript
const accentsDb = require('english-accents-db')
// Do stuff
```

### Download

Download the [JSON file](english-accents.json) and do whatever you want with it.

## JSON Schema

[JSON Schema](http://json-schema.org/) is a vocabulary that allows us to annotate and validate JSON documents.

The schema definition for [this database instance](english-accents.json) can be found [here](english-accents.schema.json).

## Contributing

Check the [contribution guide](CONTRIBUTING.md).

## License

This project is licensed under the terms of the [MIT license](https://github.com/ismaelgt/english-accents-map/blob/master/LICENSE).


## See also

 - [English Accents Map](https://github.com/ismaelgt/english-accents-map) - The web app.
 - [English Accents CLI](https://github.com/ismaelgt/english-accents-cli) - The command-line interface (CLI).
