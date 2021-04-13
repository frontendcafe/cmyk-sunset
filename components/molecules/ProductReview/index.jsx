import styles from './styles.modules.scss'
import Paragraph from '../../atoms/Paragraph'

const ProductReview = () => {
  return (
    <div>
      <Paragraph text="Nombre" />
      <Paragraph text="Puntaje" />
      <Paragraph text="Comentario" />
    </div>
  );
};

export default ProductReview;
