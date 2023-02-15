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

        <div className="more-property">
          <a className="property-btn mb-12" href="#">
            More Properties
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default Property;
