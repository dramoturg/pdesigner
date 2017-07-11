import React from 'react';
import css from './WorkArea.styl';
import butotnCss from '../Button/Button.styl';
import Button from '../Button/Button';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import ToggleButtons from 'dx-components/src/components/ToggleButtons/ToggleButtons';
import Widget from '../Widget/Widget';
import InstrumentPane from '../InstrumentPane/InstrumentPane';

import {themeable} from 'react-css-themr';
import toggleButtonsCss from './theme/ToggleButtons.styl';

const toggleButtonsTheme = themeable(toggleButtonsCss, {
	container__item_active: butotnCss.buttonActive
});

export default class WorkArea extends React.Component {

	state = {
		toggleIndex: 0
	}

	render() {
		return (
			<div className={css.container}>
				<div className={css.header}>
					<div className={css.mode}>
						<ToggleButtons toggleIndex={this.state.toggleIndex}
									   theme={toggleButtonsTheme}
									   onChange={this.onToggleChange}>
							<Button>Основа</Button>
							<Button>Дизайн</Button>
							<Button>Текст</Button>
							<Button>Загрузить</Button>
						</ToggleButtons>
					</div>
					<ButtonIcon name='zoom-in' />
					<ButtonIcon name='zoom-out' />
					<ButtonIcon name='delete' />
					<ButtonIcon name='fullscreen' />
				</div>
				<div className={css.content}>
					<div className={css.aside}>
					</div>
					<div className={css.stage}>
						<Widget header={<div>Выбор основы</div>}>
							test
						</Widget>
					</div>
					<div className={css.aside}>
						<InstrumentPane />
					</div>
				</div>
			</div>
		)
	}

	onToggleChange = (i) => {
		this.setState({
			toggleIndex: i
		});
	}
}