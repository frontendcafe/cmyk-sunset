import styles from './styles.module.scss'
import Paragraph from '../../atoms/Paragraph'

const ProductDescription = () => {
  return (
    <div>
      <Paragraph text="Páginas" />
      <Paragraph text="Personajes" />
      <Paragraph text="Creador" />
      <Paragraph text="Historias" />
      <Paragraph text="Puntuación" />
    </div>
  );
};

export default ProductDescription;
