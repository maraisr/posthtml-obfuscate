function obfuscate(data) {
	return data.split('').map((v) => {
		return `&#${v.charCodeAt(0)};`;
	}).join('');
}

module.exports = () => {
	return (tree) => {
		tree.match({tag: 'a'}, node => {
			if (/^mailto:/.test(node.attrs.href)) {
				let ob = ((email) => {
					return {
						get href() {
							return obfuscate(`mailto:${email}`)
						},
						get content() {
							return obfuscate(email);
						}
					}
				})(node.attrs.href.replace(/^mailto:/, ''));

				[node.attrs.href, node.content] = [ob.href, ob.content];
			}

			return node;
		});
	}
}