import React from "react";
import ReadBlogLayout from "../ReadBlogLayout";
import P from "../P";
import Point from "../Point";
import Link from "next/link";
import Heading from "../Heading";
import { Metadata } from "next";
import { BASE_URL } from "@/app/constant";
import LinkToTourPackage from "@/app/components/LinkToTourPackage";

export const metadata: Metadata = {
  title: "International Tour and Travel Agency in Kolkata | Travlio",
  description:
    "Discover Travlio, your premier international tour and travel agency in Kolkata. Explore exciting destinations worldwide. Read this blog for more information!",
  authors: [{ name: "Travlio" }],
  alternates: {
    canonical:
      BASE_URL + "/blogs/international-tour-and-travel-agency-in-kolkata",
  },
};

const points1 = [
  {
    title: "",
    subtitle:
      "Highlights include Madame Tussauds Wax Museum, a ride on the London Eye, Versailles Palace, 2nd level of the Eiffel Tower, Orientation Tour of Brussels, Photo stop at Atomium, Keukenhof, Madurodam, Amsterdam Canal Cruise, Cologne Cathedral, River Rhine Cruise,  Black Forest, Photo stop at Rhine Falls, Mt. Titlis, Orientation Tour of Lucerne, Lake Lucerne Cruise, Swarovski Crystal Museum and Shop, Orientation tour of Innsbruck, Orientation tour of Vaduz, St. Mark’s Square, Visit St. Peter’s Basilica & Square. ",
  },

  {
    title: "",
    subtitle:
      "For a 15-day Europe guided tour in summer, the places you would cover with us are London, Paris, Belgium, Germany, Switzerland, Austria, Padova and Arezzo.",
  },
];

const points2 = [
  {
    title: "",
    subtitle:
      "Fusion Europe including Serpiano and Zurich alongside other cities",
  },
  {
    title: "",
    subtitle:
      "Grand bargain tour across Europe including Eindhoven, and Frankfurt with the above-mentioned cities",
  },
  {
    title: "",
    subtitle:
      "Swiss French magic covering Leysin along with aforementioned cities",
  },
  {
    title: "",
    subtitle:
      "Scenic Scandinavia with Helsinki, On Board Silja Or Viking, Stockholm, Oslo",
  },
  {
    title: "",
    subtitle: "Swiss Delights including Engelberg",
  },
];

const points3 = [
  {
    title: "",
    subtitle:
      "Madrid, Porto, Lisbon, Seville, Costa Del Sol, Granada, Valencia, and Barcelona across Spain will give you the thrill of exotic Spanish culture, its vibrance and energy. ",
  },
  {
    title: "",
    subtitle:
      "Berlin, Prague, Krakow, Vienna, and Budapest will make you feel alive across sweeping pages of history.",
  },
];

const points4 = [
  {
    title: "",
    subtitle:
      "Istanbul, Cappadocia, Pamukkale, and Kusadasi will resonate with hot-air balloon rides and the exotic aroma of Turkish delights and coffee. These are also synonymous with embellished carpets, the rarest of rare gemstones, dessert camping nights, and many more. ",
  },
  {
    title: "",
    subtitle:
      "Warsaw, Kaunas, Vilnius, Riga, and Tallinn are gonna be tickets off the list if you are planning on exploring off-beat Europe across the bold Baltics.",
  },
];

const points5 = [
  {
    title: "",
    subtitle:
      "The sizzling sultry experience of Krabi, Phuket, and Bali cannot be missed",
  },
  {
    title: "",
    subtitle:
      "Explore the mystic pagodas of Pattaya with us along with the colorful nightlife of Bangkok.",
  },
  {
    title: "",
    subtitle:
      "Saigon, Dubai, and Abu Dhabi are popular among family trips from Kolkata",
  },
  {
    title: "",
    subtitle:
      "Ho Chi Minh City, Hanoi, Kuala Lumpur, Ha Long Bay, Danang, Seoul, and Singapore will give you a vibrant and cosmopolitan energy to vibe in.",
  },
  {
    title: "",
    subtitle:
      "Well, you simply cannot miss out on some authentic sushi and wasabi, in a traditional Kimono gown! You can explore ancient cities like Narita, Tokyo, Hamamatsu, Osaka, Nagano, Toyama, and Nagoya.",
  },
];

const points6 = [
  {
    title: "",
    subtitle:
      "One simply cannot afford to miss out on a visit to a Cheese Farm and a Wooden Shoe Workshop in the Netherlands.",
  },
  {
    title: "",
    subtitle:
      "Exploring the historic streets of Rome would surely remind us of our tedious History book pages. One cannot leave behind Italy, to marvel at iconic landmarks like the Colosseum and Vatican City. Savoring a croissant and coffee at a quaint Parisian café while admiring the Eiffel Tower&apos;s grandeur is a must.",
  },
  {
    title: "",
    subtitle:
      "Embarking on a scenic train journey through the Swiss Alps, taking in breathtaking vistas of snow-capped peaks and picturesque villages is another highlight.",
  },
  {
    title: "",
    subtitle:
      "Cruising along the canals of Venice, Italy, in a traditional gondola, soaking in the romantic ambiance and architectural wonders is something that will remind you of iconic movie scenes from various film industries.",
  },
  {
    title: "",
    subtitle:
      "Watching the sunset over Santorini, Greece, from a cliffside perch, painting the sky with hues of orange and pink as it dips below the horizon will be the perfect Mediterranean medley. ",
  },
];

export default function page() {
  return (
    <ReadBlogLayout
      author="Admin"
      bannerimage="/blogs/blog7.webp"
      date="20 May, 2024"
      heading="INTERNATIONAL TOUR AND TRAVEL AGENCY IN KOLKATA"
      shortdescription="Discover Travlio, your premier international tour and travel agency in Kolkata. Explore exciting destinations worldwide. Read this blog for more information!"
    >
      <P>
        Embarking on a{" "}
        <Link className="linkStyle" href={"/contact-us"}>
          foreign tour from Kolkata
        </Link>{" "}
        offers a unique experience, blending the cultural richness of Kolkata
        with the adventure of exploring a new country. Plus, Kolkata&apos;s
        international cosmopolitan outlook provides convenient access to various
        destinations worldwide, making it easier to embark on your travel
        adventures. What are people particularly seeking, In a foreign tour
        package from Kolkata?{" "}
      </P>
      <P>
        People typically seek a seamless travel experience that combines
        convenience, affordability, and memorable adventures.
      </P>
      <P>
        They look for well-planned itineraries that cover popular tourist
        attractions while also allowing for some off-the-beaten-path
        exploration.
      </P>

      <LinkToTourPackage />
      <P>
        Comfortable accommodations, reliable transportation, and knowledgeable
        guides are essential for a stress-free journey.
      </P>
      <P>
        Additionally, travelers from India especially from Kolkata desire
        opportunities to immerse themselves in the local culture through
        authentic experiences, such as trying traditional cuisine, interacting
        with locals, and participating in cultural activities.
      </P>
      <P>
        Safety and security are paramount considerations, ensuring travelers
        feel secure throughout their trip.
      </P>
      <P>
        Finally, flexibility in the itinerary, allowing for personal preferences
        and leisure time, adds to the appeal of a foreign tour package from
        Kolkata, ensuring each traveler can tailor their experience to meet
        their desires and interests. This is exactly why it is of utmost
        importance to connect with the best-suited{" "}
        <Link className="linkStyle" href={"/tours"}>
          international tour and travel agency in Kolkata{" "}
        </Link>{" "}
        to explore the destination of your dreams. Travlio is a gold partner of
        Thomas Cook in India and hence happens to be the best travel agency for
        international travel in Kolkata and across India as well.
      </P>
      <P>
        Let’s delve into the lucrative and most sought-after foreign tour
        packages covering their prices, itineraries, inclusions, and exclusions
        across the premium travel layouts.
      </P>

      <Heading type="H2">
        EXCAVATING THE POPULAR MATRIX OF EUROPE WITH TRAVLIO:
      </Heading>
      <ul className="w-full py-10 space-y-8">
        {points1.map((item, index) => (
          <Point key={index} title={item.title} subtitle={item.subtitle} />
        ))}
      </ul>

      <table className="w-full">
        <tr>
          <th>Inclusions</th>
          <th>Exclusions </th>
          <th>Document Checklist</th>
          <th>Things to keep in mind </th>
        </tr>
        <tr>
          <td>multilingual Tour Manager or a local Representative</td>
          <td>
            Tipping is expected from anyone providing your service e.g., Coach
            Driver, Local Guides, Hotel & Restaurant staff etc. It is mandatory
            to tip a nominal amount of EUR 3 per person/per day.{" "}
          </td>
          <td>Multiple entry Schengen & UK visa</td>
          <td>Check visas and passport validity.</td>
        </tr>
        <tr>
          <td>Continental breakfast buffet</td>
          <td>
            The cost of the Basic Travel Quota is equivalent to USD 250,000
          </td>
          <td>documentation, processing and consulate fees.</td>
          <td>Exchange currency and manage finances</td>
        </tr>
        <tr>
          <td>Indian veg/non-veg, Jain food options for lunch and dinner</td>
          <td>
            Any increase in the airfare charged by the airline on your air
            ticket{" "}
          </td>
          <td>local taxes and services </td>
          <td>Research health precautions and insurance</td>
        </tr>
        <tr>
          <td>guided city tour, hotel stays</td>
          <td>
            The tour cost does not include POE charges and passport charges. No
            porterage included
          </td>
          <td>All transfers and extensive excursions with entrance fees</td>
          <td>Respect local customs and etiquette.</td>
        </tr>
        <tr>
          <td>Flights ( round trips)</td>
          <td>
            Government Taxes as applicable are extra. sPrivate airport
            transfers, Cost of Suggested / Optional Excursions
          </td>
          <td>Cost of Visa and Medical Insurance</td>
          <td>Plan transportation and accommodation ahead.</td>
        </tr>
      </table>

      <Heading type="H2">
        LET’S EXPLORE SOME COMPREHENSIVE EUROPE PACKAGES WE OFFER:
      </Heading>
      <ul className="w-full py-10 space-y-8">
        {points2.map((item, index) => (
          <Point
            key={Math.random()}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </ul>

      <P>
        Prices per adult would range from 3-4lakhs but customisation opinions
        are available as per your tour layout and convenience.
      </P>

      <Heading>
        ENCHANTING EAST EUROPE SPALLING ACROSS SPAIN- PORTUGAL AND MUCH MORE:
      </Heading>
      <ul className="w-full py-10 space-y-8">
        {points3.map((item, index) => (
          <Point
            key={Math.random()}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </ul>
      <P>
        This genre of package would cost you something around 3-4 lakhs per
        person. The tour matrix can be adjusted leading to an altering budget
        estimation.
      </P>

      <Heading>
        BALTIC HEIGHTS AND TURKISH EXTRAVAGANZA CAN NOT BE DONE AWAY WITH:
      </Heading>
      <ul className="w-full py-10 space-y-8">
        {points4.map((item, index) => (
          <Point
            key={Math.random()}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </ul>
      <P>
        Keep around 2-3 lakhs ready per person to unravel the tantalizing
        Turkish trails.
      </P>

      <Heading>
        ICONIC ICELAND FOR THE AURORA ACROSS THE SKY AND SWEEPING SNOW UNDER
        YOUR FEET:
      </Heading>
      <P>
        Helsinki, Vik, Borgarnes, Akureyri, and Reykjavik are almost synonymous
        with a range of landscapes and food namely; geothermal springs,
        glaciers, volcanoes to smoked salmon, rye bread, skyr, fermented shark,
        kleinur and ástarpungar.
      </P>

      <Heading>LET’S EXPLORE ALLURING ASIA:</Heading>
      <ul className="w-full py-10 space-y-8">
        {points5.map((item, index) => (
          <Point
            key={Math.random()}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </ul>
      <P>
        Depending upon currencies, foreign exchange, and other adjustments
        across your tour plan, the prices will be boiled down to. To consider an
        approximation for ease let’s say, keep an amount of 2lkahs per person
        ready to unravel the beauty of Asian landscapes.
      </P>
      <P>
        Tap into the enigma of ancient Shinto shrines across Japan with us. Dive
        into the light azure Mediterranean seas across Greece with Travlio. Ride
        across the coarse sand of Dubai with our travel experts. Experience the
        surreal sensation of snow, sea, and sand around you from all over the
        planet.
      </P>

      <Heading type="H2">
        LET’S EXPLORE EXPERIENCES THAT SIMPLY CAN NOT BE MISSED OUT ON YOUR TRIP
        ACROSS EUROPE:
      </Heading>
      <ul className="w-full py-10 space-y-8">
        {points6.map((item, index) => (
          <Point
            key={Math.random()}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </ul>
      <P>
        The starting price per adult would be around 3.5 lakhs; might further
        alter and depend upon credentials put by clients.
      </P>

      <LinkToTourPackage />

      <Heading type="H2">CONCLUSION</Heading>
      <P>
        Foreign travel serves as a means to escape routine, immerse oneself in
        diverse cultures, and indulge in unique adventures. Foreign tour
        packages from Kolkata with us are comprehensive and panoptic too. To
        avoid burning a hole in your pocket you could check out the cheapest
        foreign tour packages from Kolkata on our website. To find an{" "}
        <Link className="linkStyle" href={"/tours"}>
          international tour and travel agency in Kolkata
        </Link>{" "}
        is no more a hassle when our streamlined guidance abroad is here.
      </P>
    </ReadBlogLayout>
  );
}
