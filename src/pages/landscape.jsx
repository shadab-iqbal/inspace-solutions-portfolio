import { Footer } from "@/widgets/layout";
import { Typography } from "@material-tailwind/react";

export function Landscape() {
  return (
    <>
      <div className="">
        <img
          src="../../public/img/website-pics/All render/Sobprna Vumi Resot/5.jpg"
          style={{ height: "800px", width: "100%" }}
        />

        <div className="absolute inset-0 flex items-center justify-center ">
          <Typography
            variant="h1"
            color="white"
            className="property-customed sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span style={{ letterSpacing: "0.7em" }}> LANDSCAPE</span>
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
          LANDSCAPE WORKS SELECTION
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
