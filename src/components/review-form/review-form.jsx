import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {isNil} from 'ramda';

import {ratingTitles} from '../../constants/constants.js';
import {ActionCreator} from '../../reducers/index.js';
import {getFormData} from '../../selectors/user.js';

export class ReviewForm extends PureComponent {
  render() {
    const {formData} = this.props;
    const {rating, comment} = formData;
    const ratingChangeHanler = (e) => {
      const {updateFieldValue} = this.props;
      const {name, value} = e.currentTarget;
      updateFieldValue(name, value);
    };

    const validateForm = () => {
      return isNil(rating) || isNil(comment) || comment.length < 50;
    };

    const isButtonDesabled = validateForm();
    const formSubmitHandler = (e) => {
      e.preventDefault();
      this.props.sendReview();
      this.props.resetForm();
    };

    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={formSubmitHandler}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {ratingTitles.map((item, i) => {
            const value = 5 - i;
            const count = i + 1;
            const isChecked = Number(rating) === value;
            return (
              <React.Fragment key={item}>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={value}
                  id={`${count}-stars`}
                  type="radio"
                  onChange={ratingChangeHanler}
                  checked={isChecked}
                />
                <label htmlFor={`${count}-stars`} className="reviews__rating-label form__rating-label" title={item}>
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            );
          })}
        </div>
        <textarea
          value={comment || ``}
          onChange={ratingChangeHanler}
          className="reviews__textarea form__textarea"
          id="review"
          name="comment"
          placeholder="Tell how was your stay, what you like and what can be improved"
          minLength={50}
          maxLength={300}
        ></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={isButtonDesabled}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  formData: PropTypes.shape({
    comment: PropTypes.string,
    rating: PropTypes.string,
  }),
  updateFieldValue: PropTypes.func,
  resetForm: PropTypes.func,
};

export default connect(
    (state) => ({
      formData: getFormData(state),
    }),
    (dispatch) => ({
      updateFieldValue: (fieldName, value) => dispatch(ActionCreator.updateFieldValue(fieldName, value)),
      resetForm: () => dispatch(ActionCreator.resetForm()),
      sendReview: () => dispatch(ActionCreator.sendReview()),
    })
)(ReviewForm);
