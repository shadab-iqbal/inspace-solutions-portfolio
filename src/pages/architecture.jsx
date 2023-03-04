import { Footer } from "@/widgets/layout";
import { Typography } from "@material-tailwind/react";
import "../../public/css/Property.css";

export function Architecture() {
  return (
    <>
      {/* <div className="">
        <img
          src="../../public/img/website-pics/Architechture/Subarnabhumi Resort- concept for Hotel building/05.jpg"
          style={{ height: "800px", width: "100%" }}
        />
      </div> */}

      <div>
        <img
          src="../../public/img/website-pics/Architechture/Subarnabhumi Resort- concept for Hotel building/05.jpg"
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

      <div id="footer" className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}
