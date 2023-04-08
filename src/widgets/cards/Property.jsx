import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import ArchitectureProjects from "./ArchitectureProjects.js";
import InteriorProjects from "./InteriorProjects.js";
import LandscapeProjects from "./LandscapeProjects.js";

import "../../../public/css/Property.css";

const Property = () => {
  const AllProjects = [];

  AllProjects.push(ArchitectureProjects[0]);
  AllProjects.push(InteriorProjects[0]);
  AllProjects.push(LandscapeProjects[0]);
  AllProjects.push(ArchitectureProjects[1]);
  AllProjects.push(InteriorProjects[1]);
  AllProjects.push(LandscapeProjects[1]);

  return (
    <Fragment>
      <section className="property">
        <div className="center">
          <h3>Project Portfolio</h3>
        </div>

        <div className="row">
          {AllProjects.map((project) => {
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

        <div className="flex flex-wrap justify-center sm:justify-start">
          <div className="more-property mx-20 mb-4">
            <a className="property-btn" href="\architecture">
              View Architectures
            </a>
          </div>
          <div className="more-property mx-20 mb-4">
            <a className="property-btn" href="\interior">
              View Interiors
            </a>
          </div>
          <div className="more-property mx-20 mb-4">
            <a className="property-btn" href="\landscape">
              View Landscapes
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Property;
