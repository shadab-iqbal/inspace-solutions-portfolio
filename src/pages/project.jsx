import { useParams } from "react-router-dom";
import PropertyDetail from "../widgets/cards/PropertyDetail.js";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export function Project() {
  const params = useParams();
  const property = PropertyDetail.find((property) => property.id == params.id);
  const images = property.image;

  return (
    <div className="container">
      <ImageGallery items={images} />
    </div>
  );
}

export default Project;
