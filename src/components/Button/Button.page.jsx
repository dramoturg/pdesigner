import Button from './Button.jsx';
import React from 'react';

import {storiesOf} from '@kadira/storybook';
storiesOf('Button', module)
	.add('Default', () => (
		<Demo>
			<Button>Default</Button>
			<Button isDisabled={true}>Disabled</Button>
		</Demo>
	))
	.add('Primary', () => (
		<Demo>
			<Button isPrimary={true}>Primary</Button>
			<Button isPrimary={true} isDisabled={true}>Disabled</Button>
		</Demo>
	))