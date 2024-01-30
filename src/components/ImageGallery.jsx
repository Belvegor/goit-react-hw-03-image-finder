import ImageGalleryItem from './ImageGalleryItem';
import styles from './styles.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} imageUrl={image.webformatURL} onClick={() => onImageClick(image.largeImageURL)} />
      ))}
    </ul>
  );
};

export default ImageGallery;