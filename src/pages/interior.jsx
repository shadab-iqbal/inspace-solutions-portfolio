import { Footer } from "@/widgets/layout";
import { Typography } from "@material-tailwind/react";
import "../../public/css/Property.css";
import InteriorProjects from "../widgets/cards/InteriorProjects.js";
import { Link } from "react-router-dom";

export function Interior() {
  return (
    <>
      <div className="">
        <img
          // src="../../public/img/interior/interior_4.jpg"
          src="../../public/img/interior/Interior Residance/Sujon Vaia/41.jpg"
          style={{ height: "800px", width: "100%" }}
        />

        <div className="absolute inset-0 flex items-center justify-center ">
          <Typography
            variant="h1"
            color="white"
            className="property-customed sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span style={{ letterSpacing: "0.7em" }}> INTERIOR</span>
          </Typography>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center py-10">
        <h1
          class="mb-4 text-3xl font-bold"
          style={{
            fontFamily: "Lato",
            fontWeight: "100",
            letterSpacing: "0.1em",
            fontSize: "1.76471rem",
            lineHeight: "1.33",
          }}
        >
          INTERIOR WORKS SELECTION
        </h1>
        <p class="text-lg font-light">
          Step inside our world of interior design.
        </p>
      </div>

      <div className="row mx-auto max-w-screen-lg items-center justify-center px-4 lg:px-6 xl:px-8">
        {InteriorProjects.map((project) => {
          return (
            <div className="column">
              <div className="single-property">
                <div className="card">
                  <div className="property-thumb">
                    <img src={project.image[0].original} alt="Palace" />
                  </div>
                  <div className="property-content">
                    <h3>{project.heading}</h3>
                    <div className="mark">
                      <span>{project.title}</span>
                      <br />
                      <i class="fa-solid fa-location-dot"></i>
                      <span>{project.location}</span>
                    </div>
                    <Link
                      to={
                        "/projects/" +
                        project.type +
                        "/" +
                        project.title +
                        "/" +
                        project.id
                      }
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
    </>
  );
}
