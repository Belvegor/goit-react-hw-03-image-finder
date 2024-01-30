import styles from './styles.module.css';

const ImageGalleryItem = ({ imageUrl, onClick }) => {
    return (
      <li className={styles.ImageGalleryItem} onClick={onClick}>
        <img src={imageUrl} alt="" />
      </li>
    );
  };
  
  export default ImageGalleryItem;