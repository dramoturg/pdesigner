import React from 'react';
import css from './WorkArea.styl';
import Button from '../Button/Button';
import Widget from '../Widget/Widget';


export default class WorkArea extends React.Component {
	render() {
		return(
			<div className={css.container}>
				<div className={css.header}>
					<Button>Основа</Button>
					<Button>Дизайн</Button>
					<Button>Текст</Button>
					<Button>Загрузить</Button>
				</div>
				<div className={css.content}>
					<Widget header={<div>Выбор основы</div>}>
						<select>
							<option value="27">Мужское</option>
							<option value="32">Женское</option>
							<option value="60">Детям</option>
							<option value="92">Чехлы</option>
							<option value="74">Головные уборы</option>
							<option value="41">Сувениры</option>
							<option value="22">Аксессуары</option>
							<option value="83">Чашки</option>
							<option value="93">Полиграфия</option>
						</select>

						<select>
							<option value="27">Все</option>
							<option value="109">Нижнее белье</option>
							<option value="117">Свитшоты</option>
							<option value="28">Футболки с рукавом</option>
							<option value="31">Футболки long sleeve</option>
							<option value="29">Майки</option>
							<option value="30">Тенниски поло</option>
							<option value="36">Регланы</option>
							<option value="37">Кенгурушки</option>
							<option value="118">Спортивная форма</option>
						</select>

						<div className="tools">
							<div className="sorting">
								<select>
									<option value="popular">Популярные</option>
									<option value="new">Новые</option>
									<option value="priceASC">Сначала дешевые</option>
									<option value="priceDESC">Сначала дорогие</option>
								</select>
							</div>
							<div className="filter">
								<input placeholder="Поиск" />
							</div>
						</div>
					</Widget>
				</div>
			</div>
		)
	}
}