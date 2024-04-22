import React from "react";
import { GLOBAL_X_PADDING } from "../constant";
import TestimonialList from "./TestimonialList";

function Testimonial() {
  const testimonialData = [
    {
      name : "KASHVI GANI",
      stars : "5",
      message : "My dream from childhood which was seeing Egypt and the monuments has been completed and all the credits go to Thomas Cook Kolkata. From the guide to the food, everything was 100% perfect. I hardly missed my food and all the Bengalis food was available as well. We felt we are at home. I had a great time and taking back all the memories, hope to travel again with Thomas Cook Kolkata."
    },
    {
      name : "ISHA BANNERJEE",
      stars : "5",
      message : "I have visited Egypt from Kolkata with Thomas Cook Kolkata. We had a unique experience all because of Thomas Cook Kolkata. We were satisfied with the services, hotels, and buses. The cuisine introduced by Thomas Cook Kolkata especially for Bengalis traveling from Kolkata was fabulous. Especially with Thomas Cook Kolkata, the river cruise was ironic."
    },
    {
      name : "KALANI SARKAR",
      stars : "4",
      message : "We saw very beautiful places while traveling with Thomas Cook Kolkata. Our tour manager respected us as his own parents. I request Thomas Cook if they could reduce the walking distance so that even old age people like with knee problem enjoy the tour as well."
    },
    {
      name : "CHANDRANI BURMAN",
      stars : "4",
      message : "It was a amazing experience along with the complete Indian food. The guide with us explained everything in detail and thanks to Thomas Cook Kolkata."
    },
    {
      name : "SAURAV PAL",
      stars : "4",
      message : "Traveling with Thomas Cook Kolkata was a lifetime memory preserving and had captured everything. We got customized food like Indian and Bengalis food."
    }
  ]
  return (
    <div className={`w-full ${GLOBAL_X_PADDING} py-10 mt-10 sm:mt-24`}>
      <h2 className="font-bold text-2xl text-center">CUSTOMER REVIEWS</h2>
      <p className="text-center text-gray-600 mt-1 pb-10">
        Discover why we&apos;re Kolkata&apos;s top-rated travel agency!
      </p>
      <TestimonialList info={testimonialData}/>
    </div>
  );
}

export default Testimonial;
