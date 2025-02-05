#!/usr/bin/env node
import packageJson from '../../package.json' assert { type: 'json' };

export const getPlaywrightVersion = () => {
	const version = packageJson.devDependencies['@playwright/test'];
	if (!version) {
		console.error('Playwright version is missing');
		process.exit(1);
	}

	return version;
};

console.log(getPlaywrightVersion());
