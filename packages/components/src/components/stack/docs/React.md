## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBStack } from "@db-ui/react-components";

const App = () => (
	<DBStack>
		<span>Test 1</span>
		<span>Test 2</span>
		<span>Test 3</span>
	</DBStack>
);

export default App;
```
