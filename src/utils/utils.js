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

export const getOffersWithCamelCase = (offers) => {
  let formatedOffers = [];

  offers.map((item) => {
    const host = {
      host: {
        isPro: item.host.is_pro,
        id: item.host.id,
        name: item.host.name,
        avatarUrl: item.host.avatar_url
      }
    };
    const maxAdults = {maxAdults: item.max_adults};
    const previewImage = {previewImage: item.preview_image};
    const isFavorite = {isFavorite: item.is_favorite};
    const isPremium = {isPremium: item.is_premium};
    const newObj = Object.assign(item, isFavorite, isPremium, previewImage, maxAdults, host);
    return formatedOffers.push(newObj);
  });

  return formatedOffers;
};
