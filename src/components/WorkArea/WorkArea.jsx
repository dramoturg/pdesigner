import React from 'react';
import css from './WorkArea.styl';
import butotnCss from '../Button/Button.styl';
import Button from '../Button/Button';
import ToggleButtons from 'dx-components/src/components/ToggleButtons/ToggleButtons';
const toggleTheme = {
	container__item_active: butotnCss.buttonActive
};

export default class WorkArea extends React.Component {

	state = {
		toggleIndex: 0
	}

	render() {
		return (
			<div className={css.container}>
				<div className={css.header}>
					<ToggleButtons toggleIndex={this.state.toggleIndex}
								   theme={toggleTheme}
								   onChange={this.onToggleChange}>
						<Button>Основа</Button>
						<Button>Дизайн</Button>
						<Button>Текст</Button>
						<Button>Загрузить</Button>
					</ToggleButtons>
				</div>
				<div className={css.content}>
					
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