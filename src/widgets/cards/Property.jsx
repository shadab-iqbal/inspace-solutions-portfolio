import React, { Fragment, useState } from "react";
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
                      <img src={detail.Image} alt="Palace" />
                    </div>

                    <div className="property-content">
                      <h3>{detail.heading}</h3>
                      <div className="mark">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>{detail.span}</span>
                      </div>
                      <span className="amount">{detail.amount}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="more-property">
          <a className="property-btn" href="#">
            More Properties
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default Property;
