import styles from './styles.module.scss'
import Review from '../Review'

const ProductReview = (reviewsList) => {
  return (
    <div>
      {reviewsList.map(item => {
        <Review review={item} />
      })}
    </div>
  );
};

export default ProductReview;
