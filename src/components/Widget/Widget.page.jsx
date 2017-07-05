import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Widget from './Widget.jsx';
import Demo from '../../demo/Demo.jsx';
import Button from '../Button/Button.jsx';
import css from './Widget.page.styl';
import iconResize from './demo/icon-resize.svg';

const theme = {
	header: css.header,
	body: css.body
};

storiesOf('Widget', module).add('default', () => {
	const header = (
		<div>
			<h1 className={css.item}>Title</h1>
			<span className={css.item}>Hi, I'm widget's header</span>
			<Button className={css.item} modifiers={['primary']}>Click me</Button>
			<Button className={css.item} modifiers={['secondary', 'icon']}>&times;</Button>
		</div>
	);

	return (
		<Demo>
			<Widget header={header} resizeIconName={iconResize} theme={theme}>
				Hi, I'm widget's body
			</Widget>
		</Demo>
	);
});