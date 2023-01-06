import { DBButton, DBIcon, DBCard, DBDivider, DBInput } from '../../../output/react/src';

function App() {
	return (
		<main>
			<h1>React</h1>
			<DBCard>
				<div
					style={{
						display: 'flex',
						gap: '4px',
						alignItems: 'stretch'
					}}>
					<DBDivider variant="vertical" />
					<DBButton variant="secondary">Test</DBButton>
					<DBDivider variant="vertical" />
					<DBButton text="Test" icon="account" />
					<DBIcon className="icon" icon="account" />
				</div>
			</DBCard>

			<div
				style={{
					display: 'flex',
					gap: '1rem',
					margin: '1rem 0'
				}}>
				<section className="db-ui-expressive">
					<DBInput
						description="Das ist die Beschreibung"
						label="Textlabel"
						placeholder="irgendein Text"
						iconBefore="edit"
						id="input-expr"
					/>
				</section>

				<section className="db-ui-expressive">
					<DBInput
						description="Das ist die Beschreibung"
						label="Textlabel"
						placeholder="irgendein Text"
						iconBefore="edit"
						variant="error"
						id="input-expr-error"
					/>

					<DBInput
						description="Das ist die Beschreibung"
						label="Input required"
						placeholder="irgendein Text"
						iconBefore="edit"
						iconAfter="heart"
						variant="warning"
						id="input-expr-warning"
						required="true"
					/>
				</section>

				<section className="db-ui-regular">
					<DBInput
						label="Textlabel"
						placeholder="irgendein Text"
						iconAfter="heart"
						id="input-reg"
					/>
				</section>

				<section className="db-ui-functional">
					<DBInput label="Textlabel" placeholder="irgendein Text" />
					<DBInput
						label="Textinput disabled"
						placeholder="irgendein Text"
						variant="information"
						id="input-func"
						disabled="true"
					/>
				</section>
			</div>
		</main>
	);
}

export default App;
