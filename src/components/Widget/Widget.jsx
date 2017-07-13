import React from 'react';
import PropTypes from 'prop-types';
import {PURE} from 'dx-util/src/react/pure';
import {themr} from 'react-css-themr';
import css from './Widget.styl';

export const WIDGET = Symbol('Widget');
export const WIDGET_PROP_TYPES = {
	children: PropTypes.node,
	header: PropTypes.node,
	theme: PropTypes.shape({
		container: PropTypes.string,
		header: PropTypes.string,
		body: PropTypes.string,
		resizeHandler: PropTypes.string
	})
};

@PURE
@themr(WIDGET, css)
export default class Widget extends React.Component {
	static propTypes = WIDGET_PROP_TYPES;

	render() {
		const {theme, children, header} = this.props;
		return (
			<div className={theme.container}>
				<div className={theme.header}>
					{header}
				</div>
				<div className={theme.body}>
					{children}
				</div>
			</div>
		);
	}
}