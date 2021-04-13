import styles from './styles.modules.scss'
import ProductDescription from '../../molecules/ProductDescription';
import ProductInfo from '../../molecules/ProductInfo';
import Review from '../../molecules/Review';
import Button from '../../atoms/Button'

const Product = () => {
  return (
    <div>
      <ProductInfo/>
      <ProductDescription/>
      <Review/>
      <Button/>
    </div>
  );
};

export default Product;
