import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {CardOffer} from '../card-offer/card-offer.jsx';
import {cardTypes} from '../../constants/constants.js';
import {ActionCreator} from '../../reducers/index.js';

export const CardOffersList = (props) => {
  const {offers, setHoveredOffer} = props;

  return (
    offers.map((item, i) => {
      const uniqueName = `offer-${i + 1}`;
      return <CardOffer
        key={uniqueName}
        offer={item}
        offerName={uniqueName}
        id={item.id}
        cardType={cardTypes.CITIES}
        mouseEnterHandler={setHoveredOffer}
      />;
    })
  );
};

CardOffersList.propTypes = {
  offers: PropTypes.array,
};

export default connect(
    (state) => ({
      offers: state.data.filteredOffers,
    }),
    (dispatch) => ({
      setHoveredOffer: (id) => dispatch(ActionCreator.setHoveredOffer(id)),
    })
)(CardOffersList);
