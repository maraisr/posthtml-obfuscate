const plugin = require('../lib/index.js');
const posthtml = require('posthtml');

describe('Obfuscate', () => {
	it('should add a mailto', async () => {
		const { html } = await posthtml([plugin()]).process(
			'<a href="mailto:sam@smith.com">sam@smith.com</a>'
		);

		expect(html).toEqual(
			'<a href="mailto:&#115;&#97;&#109;&#64;&#115;&#109;&#105;&#116;&#104;&#46;&#99;&#111;&#109;">&#115;&#97;&#109;&#64;&#115;&#109;&#105;&#116;&#104;&#46;&#99;&#111;&#109;</a>'
		);
	});

	it('should ignore anchors with no email', async () => {
		const { html } = await posthtml([plugin()]).process(
			'<a href="sam@smith.com">sam@smith.com</a>'
		);

		expect(html).toEqual('<a href="sam@smith.com">sam@smith.com</a>');
	});

	it('should include a mailto when asked todo so', async () => {
		const { html } = await posthtml([
			plugin({
				includeMailto: true
			})
		]).process('<a href="mailto:sam@smith.com">sam@smith.com</a>');

		expect(html).toEqual(
			'<a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#115;&#97;&#109;&#64;&#115;&#109;&#105;&#116;&#104;&#46;&#99;&#111;&#109;">&#115;&#97;&#109;&#64;&#115;&#109;&#105;&#116;&#104;&#46;&#99;&#111;&#109;</a>'
		);
	});
});
