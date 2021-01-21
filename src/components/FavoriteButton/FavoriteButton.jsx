import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./FavoriteButton.scss";

class FavoriteButton extends Component {

	render() {
		const {
			width,
			height,
			fill,
			viewBox,
			xmlns,
			d,
			onClick
		} = this.props;

		return (
			<button
				className="Favorite__Btn"
				onClick={onClick}
			>

				<svg
					width={width}
					height={height}
					fill="none"
					viewBox={viewBox}
					xmlns={xmlns}
				>
					<path
						d={d}
						fill={fill}
					/>
				</svg>
			</button>
		)
	}
}

export default FavoriteButton;


FavoriteButton.defaultProps = {
	width: "20",
	height: "17",
	fill: "#FF6767",
	viewBox: "0 0 20 17",
	xmlns: "http://www.w3.org/2000/svg",
}

FavoriteButton.propTypes = {
	onClick: PropTypes.func,
	d: PropTypes.string,
}