const Replace = require('replace-in-file');

const Components = require('./components');

module.exports = () => {
	for (const component of Components) {
		const options = {
			files: `../../output/svelte/src/components/${component.name}/index.js`,
			processor(input) {
				if (!input.includes('svelte')) {
					return input.replace(
						`./${component.name}`,
						`./${component.name}.svelte`
					);
				}

				return input;
			}
		};

		try {
			Replace.sync(options);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
