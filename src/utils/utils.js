import {sort, ascend, descend, prop, propEq, find} from 'ramda';

import {SortTypes} from "../constants/constants.js";

export const filterOffers = (activeCity, offers) => {
  return offers.filter((item) => {
    return item.city.name === activeCity;
  });
};

export const sortOffers = (offers, sortType) => {
  switch (sortType) {
    case SortTypes.PRICEASC:
      const byPriceAsc = ascend(prop(`price`));
      return sort(byPriceAsc, offers);

    case SortTypes.PRICEDESC:
      const byPriceDesc = descend(prop(`price`));
      return sort(byPriceDesc, offers);

    case SortTypes.RATEDESC:
      const byRateDesc = descend(prop(`rating`));
      return sort(byRateDesc, offers);
  }

  return offers;
};

export const findOfferById = (offers, id) => find(propEq(`id`, id))(offers);
