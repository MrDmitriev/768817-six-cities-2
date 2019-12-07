/* eslint-disable camelcase */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export class ReviewItem extends PureComponent {
  render() {
    const {review} = this.props;
    const ratingPercent = (review.rating / 5) * 100;
    return (
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={review.user.avatar_url} width="54" height="54" alt="Reviews avatar" />
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
          <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
        </div>
      </li>
    );
  }
}

ReviewItem.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
    comment: PropTypes.string,
    rating: PropTypes.number,
  })
};

export default connect()(ReviewItem);

