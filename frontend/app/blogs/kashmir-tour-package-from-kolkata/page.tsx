import { BASE_URL } from "@/app/constant";
import { Metadata } from "next";
import React from "react";
import ReadBlogLayout from "../ReadBlogLayout";
import P from "../P";
import Heading from "../Heading";
import PointList from "../PointList";
import LinkToTourPackage from "@/app/components/LinkToTourPackage";

export const metadata: Metadata = {
  title : "Kashmir Tour Package from Kolkata | Travlio",
  description : "Discover the wonders of Kashmir with Travlio's tour package from Kolkata. Read this blog to learn about the best destinations for an unforgettable journey!",
  authors : [{name : "Travlio"}],
  alternates: {
    canonical: BASE_URL + "/blogs/kashmir-tour-package-from-kolkata",
  },
};

export default function page() {
  return (
    <ReadBlogLayout
      author="Author"
      date="20th May’24"
      bannerimage="/blogs/blog9.webp"
      heading="KASHMIR TOUR PACKAGE FROM KOLKATA"
      shortdescription=""
    >
      <P>
        Well, let alone the breathtaking natural beauty; even Bollywood has
        influenced us to visit the Romantic Tulip garden in spring, the wooden
        houseboats, and Shikaras on Dal Lake through its songs and other movie
        scenes shot across the Kashmir valley. Look around the stunning
        landscapes, picturesque mountains, serene lakes, and lush valleys across
        Gulmarg, Pahalgaon, and Srinagar, Kashmir has always been the tourist
        hotspot across time and space.{" "}
      </P>
      <P>
        Choose from an array of Kashmir tour packages from Kolkata, which shall
        offer you a unique cultural experience with its rich history, diverse
        cuisine, and vibrant handicrafts. Additionally, tourists can enjoy
        activities like trekking, skiing, boating, and exploring ancient
        monuments and religious sites by opting for tour packages from Kolkata
        to Kashmir
      </P>
      <P>
        Well, didn’t get your leave requests approved by your senior? No
        worries, we are catering to wander lust within the time crunch too.{" "}
      </P>

      <LinkToTourPackage />

      <Heading type="H2">
        Here&apos;s a comprehensive 4-day itinerary for a trip to Kashmir from
        Kolkata:
      </Heading>
      <PointList
        points={[
          {
            title: "Day 1:",
            subtitle:
              "Fly from Kolkata to Srinagar. Upon arrival, check into your hotel or houseboat. Explore the famous Mughal Gardens like Shalimar Bagh, Nishat Bagh, and Chashme Shahi. Enjoy a relaxing shikara ride on Dal Lake during the evening. Overnight stay in Srinagar.",
          },
          {
            title: "Day 2:",
            subtitle:
              "Visit the iconic Shankaracharya Temple situated on a hilltop, offering panoramic views of Srinagar. Your Kashmir family tour packages would be wizened without exploring the old city area and indulging in some shopping for local handicrafts and souvenirs at markets like Lal Chowk and Residency Road. Optionally, you can visit the Jamia Masjid, a significant religious site in Srinagar. Return to your accommodation for the night.",
          },
          {
            title: "Day 3:",
            subtitle:
              "Embark on a day trip to Gulmarg, known for its scenic beauty and adventure sports. Enjoy activities like skiing, snowboarding (depending on the season), or taking the Gulmarg Gondola, one of the highest cable cars in the world. Explore the stunning landscapes and take in the breathtaking views. Return to Srinagar in the evening and spend the night.",
          },
          {
            title: "Day 4:",
            subtitle:
              `&apos;Take a day trip to Pahalgam, a picturesque town known for its lush greenery and serene ambiance. Visit Betaab Valley, named after the Bollywood film "Betaab" which was shot here, and Aru Valley, famous for its meadows and adventure activities. Optionally, you can go for a pony ride or explore the local markets. Return to Srinagar in the evening. Depart from Srinagar for Kolkata or extend your stay if you have more time.&apos;`,
          },
        ]}
      />
      <P>
        Hurray, finally got your long leave request approved by your boss! Let’s
        explore the alluring appeal of Kahmir from our wide range of options
        around the best Kashmir tour package from Kolkata:{" "}
      </P>
      <Heading type="H2">
        For a 10-day trip to Kashmir from Kolkata, you can explore more
        destinations and immerse yourself deeper into the beauty and culture of
        the region. Here&apos;s a suggested itinerary:
      </Heading>
      <PointList
        points={[
          {
            title: "Day 1-2:",
            subtitle:
              "Fly from Kolkata to Srinagar. Spend the first two days exploring Srinagar, visiting Mughal Gardens, Dal Lake, Shankaracharya Temple, and exploring the old city area. Enjoy a shikara ride on Dal Lake and indulge in shopping for local handicrafts and souvenirs. Stay overnight in Srinagar.",
          },
          {
            title: "Day 3-4:",
            subtitle:
              "Travel to Gulmarg, a scenic town known for its meadows and adventure sports. Spend two days in Gulmarg indulging in activities like skiing, and snowboarding (depending on the season), taking the Gulmarg Gondola, and exploring the stunning landscapes. Stay overnight in Gulmarg.",
          },
          {
            title: "Day 5-6:",
            subtitle:
              "Proceed to Pahalgam, another picturesque town known for its lush greenery and serene ambiance. Spend two days exploring Betaab Valley, and Aru Valley, and enjoying activities like pony rides, trekking, and exploring local markets. Do, buy that soft Kashmiri Pashmina Shawl, a real investment that would keep on giving you returns for generations! Kashmiri carpets with intricate zari work and embroidery are a hallmark of their local markets. Stay overnight in Pahalgam.",
          },
          {
            title: "Day 7-8:",
            subtitle:
              `&apos;Head to Sonamarg, known as the "Meadow of Gold," famous for its beautiful landscapes and adventure activities. Spend two days in Sonamarg exploring Thajiwas Glacier, and Zoji La Pass, and enjoying activities like trekking and horse riding. Stay overnight in Sonamarg.&apos;`,
          },
          {
            title: "Day 9-10:",
            subtitle:
              "Leh-Ladakh (Optional)If time permits, consider taking a flight from Srinagar to Leh and spend the last two days exploring the stunning landscapes, monasteries, and high-altitude passes of Ladakh. Visit attractions like Pangong Lake, Nubra Valley, Magnetic Hill, and monasteries like Hemis, Thiksey, and Diskit. Return to Srinagar for your flight back to Kolkata on the 10th day. This itinerary allows you to experience the diverse landscapes, cultures, and attractions of Kashmir and Ladakh region while ensuring a mix of relaxation and adventure.",
          },
        ]}
      />
      <LinkToTourPackage />
      <Heading type="H2">CONCLUSION:</Heading>
      <P>
        Remember to check the weather conditions and any travel advisories
        before planning your trip. Adjustments can be made based on your
        interests and travel preferences. Having a budget crunch but wanna
        explore the hue of Kahmiri Tulips? We’ve got your back with the finest
        yet cheapest tour packages for Kashmir from Kolkata. Things to keep in
        mind before conducting your research across the best tour packages for
        Kashmir:{" "}
      </P>
      <PointList
        points={[
          {
            title: "",
            subtitle:
              "Packing appropriate clothing for the changing weather, waterproof clothing for sno activities",
          },
          {
            title: "",
            subtitle:
              "Do carry camphor if someone in your family has breathing trouble at higher altitudes",
          },
          {
            title: "",
            subtitle:
              "Carry IDs for specific areas across Kashmir (being the international border)",
          },
          {
            title: "",
            subtitle:
              "Be prepared for erratic cellular and internet connections across certain areas",
          },
        ]}
      />
      <P>
        Do not miss out on Kashmiri handicrafts, dry fruits, and the freshest
        possible saffron to die for. Apart from the Wazwaan and kahwa, you can
        try out their special noon chai and khamiree roti as well. Stock up on
        some Kashmiri spices and local tea. Do pay a visit to the local
        Meenakari jewelry work market. These purchases would surely be prized
        possessions! The Yakhni, Harissa, and Sheer chai are gonna make you feel
        like royalty. You cannot miss out on their Rogan Josh and Kashmiri Rose
        Kulfi as well. You can find lucrative offers around Kashmir tour
        packages with price lists on our website. Investing in Kashmir luxury
        tour packages would come with its much-warranted returns too! Not in
        dimes but in dreams perhaps.{" "}
      </P>
    </ReadBlogLayout>
  );
}
