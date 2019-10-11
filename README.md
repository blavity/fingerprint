Utilizes FingerprintJS API to track the fingerprint, page visited and timestamp associated with each action a user takes on all Vue & Nuxt properties.

## Install

```
$ npm install 'ssh://git@github.com:blavity/fingerprint.git#master'
```

## Usage

```js
const fingerprint = require("@blavity/fingerprint");

fingerprint(this, https://api.staging.blavity.com/v1/fingerprint, https://blavity.com/ );
//In developer tools you'll see => "your fp:  9eea5059858c3274041xjrty40f"

fingerprint(9eea5059858c3274041xjrty40f);
//=> Uncaught TypeError: This fingerprint is already taken!
//    at fingerprint (<anonymous>:2:41)
//    at <anonymous>:1:1
```
