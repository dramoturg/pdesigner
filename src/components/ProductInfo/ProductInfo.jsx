import React from 'react';
import css from './ProductInfo.styl';

export default class ProductPreview extends React.Component {
	render() {
		return (
			<div className={css.container}>
				<div className={css.title}>BMW 1</div>
				<div className={css.image}>
					<img src="https://static.prostoprint.com/shops/142/designs/thumb-png-7552d101c06e842b5e5780257735a9b5.png" alt="BMW 1" />
				</div>
				<div className={css.row}>
					<div className={css.colors}>

					</div>
					<div className={css.price}>
						0.00 руб.
					</div>
				</div>
				<div className={css.description}>
					<p>
						Производитель: SOLS, JHK, Stedman.
						Плотность 290 г/кв.м,  флисовая ткань, модернизированный покрой
						("по-фигуре"), воротник, манжеты и низ с добавлением эластана.. .
					</p>
				</div>
			</div>
		)
	}
}