import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

export class CitiesList extends Component {
  render() {
    const {cities, activeCity, setCity, setOffersList, offers} = this.props;

    const handleCityClick = (e) => {
      const city = e.target.id;
      setCity(city);
      setOffersList(city, offers);
    };
    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((item) => {
            const isActive = activeCity === item;
            return (
              <li className="locations__item" key={item} onClick={handleCityClick}>
                <a className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`} href="#">
                  <span id={item}>{item}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  componentDidMount() {
    const {offers, setDefaultCity} = this.props;
    setDefaultCity(offers);
  }

  componentDidUpdate(prevProps) {
    const {offers, activeCity, setOffersList} = this.props;
    if (prevProps.activeCity !== activeCity) {
      setOffersList(activeCity, offers);
    }
  }
}

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  activeCity: PropTypes.string,
  offers: PropTypes.array,
  setCity: PropTypes.func,
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
