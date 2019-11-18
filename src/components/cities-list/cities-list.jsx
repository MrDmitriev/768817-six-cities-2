import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

export class CitiesList extends PureComponent {
  render() {
    const {cities, activeItem, onItemClickHandler} = this.props;

    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((item) => {
            const isActive = activeItem === item;
            return (
              <li className="locations__item" key={item} >
                <a
                  className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`}
                  href="#"
                  id={item}
                  onClick={onItemClickHandler}
                >
                  <span>{item}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  componentDidMount() {
    const {cities, setDefaultItem, setOffersList, activeItem, offers} = this.props;
    setDefaultItem(cities[0]);
    setOffersList(activeItem, offers);
  }

  componentDidUpdate(prevProps) {
    const {offers, activeItem, setOffersList} = this.props;
    if (prevProps.activeItem !== activeItem) {
      setOffersList(activeItem, offers);
    }
  }
}

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  activeItem: PropTypes.string,
  offers: PropTypes.array,
  onItemClickHandler: PropTypes.func,
  setDefaultItem: PropTypes.func,
  setOffersList: PropTypes.func,
  setDefaultCity: PropTypes.func,
};

export default connect(
    (state) => ({
      activeCity: state.city,
      state,
    }),
    (dispatch) => ({
      setCity: (city) => dispatch(ActionCreator.setCity(city)),
      setOffersList: (city, offers) => dispatch(ActionCreator.setOffersList(city, offers)),
      setDefaultCity: (offers) => dispatch(ActionCreator.setDefaultCity(offers)),
    })
)(CitiesList);
