import React from 'react';
export * from 'dx-components/src/components/Icon/Icon';
import Icon, {ICON} from 'dx-components/src/components/Icon/Icon';
import {themr} from 'react-css-themr';
import * as css from './Icon.styl';

@themr(ICON, css)
export default class pDesignerIcon extends React.Component {
	static propTypes = Icon.propTypes;

	render() {
		const {name, theme} = this.props;
		return (
			<i className={`${name} ${theme.container}`} />
		);
	}
}

