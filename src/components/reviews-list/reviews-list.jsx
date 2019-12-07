import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import ReviewItem from '../review-item/review-item.jsx';

export class ReviewsList extends PureComponent {
  render() {
    const {reviews} = this.props;
    return (
      <ul className="reviews__list">
        {reviews.map((item) => {
          return <ReviewItem review={item} key={item.id} />;
        })}
      </ul>
    );
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.array,
};

export default connect()(ReviewsList);
