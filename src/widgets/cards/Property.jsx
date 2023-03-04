import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import PropertyDetail from "./PropertyDetail.js";
import "../../../public/css/Property.css";

const Property = () => {
  const [detail, setDetail] = useState(PropertyDetail);

  return (
    <Fragment>
      <section className="property">
        <div className="center">
          <h3>Project Portfolio</h3>
        </div>

        <div className="row">
          {detail.map((detail) => {
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
