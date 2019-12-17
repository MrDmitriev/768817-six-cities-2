import {slice} from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import {Months, DateCutValues} from '../../constants/constants.js';
import {convertRatingToPercent} from '../../utils/utils.js';

export const ReviewItem = (props) => {
  const {review} = props;
  const year = slice(DateCutValues.START_YEAR, DateCutValues.END_YEAR, review.date);
  const month = slice(DateCutValues.START_MONTH, DateCutValues.END_MONTH, review.date);
  const monthName = Months[month - 1];

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${convertRatingToPercent(review.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date}>{`${monthName} ${year}`}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    date: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
    }),
    comment: PropTypes.string,
    rating: PropTypes.number,
  })
};
