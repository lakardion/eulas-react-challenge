import { ImageGallery } from "../components/ImageGallery";
import ComponentShow from "../hocs/ComponentShow";
import imageGallery from "../testData/imageGallery.json";

const ImageGalleryShow = () => {
  return (
    <ComponentShow headline="ImageGallery">
      <ImageGallery links={imageGallery} />
    </ComponentShow>
  );
};
export default ImageGalleryShow;
