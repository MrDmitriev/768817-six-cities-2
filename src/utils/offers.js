import {propEq, find, isEmpty, isNil} from 'ramda';
import sortByDistance from 'sort-by-distance';

export const getClosestOffers = (offers, offerId) => {
  let restructuredOffers = [];
  let targetOffer;
  let sortedByDistance;
  let sortedOffersByDistance = [];

  if (!isNil(offers)) {
    console.log(`offers`, offers);
    offers.map((item) => {
      restructuredOffers.push({id: item.id, longitude: item.location.longitude, latitude: item.location.latitude});
    });
  }

  const opts = {
    yName: `latitude`,
    xName: `longitude`
  };

  if (!isEmpty(restructuredOffers)) {
    targetOffer = find(propEq(`id`, offerId))(restructuredOffers);
    // debugger;
    const origin = {longitude: targetOffer.longitude, latitude: targetOffer.latitude};
    sortedByDistance = sortByDistance(origin, restructuredOffers, opts);
  }

  if (!isNil(sortedByDistance)) {
    sortedByDistance.map((item) => {
      sortedOffersByDistance.push({id: item.id, location: {latitude: item.latitude, longitude: item.longitude}});
    });
  }

  return sortedOffersByDistance;
};
