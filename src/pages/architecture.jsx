import { PageTitle, Footer } from "@/widgets/layout";
import { Typography } from "@material-tailwind/react";
import "../../public/css/Property.css";
import PropertyDetail from "../widgets/cards/PropertyDetail.js";
import { Link } from "react-router-dom";

export function Architecture() {
  return (
    <div>
      <div>
        <img
          src="../../public/img/architecture/Subarnabhumi Resort- concept for Hotel building/05.jpg"
          style={{ height: "800px", width: "100%" }}
        />

        <div className="absolute inset-0 flex items-center justify-center ">
          <Typography
            variant="h1"
            color="white"
            className="property-customed sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span style={{ letterSpacing: "0.7em" }}> ARCHITECTURE</span>
          </Typography>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center py-10">
        <h1 class="property-customed mb-4 text-3xl">
          ARCHITECTURAL WORKS SELECTION
        </h1>
        <p class="text-lg font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="row mx-auto max-w-screen-lg items-center justify-center px-4 lg:px-6 xl:px-8">
        {PropertyDetail.map((detail) => {
          return (
            <div className="column">
              <div className="single-property">
                <div className="card">
                  <div className="property-thumb">
                    <img
                      src={"../../../public/img/interior/" + detail.image}
                      alt="Palace"
                    />
                  </div>
                  <div className="property-content">
                    <h3>{detail.heading}</h3>
                    <div className="mark">
                      <i class="fa-solid fa-location-dot"></i>
                      <span>{detail.location}</span>
                    </div>
                    <Link
                      to={"/projects/" + detail.id + "/" + detail.heading}
                      className="amount"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div id="footer" className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </div>
  );
}
