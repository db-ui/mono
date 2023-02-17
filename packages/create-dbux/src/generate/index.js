/* eslint-disable no-console */

import spawn from 'cross-spawn';
import cpr from 'cpr';

const getDependencies = (framework) => {
	switch (framework) {
		case 'angular': {
			return '@db-ui/ngx-components';
		}

		case 'react': {
			return '@db-ui/react-components';
		}

		case 'vue': {
			return '@db-ui/v-components';
		}

		default: {
			return undefined;
		}
	}
};

const getDevDependencies = (framework) => {
	switch (framework) {
		case 'angular': {
			return '';
		}

		case 'react': {
			return 'eslint-plugin-react';
		}

		case 'vue': {
			return '';
		}

		default: {
			return undefined;
		}
	}
};

const getPackageJsonSets = (framework) => {
	switch (framework) {
		case 'angular': {
			return '';
		}

		case 'react': {
			return [
				'scripts.lint=eslint src --ext .ts --ext .tsx',
				'scripts.prettier=prettier --write src'
			];
		}

		case 'vue': {
			return '';
		}

		default: {
			return [];
		}
	}
};

/**
 *
 * @param values {{name: string, framework: string, styling: string, typing:string}}
 */
const generateViteProject = (values) => {
	spawn.sync(
		'npm',
		[
			'create',
			'vite@latest',
			values.name,
			'--',
			'--template',
			`${values.framework}${values.typing === 'typescript' ? '-ts' : ''}`
		],
		{
			stdio: 'inherit'
		}
	);
};

/**
 *
 * @param values {{name: string, framework: string, styling: string, typing:string}}
 */
const addDependencies = (values) => {
	spawn.sync(
		'npm',
		[
			'--prefix',
			`${values.name}`,
			'install',
			getDependencies(values.framework)
		],
		{
			stdio: 'inherit'
		}
	);
};

/**
 *
 * @param values {{name: string, framework: string, styling: string, typing:string}}
 */
const addDevDependencies = (values) => {
	spawn.sync(
		'npm',
		[
			'--prefix',
			`${values.name}`,
			'install',
			'--save-dev',
			'prettier',
			'prettier-plugin-pkg',
			'eslint',
			'eslint-config-prettier',
			'eslint-plugin-prettier',
			'@typescript-eslint/eslint-plugin',
			// TODO: add this '@db-ui/eslint-plugin',
			getDevDependencies(values.framework),
			values.styling === 'scss' ? 'sass' : ''
		],
		{
			stdio: 'inherit'
		}
	);
};

/**
 *
 * @param values {{name: string, framework: string, styling: string, typing:string}}
 * @param set {string}
 */
const updatePackageJson = (values, set) => {
	spawn.sync('npm', ['--prefix', `${values.name}`, 'pkg', 'set', set], {
		stdio: 'inherit'
	});
};

/**
 *
 * @param values {{name: string, framework: string, styling: string, typing:string}}
 */
const generateProject = (values) => {
	console.log('Generate Project');
	if (values.name === 'angular') {
		// TODO: generate angular
	} else {
		generateViteProject(values);
	}

	console.log('Install dependencies');
	addDependencies(values);
	console.log('Install devDependencies');
	addDevDependencies(values);

	for (const set of getPackageJsonSets(values.framework))
		updatePackageJson(values, set);

	console.log('Copy templates');
	cpr(
		`./src/templates/${values.framework}-${values.typing}-${values.styling}/src`,
		`./${values.name}/src`,
		{
			deleteFirst: true,
			overwrite: true,
			confirm: true
		},
		(error) => {
			if (error) {
				console.error(error);
			}
		}
	);

	try {
		cpr(
			`./src/templates/${values.framework}-${values.typing}-${values.styling}/.eslintrc.json`,
			`./${values.name}/.eslintrc.json`,
			{
				deleteFirst: true,
				overwrite: true,
				confirm: true
			},
			(error) => {
				if (error) {
					console.error(error);
				}
			}
		);
	} catch (error) {
		console.error(error);
	}

	console.log('Generated dbux-starter-template <3');
};

export default generateProject;
