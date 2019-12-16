import {slice} from 'ramda';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Months} from '../../constants/constants.js';

export class ReviewItem extends PureComponent {
  render() {
    const {review} = this.props;
    const ratingPercent = (Math.round(review.rating) / 5) * 100;
    const year = slice(0, 4, review.date);
    const month = slice(5, 7, review.date);
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
              <span style={{width: `${ratingPercent}%`}}></span>
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
  }
}

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
