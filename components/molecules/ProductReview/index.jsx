import styles from './styles.modules.scss'
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
