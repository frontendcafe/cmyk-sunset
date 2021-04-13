import styles from './styles.modules.scss'
import Paragraph from '../../atoms/Paragraph'

const Review = ({review}) => {
  return (
    <div>
      <Paragraph text="review.nombre" />
      <Paragraph text="review.puntaje" />
      <Paragraph text="review.comentario" />
    </div>
  );
};

export default Review;
