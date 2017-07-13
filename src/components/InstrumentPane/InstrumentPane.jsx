import React from 'react';
import css from './InstrumentPane.styl';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import buttonIconTheme from './theme/IPButtonIcon.styl';
import Popover, {PLACEMENT, ALIGN} from '../Popover/Popover';

export default class InstrumentPane extends React.Component {
	state = {
		isOpened: false
	};

	render() {
		const {isOpened} = this.state;

		return (
			<div className={css.container}>
				<ButtonIcon name={buttonIconTheme.info} theme={buttonIconTheme}
					onClick={this.onToggleClick} ref={el => this._anchor = el}>

					<Popover placement={PLACEMENT.LEFT}
							 align={ALIGN.TOP}
							 isOpened={isOpened}
							 closeOnClickAway={true}
							 hasArrow={true}
							 anchor={this._anchor}>
						Футболка мужская классика белая WH
					</Popover>
				</ButtonIcon>
				<ButtonIcon name={buttonIconTheme.films} theme={buttonIconTheme} isDisabled={true}/>
				<ButtonIcon name={buttonIconTheme.text} theme={buttonIconTheme}/>
				<ButtonIcon name={buttonIconTheme.align} theme={buttonIconTheme} isDisabled={true}/>
				<ButtonIcon name={buttonIconTheme.rotate} theme={buttonIconTheme} isDisabled={true}/>
				<ButtonIcon name={buttonIconTheme.flip} theme={buttonIconTheme} isDisabled={true}/>
				<ButtonIcon name={buttonIconTheme.layers} theme={buttonIconTheme} isDisabled={true}/>
			</div>
		);
	}

	onToggleClick = e => {
		console.log('test');
		this.setState({
			isOpened: !this.state.isOpened
		});
	}
}