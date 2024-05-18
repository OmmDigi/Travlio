import React from "react";
import ReadBlogLayout from "../ReadBlogLayout";
import { Metadata } from "next";
import { BASE_URL } from "@/app/constant";

export const metadata: Metadata = {
  title: "Andaman Tour Package from Kolkata |Travlio",
  description:
    "Discover Travlio&apos;s exclusive Andaman tour package from Kolkata. Read this blog to learn about the beaches, adventure activities, and rich cultural heritage.",
  alternates: {
    canonical: BASE_URL + "/blogs/andaman-tour-package-from-kolkata",
  },
};

export default function page() {
  return (
    <section className="w-[1300px] text-justify sm:w-full">
      <ReadBlogLayout
        bannerimage="/blogs/blog5.webp"
        heading="Andaman tour package from Kolkata"
        author="Admin"
        date="18th May’24"
        shortdescription="Why are sea destinations so lucrative among travelers? Well, firstly, they offer a diverse range of attractions, from pristine beaches to vibrant marine life, making them appealing to a wide range of travelers."
      >
        <p className="mt-6 font-medium">
          Why are sea destinations so lucrative among travelers? Well, firstly,
          they offer a diverse range of attractions, from pristine beaches to
          vibrant marine life, making them appealing to a wide range of
          travelers. Additionally, nearshore destinations often boast luxurious
          resorts and amenities, catering to those seeking relaxation and
          indulgence. Furthermore, maritime activities such as snorkeling, scuba
          diving, and sailing attract adventure enthusiasts, while cultural
          experiences like seafood dining and local festivals appeal to those
          interested in immersing themselves in the local culture.
        </p>
        <p className="mt-6 font-medium">
          Considering the Andaman and Nicobar islands, the natural beauty of the
          blue sea, with its azure waters and picturesque coastlines, also
          serves as a backdrop for romantic getaways and honeymoon vacations.
          How often have we not come across people praising its white sand
          beaches and exotic sea shell collections? Additionally, sea
          destinations like that of Andaman, often have favorable climates,
          offering year-round appeal for tourists seeking to escape cold winters
          or humid summers elsewhere. Andaman has been quite a popular tour
          destination among foreigners as well. Kolkata being closest to Port
          Blair (flight distance covered) sees a surging demand across Andaman
          tour packages. Overall, the combination of natural beauty, diverse
          attractions, and recreational opportunities makes such sea
          destinations highly lucrative in the tourism industry.
        </p>
        <h3 className="font-semibold text-lg tracking-wider">
          Let’s explore some comprehensive Itineraries around Andaman and
          Nicobar Islands tour packages from Kolkata:
        </h3>
        <p className="font-medium">
          Have time crunch and wanna explore the islands over the weekend? Here
          is the perfect plan for a 3-day itinerary in the Andaman Islands. You
          can explore a mix of stunning beaches, water activities, and a glimpse
          into the local culture.
        </p>
        <h2 className="font-semibold text-lg tracking-wider mt-6">
          Here&apos;s a well-curated plan:
        </h2>
        {/* <ul className="w-full py-10 space-y-8"> */}
        {/* {datas.map((item, index) => (
            <Point key={index} title={item.title} subtitle={item.subtitle} />
          ))} */}
        {/* </ul> */}
        <h2 className="font-semibold text-lg tracking-wider mt-6">Day 1:</h2>
        <p>
          <span className="font-semibold text-teal-700">Morning:</span>
          <br /> Arrive at Port Blair, the capital city. Visit the Cellular
          Jail, a historical landmark that offers insights into India&apos;s freedom
          struggle. <br />
          <span className="font-semibold text-teal-700">Afternoon:</span>
          <br />
          Head to Corbyn&apos;s Cove Beach for some relaxation and water sports like
          jet skiing or banana boat rides. <br />
          <span className="font-semibold text-teal-700">Evening:</span>
          <br /> Enjoy the Light and Sound Show at Cellular Jail, which narrates
          the story of the Indian freedom fighters.
        </p>
        <h2 className="font-semibold text-lg tracking-wider mt-6">Day 2:</h2>
        <p>
          <span className="font-semibold text-teal-700">Morning:</span>
          <br /> Take a ferry to Ross Island, once the administrative
          headquarters of the British. Explore its ruins, including the
          British-era buildings and a small museum. <br />
          <span className="font-semibold text-teal-700">Afternoon:</span>
          <br /> Visit North Bay Island for snorkeling or scuba diving to
          explore the colorful marine life. <br />
          <span className="font-semibold text-teal-700">Evening:</span>
          <br /> Return to Port Blair and stroll around the local markets for
          souvenirs and authentic Andamanese cuisine. Do get some sea-shell key
          rings, conches, and coconut shell decorative items!
        </p>
        <h2 className="font-semibold text-lg tracking-wider mt-6">Day 3:</h2>
        <p>
          <span className="font-semibold text-teal-700">Morning:</span>
          <br /> Embark on a day trip to Havelock Island, known for its pristine
          beaches, particularly Radhanagar Beach, often considered one of Asia&apos;s
          best beaches. <br />
          <span className="font-semibold text-teal-700">Afternoon:</span>
          <br /> Enjoy water activities like swimming, sunbathing, or simply
          soaking in the scenic beauty. Do not forget to smother yourself with a
          truckload of sunscreen lotion!
          <br />
          <span className="font-semibold text-teal-700">Evening:</span>
          <br /> Return to Port Blair, perhaps catching a mesmerizing sunset
          along the way.
        </p>
        <h3 className="font-semibold text-lg tracking-wider mt-6">
          Have your week-long leaves been approved by your boss? Well, here you
          go with a 6-7 day long Andaman getaway tour layout.
        </h3>
        <h2 className="font-semibold text-lg tracking-wider mt-6">Day 1:</h2>
        <p className="text-justify">
          Arrival at Port Blair; arrive at Veer Savarkar International Airport.
          Check into your hotel. Visit Cellular Jail National Memorial for a
          light and sound show in the evening.
        </p>
        <h2 className="font-semibold text-lg tracking-wider mt-6">Day 2:</h2>
        <p className="text-justify">
          Port Blair Sightseeing includes visiting Corbyn&apos;s Cove Beach for water
          sports and relaxation. Explore the Anthropological Museum to learn
          about the indigenous tribes of Andaman. Visit Samudrika Naval Marine
          Museum for insights into the marine life of the region. Shop for
          souvenirs at Aberdeen Bazaar. Wood carvings, coconut shell
          cups-spoons-bowls, and pearl jewelry are to die for!
        </p>
        <h2 className="font-semibold text-lg tracking-wider mt-6">Day 3:</h2>
        <p className="text-justify">
          Ross Island and North Bay Island; take a boat ride to Ross Island, and
          explore its historic ruins and scenic views. Don’t forget to munch on
          some fresh and juicy exotic, locally sourced fruits there. Visit North
          Bay Island for snorkeling, scuba diving, and underwater sea walk.
          Return to Port Blair in the evening.
        </p>
        <h2 className="font-semibold text-lg tracking-wider mt-6">Day 4:</h2>
        <p className="text-justify">
          Havelock Island; take a ferry to Havelock Island. Visit Radhanagar
          Beach, known for its pristine white sand and turquoise waters. Relax
          and enjoy beach activities.
        </p>
        <h2 className="font-semibold text-lg tracking-wider mt-6">Day 5:</h2>
        <p className="text-justify">
          Havelock Island; explore Elephant Beach for snorkeling and swimming.
          Visit Kalapathar Beach for sunset views. Enjoy water sports like jet
          skiing, kayaking, and banana boat rides.
        </p>
        <h2 className="font-semibold text-lg tracking-wider mt-6">Day 6:</h2>
        <p className="text-justify">
          Neil Island; take a ferry to Neil Island. Visit Natural Bridge, a
          unique geological formation; good for photo enthusiasts! Relax at
          Bharatpur Beach or Laxmanpur Beach. Return to Port Blair in the
          evening.
        </p>
        <h2 className="font-semibold text-lg tracking-wider mt-6">Day 7:</h2>
        <p className="text-justify">
          Departure depends on your flight timing, you can explore local markets
          for last-minute shopping or relax at the hotel.Transfer to Veer
          Savarkar International Airport for departure.
        </p>

        <h2 className="font-semibold text-lg tracking-wider mt-6">
          Conclusion
        </h2>
        <p className="mt-5 text-justify">
          You can customize your Andaman tour package from Kolkata. Find offers
          across the Andaman tour package from Kolkata by ship which you wanna
          grab at its first glimpse. andaman family tour package from Kolkata
          could be affordable and would not burn a hole in your pocket. You can
          scroll through our website for guidance across an array of cheap
          Andaman tour packages from Kolkata.
        </p>
        <p className="mt-5 text-justify">
          Before laying out and deciding on your Andaman tour packages keep in
          mind the weather conditions, as activities like snorkeling and diving
          are weather-dependent. andaman and Nicobar tour packages are carefully
          designed and premised on some ‘to-dos’ across this island group. Cash
          availability, mobile connectivity, health and safety especially with
          water sports, weather extremities, and permit requirements are there
          to be looked into when you plan your Andaman family tour packages.
          While Couples often opt for an Andaman tour package by cruise; you can
          find some of the best Andaman tour packages on our website which are
          carefully crafted by experienced holiday hosts. To find the
          best-suited Andaman tour package price you must align your allocated
          budget with the number of days bracket you would want to travel and
          check the same on our page or send in inquiries for a memorable trip
          along the shore. For that unforgettable and indelible honeymoon
          experience around soft white sand and warm sea water, do check
          exciting offers around andaman couple tour packages on our website.
        </p>
      </ReadBlogLayout>
    </section>
  );
}
