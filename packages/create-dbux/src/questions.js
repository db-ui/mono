/**
 *
 * @type {[
 * {
 * 	description: string,
 * 	type: string,
 * 	message: string,
 * 	error: string,
 * 	required?: boolean,
 * 	default?: string, name: string,
 * 	choices?: [{name: string}]
 * }
 * ]}
 */
const questions = [
	{
		description: 'project name',
		type: 'input',
		message: 'Whats the name of the project',
		name: 'name',
		default: 'dbux-project',
		error: 'Please provide a name',
		required: true
	},
	{
		description: 'which framework do you want to use',
		type: 'list',
		message: 'Select a framework',
		name: 'framework',
		default: 'react',
		error: 'You must choose at least one framework.',
		choices: [
			/*			{
				name: 'angular'
			}, */
			{
				name: 'react'
			},
			{
				name: 'vue'
			}
		],
		required: true
	},
	{
		description: 'do you want to use typescript',
		type: 'list',
		message: 'Select a if you use typescript',
		name: 'typing',
		default: 'typescript',
		error: 'You must choose if you want to use typescript.',
		choices: [
			/* {
			// TODO: Do we want to support js?
				name: 'javascript'
			}, */
			{
				name: 'typescript'
			}
		],
		required: true
	},
	{
		description: 'which styling language do you want to use',
		type: 'list',
		message: 'Select a styling language',
		name: 'styling',
		default: 'scss',
		error: 'You must choose at least one styling language.',
		choices: [
			{
				name: 'css'
			},
			{
				name: 'scss'
			}
		],
		required: true
	}
];

export default questions;
