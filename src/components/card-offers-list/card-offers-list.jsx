import React from 'react';
import PropTypes from 'prop-types';
import {CardOffer} from '../card-offer/card-offer.jsx';

export const CardOffersList = (props) => {
  const {offers, onMouseEnterHandler} = props;

  return (
    offers.map((item, i) => {
      return <CardOffer key={`offer-${i + 1}`} offer={item} offerName={`offer-${i + 1}`} onMouseEnterHandler={onMouseEnterHandler} />;
    })
  );
};

CardOffersList.propTypes = {
  offers: PropTypes.array,
};
