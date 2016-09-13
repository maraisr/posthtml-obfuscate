# PostHTML Obfuscate

[![NPM version](https://img.shields.io/npm/v/posthtml-obfuscate.svg?style=flat-square)](https://www.npmjs.com/package/posthtml-obfuscate)

Obfuscates emails to make it harder for bots to recognize emails.

### Install
```sh
npm i posthtml-obfuscate -D
```

### Output
```html
<!-- Before -->
<a href="mailto:sam@smith.com">
	sam@smith.com
</a>

<!-- After -->
<a href="mailto:&#115;&#97;&#109;&#64;&#115;&#109;&#105;&#116;&#104;&#46;&#99;&#111;&#109;">
	&#115;&#97;&#109;&#64;&#115;&#109;&#105;&#116;&#104;&#46;&#99;&#111;&#109;
</a>
```

### Usage
```js
const posthtml = require('posthtml');
const phObfuscate= require('posthtml-obfuscate');

const options = {
	includeMailto: false
};

posthtml([phObfuscate(options)])
	.process(myHtml)
	.then(result => {
		console.log(result.html); // The output
	});
```

### Options
- `includeMailto`: Boolean - Includes the `mailto:` prefix in the obfuscation. (Default: false)
