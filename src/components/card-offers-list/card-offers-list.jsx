import React from 'react';
import PropTypes from 'prop-types';
import {CardOffer} from '../card-offer/card-offer.jsx';

export const CardOffersList = (props) => {
  const {offers, onMouseEnterHandler} = props;

  return (
    offers.map((item, i) => {
      const uniqueName = `offer-${i + 1}`;
      return <CardOffer key={uniqueName} offer={item} offerName={uniqueName} onMouseEnterHandler={onMouseEnterHandler} />;
    })
  );
};

CardOffersList.propTypes = {
  offers: PropTypes.array,
};
