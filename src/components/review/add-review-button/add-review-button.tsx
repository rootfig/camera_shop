function AddReviewButton(): JSX.Element {
  return (
    <div className="page-content__headed" data-testid='add-review-button'>
      <h2 className="title title--h3">Отзывы</h2>
      <button
        className="btn"
        type="button"
      >
        Оставить свой отзыв
      </button>
    </div>
  );
}

export default AddReviewButton;
