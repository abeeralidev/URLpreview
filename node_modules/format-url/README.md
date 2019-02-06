# format-url
Light wrapper around Node.js url.format() to reduce the number of checks you need to do before calling it. Designed to detect protocol and path (or lack thereof), but still get the result you expect from url.format().

### Usage

```
$ npm install format-url
$ node
> var urlFormat = require('format-url');
undefined
> urlFormat('127.0.0.0');
'http://127.0.0.0'
> urlFormat('127.0.0.0:8080');
'http://127.0.0.0:8080'
> urlFormat('http://127.0.0.0:8080');
'http://127.0.0.0:8080'
> urlFormat('https://127.0.0.0:8080');
'https://127.0.0.0:8080'
> urlFormat('127.0.0.0:8080/path/to/things');
'http://127.0.0.0:8080/path/to/things'
```

Tests can be found in the `test/` directory.

### Licence

ISC
