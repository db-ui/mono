import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@db-ui/components/build/styles/db-ui-42-rollup.css';
import '@db-ui/foundations/build/css/color-classes.css';
import './index.css';

ReactDOM.createRoot(document.querySelector('#root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
