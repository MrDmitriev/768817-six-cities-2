import {createSelector} from 'reselect';
import {isNil, isEmpty, propEq, find, slice} from 'ramda';
import sortByDistance from 'sort-by-distance';

import {getActviveCity, getActiveOffer} from './user.js';
import {firstClosestOffer, lastClosestOffer} from '../constants/constants.js';

export const getOffers = (state) => state.data.offers;
export const getReviews = (state) => state.data.offerReviews;
export const getOffer = (state, id) => state.data.offers[id - 1];
export const getResponses = (state) => state.data.responses;
export const getResponseAuth = (state) => state.data.responses.auth;

export const getFilteredOffers = createSelector(
    getActviveCity,
    getOffers,
    (activeCity, offers) => {
      return offers.filter((item) => {
        return item.city.name === activeCity;
      });
    }
);

export const getClosestOffers = createSelector(
    getFilteredOffers,
    getActiveOffer,
    (offers, offerId) => {

      let restructuredOffers = [];
      let targetOffer;
      let sortedByDistance;
      let sortedOffersByDistance = [];
      if (!isNil(offers)) {
        offers.map((item) => {
          restructuredOffers.push({id: item.id, longitude: item.location.longitude, latitude: item.location.latitude});
        });
      }

      const opts = {
        yName: `latitude`,
        xName: `longitude`
      };

      if (!isEmpty(restructuredOffers) && !isNil(offerId)) {

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
      return slice(firstClosestOffer, lastClosestOffer, sortedOffersByDistance);
    }
);
