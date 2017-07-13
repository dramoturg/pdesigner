import React from 'react';
import PropTypes from 'prop-types';

export default class Svg extends React.Component {
	static propTypes = {
		children: PropTypes.object,
		viewBox: PropTypes.string,
	};

	render() {
		const {children, viewBox} = this.props;

		return (
			<div>
				<svg viewBox={viewBox}
					 xmlns="http://www.w3.org/2000/svg">
					{children}
				</svg>
			</div>
		);
	}
}