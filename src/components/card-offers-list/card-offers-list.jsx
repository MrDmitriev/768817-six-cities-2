import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {CardOffer} from '../card-offer/card-offer.jsx';
import {cardTypes} from '../../constants/constants.js';

export const CardOffersList = (props) => {
  const {offers} = props;

  return (
    offers.map((item, i) => {
      const uniqueName = `offer-${i + 1}`;
      return <CardOffer
        key={uniqueName}
        offer={item}
        offerName={uniqueName}
        id={item.id}
        cardType={cardTypes.CITIES}
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
    })
)(CardOffersList);
