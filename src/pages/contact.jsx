import { Fragment } from "react";
import "../../public/css/contact.css";

export function Contact() {
  function sendEmail() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const body = `Name: ${name}  Message: ${message}`;
    window.location.href = `mailto:inspacesolutions@gmail.com?subject=Contact Form&body=${body}`;
  }

  return (
    <>
      <Fragment>
        <section className="contact">
          <div className="contact-heading">
            <h2>Contact Us</h2>
          </div>

          <div className="container-contact">
            <div className="row-contact">
              <div className="column-contact">
                <div className="contact-widget">
                  <div className="contact-widget-item">
                    <div className="icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="text">
                      <h5>Address</h5>
                      <p>Mohammadpur, Dhaka-1207, Bangladesh</p>
                    </div>
                  </div>

                  <div className="contact-widget-item">
                    <div className="icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="text">
                      <h5>Contact Us</h5>
                      <p>+8801795370214</p>
                    </div>
                  </div>

                  <div className="contact-widget-item">
                    <div className="icon">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="text">
                      <h5>Mail</h5>
                      <p>inspacesolutions@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column-contact">
                <div className="contact-form">
                  <form id="contact-form">
                    <input type="text" placeholder="Name" id="name" />
                    <textarea placeholder="Message" id="message"></textarea>
                    <button
                      type="button"
                      className="site-btn bg-blue-400"
                      onClick={sendEmail}
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="row-contact">
              <div className="map-column">
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d257.1516895096099!2d90.36413056609567!3d23.766292843259116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0a6de966345%3A0x2fb7f7dfe1bcff10!2sEurolink%20Council%20Tours%20%26%20Travels!5e0!3m2!1sen!2sbd!4v1676440590044!5m2!1sen!2sbd"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </>
  );
}

export default Contact;
