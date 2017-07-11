export * from 'dx-components/src/components/ButtonIcon/ButtonIcon';
import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import ButtonIcon, {BUTTON_ICON} from 'dx-components/src/components/ButtonIcon/ButtonIcon';
import {themr} from 'react-css-themr';
import css from './ButtonIcon.styl';

@themr(BUTTON_ICON, css)
export default class pDesignerButtnIcon extends React.Component {
	render() {
		return(
			<ButtonIcon {...this.props} Icon={Icon} Button={Button} />
		)

	}
}