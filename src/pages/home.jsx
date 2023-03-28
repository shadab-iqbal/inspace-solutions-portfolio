import React, { Fragment, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import Property from "../widgets/cards/Property";
import "../../public/css/carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function Home() {
  return (
    <>
      <div className="relative mb-10 flex content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center opacity-90 ">
          <Carousel
            dynamicHeight={true}
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showThumbs={false}
          >
            <div>
              <img src="../../public/img/Carousel 1.svg" />
            </div>
            <div>
              <img src="../../public/img/Carousel 2.svg" />
            </div>
            <div>
              <img src="../../public/img/Carousel 3.svg" />
            </div>
            <div>
              <img src="../../public/img/Carousel 4.svg" />
            </div>
            
          </Carousel>
        </div>

        <div className="max-w-8xl container relative mx-auto mt-24 pt-16">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-20 font-black text-red-50"
              >
                
              </Typography>
              <Typography variant="lead" className="text-red-50 opacity-10 font-sans text-2xl invisible">
              Inspace Solutions creates inspiring spaces that transform lives. 
              We specialize in designing and building innovative and functional 
              spaces for residential and commercial projects.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-40 bg-gray-50 px-4 pb-20 pt-10">
        <div className="container mx-auto">
          <div className="mt-10 grid grid-cols-1 gap-6 pt-5 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-20 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Why choose Inspace Solutions for your work?
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                At Inspace Solutions, we are committed to delivering exceptional solutions 
                that exceed our clients' expectations. We believe that good design is about 
                more than just aesthetics - it's about creating spaces that inspire and transform lives. 
                When you choose to work with us, you can expect nothing but the best. Our team of 
                experienced designers, architects, and landscapers are dedicated to delivering 
                innovative and functional designs that are tailored to your specific needs. 
                We pride ourselves on our attention to detail, commitment to quality, and ability 
                to deliver projects on time and within budget. Let's work together to create a space 
                that truly reflects your vision and exceeds your expectations.
              </Typography>
              <Button variant="outlined">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="../../public/img/Home_card_img.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Property />

      <section className="relative bg-gray-200 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-8 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div id="footer" className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
