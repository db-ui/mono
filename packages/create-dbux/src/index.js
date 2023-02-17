#!/usr/bin/env node

/* eslint-disable no-console */

import { program } from 'commander';
import inquirer from 'inquirer';

import questions from './questions.js';
import generateProject from './generate/index.js';

program
	.name('@db-ui')
	.description('CLI to create starter templates for DB UX Design System')
	.option('--dry-run', 'prints the output of the template generator');

for (const question of questions) {
	const short = question.short || `-${question.name.charAt(0)}`;
	const long = question.long || `--${question.name} <${question.name}>`;
	program.option(`${short}, ${long}`, question.description || '');
}

program.action(async (string_, options) => {
	let values = options._optionValues;
	console.log('options:', values);

	for (const question of questions) {
		if (!values[question.name]) {
			values = {
				...values,
				// eslint-disable-next-line no-await-in-loop
				...(await inquirer.prompt([
					{
						...question,
						validate(answer) {
							return answer.length === 0 ? question.error : true;
						}
					}
				]))
			};
		}

		if (!values[question.name] && question.required) {
			console.error('Error:', question.error);
			process.exit(1);
		}
	}

	if (values.dryRun) {
		console.log('values:', values);
	} else {
		generateProject(values);
	}
});

program.parse();
