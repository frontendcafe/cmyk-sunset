import styles from './styles.module.scss'
import ProductDescription from '../../molecules/ProductDescription';
import ProductInfo from '../../molecules/ProductInfo';
import ProductReview from '../../molecules/Review';
import Button from '../../atoms/Button'

const Product = () => {
  return (
    <div>
      <ProductInfo/>
      <ProductDescription/>
      <ProductReview/>
      <Button/>
    </div>
  );
};

export default Product;
