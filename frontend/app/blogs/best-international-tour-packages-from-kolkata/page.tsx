import React from "react";
import ReadBlogLayout from "../ReadBlogLayout";
import Point from "../Point";
import { Metadata } from "next";
import { BASE_URL } from "@/app/constant";
import LinkToTourPackage from "@/app/components/LinkToTourPackage";

const datas = [
  {
    title: "Cultural Diversity",
    subtitle:
      "Kolkata&apos;s cosmopolitan vibe fosters an appreciation for diverse cultures, making travelers open to embracing new experiences abroad.",
  },
  {
    title: "Historical Significance",
    subtitle:
      "As a city steeped in history, Kolkata instills a curiosity for exploring other countries&apos; historical sites and landmarks.",
  },
  {
    title: "Connectivity",
    subtitle:
      "Kolkata&apos;s well-connected international airport makes it convenient to embark on journeys to various destinations worldwide.",
  },
  {
    title: "Educational Opportunities",
    subtitle:
      "Traveling abroad provides opportunities for learning about different societies, languages, and customs, broadening one&apos;s perspective and knowledge.",
  },
  {
    title: "Culinary Exploration",
    subtitle:
      "Kolkata&apos;s and India’s love for food translates into a desire to sample cuisines from around the world, making foreign travel a gastronomic adventure.",
  },
  {
    title: "Personal Growth",
    subtitle:
      "Traveling abroad fosters personal growth by challenging comfort zones, fostering independence, and promoting cultural understanding.",
  },
  {
    title: "Networking and Career Opportunities",
    subtitle:
      "Foreign travel opens doors to networking and career opportunities, whether through international conferences, workshops, or simply by exploring new markets and industries.",
  },
  {
    title: "Natural Beauty",
    subtitle:
      "From picturesque landscapes to stunning beaches, foreign destinations offer unparalleled natural beauty, enticing travelers from Kolkata to explore beyond their borders.",
  },
  {
    title: "Overall",
    subtitle:
      "Foreign travel from Kolkata offers a blend of cultural immersion, historical intrigue, and personal growth, making it an enticing prospect for adventurous souls.",
  },
];

export const metadata: Metadata = {
  title: "Best International Tour Packages from Kolkata | Travlio",
  description:
    "Discover the best international tour packages from Kolkata with Travlio. Read this blog to plan your dream vacation today. Unforgettable adventures await! ",
  authors: [{ name: "Travlio" }],
  alternates: {
    canonical:
      BASE_URL + "/blogs/best-international-tour-packages-from-kolkata",
  },
};

export default function page() {
  return (
    <section className="w-[1300px] text-justify sm:w-full">
      <ReadBlogLayout
        bannerimage="/blogs/blog6.webp"
        heading="Best International Tour Packages From Kolkata"
        author="Admin"
        date="18th May’24"
        shortdescription="Traveling abroad from Kolkata, India offers a myriad of enriching experiences that blend history, culture, and adventure. Kolkata rather than India’s rich colonial heritage serves as a gateway to explore the world beyond its borders. Here are a few reasons why foreign travel from Kolkata is enticing…"
      >
        <ul className="w-full py-10 space-y-8">
          {datas.map((item, index) => (
            <Point key={index} title={item.title} subtitle={item.subtitle} />
          ))}
        </ul>

        <h2 className="mt-6 font-semibold">
          EXCAVATING THE EUROPE ALLURE WITH TRAVLIO:
        </h2>
        <ul className="w-full py-10 space-y-8 list-disc px-6 text-justify">
          <li>
            For a 15-day Europe guided tour in summer, the places you would
            cover with us are London, Paris, Belgium, Germany, Switzerland,
            Austria, Padova and Arezzo.
          </li>
          <li>
            Highlights include Madame Tussauds Wax Museum, a ride on the London
            Eye, Versailles Palace, 2nd level of the Eiffel Tower, Orientation
            Tour of Brussels, Photo stop at Atomium, Keukenhof, Madurodam,
            Amsterdam Canal Cruise, Cologne Cathedral, River Rhine Cruise, Black
            Forest, Photo stop at Rhine Falls, Mt. Titlis, Orientation Tour of
            Lucerne, Lake Lucerne Cruise, Swarovski Crystal Museum and Shop,
            Orientation tour of Innsbruck, Orientation tour of Vaduz, St. Mark’s
            Square, Visit St. Peter’s Basilica & Square.
          </li>
        </ul>

        <p className="mt-6 font-medium">
          One simply cannot afford to miss out on a visit to a Cheese Farm and a
          Wooden Shoe Workshop in the Netherlands. One cannot leave behind
          Italy, to marvel at iconic landmarks like the Colosseum and Vatican
          City. Savoring a croissant and coffee at a quaint Parisian café while
          admiring the Eiffel Tower&apos;s grandeur is a must. Book the best
          economical international tour packages with us for watching the sunset
          over Santorini, Greece, from a cliffside perch, painting the sky with
          hues of orange and pink as it dips below the horizon to make it the
          perfect Mediterranean medley. The starting price per adult would be
          around 3.5 lakhs; might further alter and depend upon credentials put
          by clients. The best tours and travels for international packages on
          our website are comprehensive to fit your schedule too.
        </p>

        <LinkToTourPackage />

        <table className="mt-10">
          <tr>
            <th>Inclusions</th>
            <th>Exclusions </th>
            <th>Document Checklist</th>
          </tr>
          <tr>
            <td>multilingual Tour Manager or a local Representative</td>
            <td>
              Tipping is expected from anyone providing your service e.g., Coach
              Driver, Local Guides, Hotel & Restaurant staff, etc. It is
              mandatory to tip a nominal amount of EUR 3 per person/per day.{" "}
            </td>
            <td>Multiple entry Schengen & UK visa, nation-based Visa</td>
          </tr>
          <tr>
            <td>Continental breakfast buffet</td>
            <td>
              The cost of the Basic Travel Quota is equivalent to USD 250,000
            </td>
            <td>documentation, processing and consulate fees.</td>
          </tr>
          <tr>
            <td>Indian veg/non-veg, Jain food options for lunch and dinner</td>
            <td>
              Any increase in the airfare charged by the airline on your air
              ticket
            </td>
            <td>local taxes and services</td>
          </tr>
          <tr>
            <td>guided city tour, hotel stays</td>
            <td>
              The tour cost does not include POE charges and passport charges.
              No porterage included
            </td>
            <td>All transfers and extensive excursions with entrance fees</td>
          </tr>
          <tr>
            <td>Flights ( round trips)</td>
            <td>
              Government Taxes as applicable are extra. Private airport
              transfers, Cost of Suggested / Optional Excursions
            </td>
            <td>Cost of Visa and Medical Insurance</td>
          </tr>
        </table>

        <h2 className="mt-6 font-semibold">
          OFF-BEAT EUROPE PACKAGES WE OFFER:
        </h2>

        <ul className="w-full py-10 space-y-5 list-disc px-6 text-justify">
          <li>
            Fusion Europe including Serpiano and Zurich alongside other cities
          </li>
          <li>
            Grand bargain tour across Europe including Eindhoven, and Frankfurt
            with the above-mentioned cities
          </li>
          <li>
            Swiss French magic covering Leysin along with aforementioned cities
          </li>
          <li>
            Scenic Scandinavia with Helsinki, On Board Silja Or Viking,
            Stockholm, Oslo
          </li>
          <li>Swiss Delights including Engelberg</li>
        </ul>
        <p>
          Prices per adult would range from 3-4 lakhs but customization opinions
          are available as per your tour layout and convenience. The best and
          cheapest international tour packages will unravel these serene scenes
          for you.
        </p>

        <h2 className="mt-6 font-semibold">
          ENCHANTING EAST EUROPE SWEEPING ACROSS SPAIN- PORTUGAL AND MUCH MORE:
        </h2>
        <ul className="w-full py-10 space-y-5 list-disc px-6 text-justify">
          <li>
            Madrid, Porto, Lisbon, Seville, Costa Del Sol, Granada, Valencia,
            and Barcelona across Spain will give you the thrill of exotic
            Spanish culture, its vibrancy and energy.
          </li>
          <li>
            Berlin, Prague, Krakow, Vienna, and Budapest will make you feel
            alive across sweeping pages of history.
          </li>
        </ul>
        <p>
          This genre of package would cost you something around 3-4 lakhs per
          person. The tour matrix can be adjusted leading to an altering budget
          estimation. Grab the best international tour packages with Travlio, a
          gold partner of Thomas Cook in India.
        </p>

        <h2 className="mt-6 font-semibold">
          BALTIC BLAST AND TURKISH TRAILS CAN NOT BE DONE AWAY WITH:
        </h2>
        <ul className="w-full py-10 space-y-5 list-disc px-6 text-justify">
          <li>
            Istanbul, Cappadocia, Pamukkale, and Kusadasi will definitely
            resonate with hot-air balloon rides and the exotic aroma of Turkish
            delights and coffee. These are also synonymous with embellished
            carpets, the rarest of rare gemstones, dessert camping nights, and
            many more.
          </li>
          <li>
            Warsaw, Kaunas, Vilnius, Riga, and Tallinn are gonna be tickets off
            the list if you are planning on exploring off-beat Europe across the
            bold Baltics.
          </li>
        </ul>
        <p>
          Keep around 2-3 lakhs ready per person to unravel the tantalizing
          Turkish trails and grab the best family tour packages internationally
          with us. The best cheapest international tour packages would not punch
          your pocket pinch.{" "}
        </p>
        <h2 className="mt-6 font-semibold">
          ICONIC ICELAND FOR THE AURORA ACROSS THE SKY AND SPAWLING SNOW UNDER
          YOUR FEET:
        </h2>
        <p>
          Get the best international tour packages from Kolkata to explore,
          Helsinki, Vik, Borgarnes, Akureyri, and Reykjavik are almost
          synonymous with a range of landscapes and food namely; geothermal
          springs, glaciers, volcanoes to smoked salmon, rye bread, skyr,
          fermented shark, kleinur and ástarpungar.
        </p>
        <LinkToTourPackage />
        <h2 className="mt-6 font-semibold">Conclusion</h2>
        <p>
          Embarking on a scenic train journey through the Swiss Alps, taking in
          breathtaking vistas of snow-capped peaks and picturesque villages is
          another highlight. Cruising along the canals of Venice, Italy, in a
          traditional gondola, soaking in the romantic ambiance and
          architectural wonders is something that will remind you of iconic
          movie scenes from various film industries. Do check out our Asia tour
          packages as well.{" "}
        </p>
      </ReadBlogLayout>
    </section>
  );
}
