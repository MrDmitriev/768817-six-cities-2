export const RatingTitles = [`perfect`, `good`, `not bad`, `badly`, `terribly`];
export const FIRST_CLOSEST_OFFER = 1;
export const NUMBER_CLOSEST_OFFERS = 3;
export const LAST_CLOSEST_OFFER = FIRST_CLOSEST_OFFER + NUMBER_CLOSEST_OFFERS;
export const CardTypes = {
  CITIES: `cities`,
  NEAR_PLACES: `near-places`,
  FAVORITES: `favorites`
};

export const SortTypes = {
  POPULAR: `POPULAR`,
  PRICEASC: `PRICEASC`,
  PRICEDESC: `PRICEDESC`,
  RATEDESC: `RATEDESC`,
};

export const SortTypeLabels = {
  POPULAR: `Popular`,
  PRICEASC: `Price: low to high`,
  PRICEDESC: `Price: high to low`,
  RATEDESC: `Top rated first`,
};

export const SortOptions = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

export const BookmarkActions = {
  ADD: `1`,
  REMOVE: `0`
};

export const Months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

export const ResponseCodes = {
  NO_ACCESS: 401,
  BAD_REQUEST: 400,
};
