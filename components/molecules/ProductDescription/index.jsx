import styles from './styles.modules.scss'
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
