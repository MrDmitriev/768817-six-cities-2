import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {ReviewItem} from '../review-item/review-item.jsx';

export class ReviewsList extends PureComponent {
  render() {
    const {reviews} = this.props;
    return (
      <ul className="reviews__list">
        {reviews && reviews.map((item, i) => {
          return <ReviewItem review={item} key={i} />;
        })}
      </ul>
    );
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.array,
};
