import { useParams } from "react-router-dom";
import ArchitectureProjects from "../widgets/cards/ArchitectureProjects.js";
import InteriorProjects from "../widgets/cards/InteriorProjects.js";
import LandscapeProjects from "../widgets/cards/LandscapeProjects.js";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export function Project() {
  const params = useParams();
  let property;

  if (params.type == "architecture") {
    property = ArchitectureProjects.find((project) => project.id == params.id);
  } else if (params.type == "interior") {
    property = InteriorProjects.find((project) => project.id == params.id);
  } else if (params.type == "landscape") {
    property = LandscapeProjects.find((project) => project.id == params.id);
  }

  const images = property.image;

  return (
    <div className="container">
      <ImageGallery items={images} />
    </div>
  );
}

export default Project;
