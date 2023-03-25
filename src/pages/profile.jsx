import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Profile() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/public/img/profile_background.jpeg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      {/* <Avatar
                        src="/public/img/"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      /> */}
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                 <a href="">
                  <Button className="bg-blue-400" >Conntect</Button>
                 </a>                 
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        4
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Architecture Projects
                      </Typography>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        28
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Interior Projects
                      </Typography>
                    </div>
                    <div className="p-3 text-center lg:mr-4">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        8
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Landscape Projects
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  Inspace Solutions
                </Typography>
                <div className="mb-16 flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Mohammadpur, Dhaka, Bangladesh
                  </Typography>
                </div>
                <div class="flex justify-center items-center">
                    <img src="../../public/img/CEO_ProfilePic.png" alt="Your image" class="rounded-full h-40 w-40 object-cover mb-5"/>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    CEO - Mohammad Ali Ripon
                  </Typography>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                    With over 15 years of experience in the interior design, architecture, and landscape industry, I am dedicated to providing exceptional solutions to my clients. As the proprietor of Inspace Solutions, I have successfully delivered numerous projects to the satisfaction of my clients. From residential to commercial spaces, I specialize in creating innovative and functional designs that exceed expectations. My experience and knowledge of the latest trends and technologies in the industry ensure that my clients receive the best possible solutions that are both aesthetically pleasing and practical. I am committed to delivering projects on time and within budget, while maintaining the highest standards of quality.
                    </Typography>
                    
                  </div>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                    Inspace Solutions is a leading interior design and architecture firm located 
                    in the bustling city of Dhaka, Bangladesh. Our team of creative and experienced
                    professionals have built a reputation for delivering outstanding projects that reflect
                    our clients' unique vision and personality.

                    At Inspace Solutions, we take great pride in our ability to provide comprehensive design solutions for a variety of spaces. From residential and commercial interiors to landscape design, we have the expertise and resources to bring your ideas to life. We work closely with our clients throughout the entire design process to ensure that every detail is accounted for and the end result exceeds expectations.
                    Inspace Solutions has been recognized for its outstanding design work, earning numerous accolades and awards over the years. We are honored to have worked with many satisfied clients, and we look forward to the opportunity to collaborate with you on your next project. Contact us today to learn more about our services and to schedule a consultation with one of our designers.
                    </Typography>
                    <Button variant="text">Show more</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Profile;
