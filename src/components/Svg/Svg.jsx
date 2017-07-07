import React from 'react'

export default class Svg extends React.Component {
	static propTypes = {
		children: React.PropTypes.object,
		viewBox: React.PropTypes.string,
	};

	render() {
		const {children, viewBox} = this.props
		return (
			<div className={styles.root}>
				<svg
					viewBox={viewBox}
					xmlns="http://www.w3.org/2000/svg"
					{children}
				</svg>
			</div>
		)
	}
}