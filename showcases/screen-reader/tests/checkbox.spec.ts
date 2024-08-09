import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBCheckbox', () => {
	testDefault({
		test,
		title: 'should tick and untick checkbox, feedback messages must appear',
		url: './#/03/checkbox?page=requirement',
		async testFn(voiceOver, nvda) {
			const screenReader = voiceOver ?? nvda;
			await screenReader?.next(); // Focus checkbox 1
			await screenReader?.next(); // Focus checkbox 1 label
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.next(); // Focus checkbox 2
			await screenReader?.next(); // Focus checkbox 2 label
			await screenReader?.next(); // Focus checkbox 3
			await screenReader?.previous(); // Focus checkbox 2 label
			await screenReader?.previous(); // Focus checkbox 2
			await screenReader?.act(); // Tick checkbox 2
			await screenReader?.next(); // Focus checkbox 2 label
			await screenReader?.next(); // Focus checkbox 2 message
			await screenReader?.next(); // Focus checkbox 3
			await screenReader?.previous(); // Focus checkbox 2 message
			await screenReader?.previous(); // Focus checkbox 2 label
			await screenReader?.previous(); // Focus checkbox 2
			await screenReader?.act(); // Tick checkbox 2
			await screenReader?.next(); // Focus checkbox 2 label
			await screenReader?.next(); // Focus checkbox 2 message
			await screenReader?.next(); // Focus checkbox 3
		}
	});
});
