
import React from 'react';
import css from './App.styl';
import WorkArea from '../WorkArea/WorkArea';

export default class App extends React.Component {
	render() {
		return (
			<div className={css.container}>
				<WorkArea/>
			</div>
		);
	}
}