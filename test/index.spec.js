const plugin = require('../lib/index.js');
const posthtml = require('posthtml');

it('only does mailto', () => {
	posthtml([plugin()])
		.process('<a href="mailto:sam@smith.com">sam@smith.com</a>')
		.then((r) => {
			expect(r.html).toEqual('<a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#115;&#97;&#109;&#64;&#115;&#109;&#105;&#116;&#104;&#46;&#99;&#111;&#109;">&#115;&#97;&#109;&#64;&#115;&#109;&#105;&#116;&#104;&#46;&#99;&#111;&#109;</a>');
		});
});

it('leaves other anchors', () => {
	posthtml([plugin()])
		.process('<a href="sam@smith.com">sam@smith.com</a>')
		.then((r) => {
			expect(r.html).toEqual('<a href="sam@smith.com">sam@smith.com</a>');
		});
})