import React from "react";
import ReadBlogLayout from "../ReadBlogLayout";
import P from "../P";
import PointList from "../PointList";
import Heading from "../Heading";
import { BASE_URL } from "@/app/constant";
import { Metadata } from "next";

export const metadata: Metadata = {
  title : "Thailand Tour Package from Kolkata | Travlio",
  description : "Explore Thailand with Travlio's exclusive tour packages from Kolkata. Unforgettable experiences await! Read this blog for more information. ",
  authors : [{name : "Travlio"}],
    alternates: {
      canonical: BASE_URL + "/blogs/thailand-tour-package-from-kolkata",
    },
  };

export default function page() {
  return (
    <ReadBlogLayout
      author="Admin"
      bannerimage="/blogs/blog11.webp"
      heading="THAILAND TOUR PACKAGE FROM KOLKATA"
      date="22 May, 2024"
      shortdescription=""
    >
      <P>
        Why, Thailand? Well, why not? Thailand has been increasingly popular as
        a sea destination among Indian tourists for several reasons. From
        elephant sanctuaries to snorkeling and from island hopping to Muay Thai
        training let’s delve into Thailand’s surging demand across tourists.
        This would also help you choose from the best variety of Thailand tour
        packages from Kolkata from Travlio’s website. Travlio is a gold partner
        of Thomas Cook in India hence, our Thailand tour package would
        undoubtedly be the most comprehensive and research-driven.
      </P>
      <PointList
        points={[
          {
            title: "",
            subtitle:
              "First, it offers a diverse range of experiences, from vibrant city life in Bangkok to serene beaches in Phuket and Pattaya. Ranging from cabaret shows to floating markets, Thailand and Vietnam tour packages are gaining traction across Kolkata and India per se. ",
          },
          {
            title: "",
            subtitle:
              "Second, Thailand is relatively affordable for Indian travelers, with a wide range of accommodation and dining options to suit various budgets. You definitely would not want to burn a hole in your pocket to experience an inauthentic Thai massage, or have a gala time across ecstatic nightlife in Bangkok! Grab the cheapest Thailand tour package from Kolkata without killing that wanderlust in you. ",
          },
          {
            title: "",
            subtitle:
              "Additionally, the warm hospitality of the Thai people and the ease of travel, thanks to visa-on-arrival facilities, make it an attractive destination. A tropical mocktail or a coconut-passion fruit-papaya welcome drink puts a smile on everyone’s face. Their gracious gestures embody Thai hospitality perfectly. ",
          },
          {
            title: "",
            subtitle:
              "Furthermore, Thailand's rich cultural heritage, including ancient temples and traditional festivals, appeals to Indian tourists seeking unique cultural experiences. The spiritual immersion at Wat Phra Kaew and Wat Arun is unparalleled. You must have come across aesthetic Instagram posts around the picturesque Wat Pho Pagoda and Wat Chedi Luang shrine too. ",
          },
          {
            title: "",
            subtitle:
              "Finally, the availability of shopping opportunities, adventure sports, and rejuvenating spa treatments adds to Thailand's allure for Indian travelers. These would be covered conveniently within a week; you could check a 7-day Thailand tour package price ranging from 70 thousand to 1 lakh per person. However, Singapore Malaysia Thailand tour packages on our website are subject to customisation absolutely according to your requirements. A 5-day Thailand tour package price is the most searched-for query. Why not explore the itinerary first?",
          },
        ]}
      />

      <Heading type="H2">FIERY FIVE DAYS ACROSS THAILAND: </Heading>
      <PointList
        points={[
          {
            title: "Day 1",
            subtitle:
              "Arrive in Bangkok, and explore the Grand Palace, Wat Pho, and Wat Arun. Don’t forget to take breathtaking photos!",
          },
          {
            title: "Day 2",
            subtitle:
              "Visit Damnoen Saduak Floating Market, followed by a canal tour. Don’t miss out on munching some Pad Thai and Tom Yum Goong there. The Som Tum and Satay sold across the canals by locals on the wooden boats are the highlights too.",
          },
          {
            title: "Day 3",
            subtitle:
              "Travel to Chiang Mai, explore the Old City, and visit Wat Chedi Luang.",
          },
          {
            title: "Day 4",
            subtitle:
              "Experience an elephant sanctuary and explore Doi Suthep Temple.",
          },
          {
            title: "Day 5",
            subtitle:
              "Return to Bangkok, shop at Chatuchak Weekend Market or indulge in spa treatments before departure.",
          },
        ]}
      />
      <Heading type="H2">
        THAILAND AND VIETNAM TOUR PACKAGES FOR 7 DAYS WOULD BE SWEEPING AND
        PANOPTIC:
      </Heading>
      <PointList
        points={[
          {
            title: "Day 1 and 2",
            subtitle:
              "Explore Bangkok's temples and markets followed by a day trip to Ayutthaya.",
          },
          {
            title: "Day 3 and 4",
            subtitle:
              "Fly to Chiang Mai, visit temples, and experience the elephant sanctuary.",
          },
          {
            title: "Day 5",
            subtitle: "Explore Chiang Rai's White Temple.",
          },
          {
            title: "Day 6",
            subtitle: "Return to Bangkok for shopping and nightlife.",
          },
          {
            title: "Day 7",
            subtitle:
              "Optional beach extension to Phuket or Krabi for relaxation and water activities.",
          },
        ]}
      />

      <Heading>
        A 7-day Thailand package would cost something around 1-1.5 lakhs,
        subject to customization.{" "}
      </Heading>

      <Heading type="H2">CONCLUSION</Heading>
      <P>
        To bring back memories is not enough oftentimes. Souvenirs for your
        loved ones make a trip complete. Grab some Thai silk, handicrafts,
        traditional clothing like sarongs and batik, intricate wood carvings,
        decorative items like ceramic elephants, spices and herbs, local snacks,
        and unique souvenirs like hand-painted parasols or Thai tea sets. You
        can find tailor-made, well-curated Thailand Bangkok Pattaya Phuket tour
        packages on Travlio’s website for families, friends, and honeymoon
        couples as well. Check out the lucrative Thailand couple tour packages
        here on our website. Your Singapore-Thailand tour package would be
        incomplete without tasting their world-famous Mango sticky rice and
        Grilled squid with dripping sauces. Thailand’s creamy and fresh coconut
        ice cream is delectable and the Khanom Buang is to die for!{" "}
      </P>
    </ReadBlogLayout>
  );
}
