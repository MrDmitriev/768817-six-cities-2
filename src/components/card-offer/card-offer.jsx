import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {CardTypes, BookmarkActions} from '../../constants/constants.js';
import {convertRatingToPercent} from '../../utils/utils.js';

export const CardOffer = (props) => {
  const {offer, onMouseEnter, cardType, onBookmarkClick} = props;
  const {title, price, type, images, rating, isFavorite, id, isPremium} = offer;

  const handleMouseEnter = (e) => {
    return onMouseEnter && onMouseEnter(e.currentTarget.id);
  };

  const handleBookmarkClick = () => {
    const {ADD, REMOVE} = BookmarkActions;
    const status = isFavorite ? REMOVE : ADD;
    onBookmarkClick(id, status);
  };

  return (
    <article className={`${cardType}__${cardType === CardTypes.CITIES ? `place-` : ``}card place-card`}>
      {isPremium && (<div className="place-card__mark">
        <span>Premium</span>
      </div>)}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <img
          className="place-card__image"
          src={images[0]}
          width="260"
          height="200"
          alt="Place image"
          id={offer.id}
          onMouseEnter={handleMouseEnter}
        />
      </div>
      <div className={`${cardType === CardTypes.FAVORITES ? `__card-info` : ``} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button place-card__bookmark-button${isFavorite ? `--active` : ``} button`}
            type="button"
            onClick={handleBookmarkClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${convertRatingToPercent(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{pathname: `/offer/${offer.id}`}}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

CardOffer.propTypes = {
  offerName: PropTypes.string,
  cardType: PropTypes.string,
  onMouseEnter: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    })
  }),
  offer: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string,
    images: PropTypes.array,
    id: PropTypes.number,
    rating: PropTypes.number,
    isFavorite: PropTypes.bool,
    isPremium: PropTypes.bool,
  }),
  onBookmarkClick: PropTypes.func,
};
