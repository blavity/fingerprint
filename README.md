Utilizes FingerprintJS API to track the fingerprint, page visited and timestamp associated with each action a user takes on all Vue & Nuxt properties.

## Install

```
$ npm install --save blavity/fingerprint
```

## Usage

```js
const fingerprint = require("@blavity/fingerprint");

fingerprint(this, https://api.staging.blavity.com/v1/fingerprint, https://blavity.com/, true );

> Passes entire vueInstance into the function, will need to pass in the this keyword and it will destructure below
> Pass the endpoint in the 2nd param to keep the endpoint dynamic
> Pass the slug in the 3rd param to keep the function site agnostic
> Pass a true or false in the 4th param to affirm that you are in the development enviornment or not
> In developer tools you'll see => "your fp:  9eea5059858c3274041xjrty40f"

fingerprint(9eea5059858c3274041xjrty40f);
//=> Uncaught TypeError: This fingerprint is already taken!
//    at fingerprint (<anonymous>:2:41)
//    at <anonymous>:1:1
```
