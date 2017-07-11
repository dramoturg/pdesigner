import React from  'react';
import css from './InstrumentPane.styl';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import buttonIconTheme from './theme/IPButtonIcon.styl';

export default class InstrumentPane extends React.Component {
	render() {
		return (
			<div className={css.container}>
				<ButtonIcon name={buttonIconTheme.info} theme={buttonIconTheme} />
				<ButtonIcon name={buttonIconTheme.films} theme={buttonIconTheme} isDisabled={true} />
				<ButtonIcon name={buttonIconTheme.text} theme={buttonIconTheme} />
				<ButtonIcon name={buttonIconTheme.align} theme={buttonIconTheme} isDisabled={true} />
				<ButtonIcon name={buttonIconTheme.rotate} theme={buttonIconTheme} isDisabled={true} />
				<ButtonIcon name={buttonIconTheme.flip} theme={buttonIconTheme}  isDisabled={true} />
				<ButtonIcon name={buttonIconTheme.layers} theme={buttonIconTheme} isDisabled={true} />
			</div>
		)
	}
}