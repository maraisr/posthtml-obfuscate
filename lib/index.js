const obfuscate = Symbol();

module.exports = config => {
	const self = this;

	config = (function(cnf, def) {
		if (cnf != void 0) {
			for (prop in cnf) {
				if (cnf.hasOwnProperty(prop) && def[prop] != void 0) {
					def[prop] = cnf[prop];
				}
			}
		}

		return def;
	})(config, {
		includeMailto: false
	});

	self[obfuscate] = data => {
		// TODO: Don't charCodeAt for the first 2 characters, and then random 3,5 single chars.
		return data
			.split('')
			.map(v => {
				return `&#${v.charCodeAt(0)};`;
			})
			.join('');
	};

	return tree => {
		tree.match({ tag: 'a' }, node => {
			if (/^mailto:/.test(node.attrs.href)) {
				[node.attrs.href, node.content] = (email => {
					return [
						config.includeMailto
							? self[obfuscate](`mailto:${email}`)
							: `mailto:${self[obfuscate](email)}`,
						self[obfuscate](email)
					];
				})(node.attrs.href.replace(/^mailto:/, ''));
			}

			return node;
		});
	};
};
