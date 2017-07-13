import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';

const renderApp = Component => {
	ReactDOM.render(
		<Component />,
		document.getElementById('root')
	);
};

renderApp(App);