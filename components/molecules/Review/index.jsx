import styles from './styles.module.scss';

const Review = ({name='Galindez', rating='7.6 de 10', comment='"Gran Comic"', size='desktop'}) => {
  return (
    <div className={`${styles.box} ${styles[size]}`}>
      <p className={`${styles.nameRating}`}>{`${name} - ${rating}`}</p>
      <p  className={`${styles.comment}`}>{comment}</p>
    </div>
  );
};

export default Review;
