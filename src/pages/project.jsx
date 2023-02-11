import { useParams } from "react-router-dom";
import PropertyDetail from "../widgets/cards/PropertyDetail.js";

export function Project() {
  const params = useParams();
  const property = PropertyDetail.find((property) => property.id == params.id);

  return (
    <>
      <h1 className="text-blue-500"> The title is: {params.title}</h1>
      <p>{property.location}</p>
      <img src={"../../public/img/interior/" + property.image} />
    </>
  );
}

export default Project;
