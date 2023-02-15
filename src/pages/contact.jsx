import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";
import { Fragment } from "react";
import "../../public/css/contact.css";

export function Contact() {
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
                  <form action="#">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Comment"></textarea>
                    <button
                      style={{ backgroundColor: "#287ff9" }}
                      type="submit"
                      className="site-btn"
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

{
  /* <img
src="/img/background-2.jpg"
className="absolute inset-0 z-0 h-full w-full object-cover"
/>
<div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
<div className="container mx-auto p-4">
<Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
  <CardHeader
    variant="gradient"
    color="blue"
    className="mb-4 grid h-28 place-items-center"
  >
    <Typography variant="h3" color="white">
      Sign Up
    </Typography>
  </CardHeader>
  <CardBody className="flex flex-col gap-4">
    <Input variant="standard" label="Name" size="lg" />
    <Input variant="standard" type="email" label="Email" size="lg" />
    <Input
      variant="standard"
      type="password"
      label="Password"
      size="lg"
    />
    <div className="-ml-2.5">
      <Checkbox label="I agree the Terms and Conditions" />
    </div>
  </CardBody>
  <CardFooter className="pt-0">
    <Button variant="gradient" fullWidth>
      Sign Up
    </Button>
    <Typography variant="small" className="mt-6 flex justify-center">
      Already have an account?
      <Link to="/sign-in">
        <Typography
          as="span"
          variant="small"
          color="blue"
          className="ml-1 font-bold"
        >
          Sign in
        </Typography>
      </Link>
    </Typography>
  </CardFooter>
</Card>
</div>
<div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
<SimpleFooter />
</div> */
}
