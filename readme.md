# PostHTML

Obfuscates emails to make it harder for bots to recognize emails.

### Install
```sh
npm i posthtml-obfuscate -D
```

### Output
Before
```html
<a href="mailto:sam@smith.com">
	sam@smith.com
</a>
```

After
```html
<a href="mailto:&#115;&#97;&#109;&#64;&#115;&#109;&#105;&#116;&#104;&#46;&#99;&#111;&#109;">
	&#115;&#97;&#109;&#64;&#115;&#109;&#105;&#116;&#104;&#46;&#99;&#111;&#109;
</a>
```
