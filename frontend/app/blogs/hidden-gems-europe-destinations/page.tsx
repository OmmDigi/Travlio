import Image from "next/image";
import React from "react";
import ReadBlogLayout from "../ReadBlogLayout";
import Point from "../Point";
import { Metadata } from "next";
import { BASE_URL } from "@/app/constant";

export const metadata: Metadata = {
  alternates: {
    canonical: BASE_URL + "/blogs/hidden-gems-europe-destinations",
  },
};


function page() {
  const datas = [
    {
      title: "Český Krumlov, Czech Republic",
      subtitle:
        "Tucked away in the picturesque countryside of the Czech Republic, Český Krumlov is like a fairytale come to life. Its medieval old town, complete with cobbled streets and charming squares, exudes a timeless charm. Visitors can explore the iconic Český Krumlov Castle, a UNESCO World Heritage Site, and wander through its beautifully preserved Baroque gardens. For a truly immersive experience, take a leisurely rafting trip down the Vltava River, offering stunning views of the town&apos;s skyline.",
    },
    {
      title: "Sintra, Portugal",
      subtitle:
        "Nestled amidst lush green hills, Sintra is a treasure trove of romantic palaces, enchanting gardens, and mystical forests. Its whimsical architecture, characterized by pastel-colored palaces adorned with intricate tilework, is a testament to Portugal&apos;s rich history and cultural heritage. Don&apos;t miss the fairytale-like Pena Palace, perched atop a rocky hilltop and offering panoramic views of the surrounding landscape. Explore the winding pathways of the Quinta da Regaleira estate, with its hidden tunnels, secret passages, and mystical symbolism, for an unforgettable adventure.",
    },
    {
      title: "Hallstatt, Austria",
      subtitle:
        "Breathtakingly beautiful and charmingly quaint, Hallstatt is often referred to as the pearl of Austria&apos;s Salzkammergut region. Nestled between the towering Dachstein mountains and the crystal-clear waters of Lake Hallstatt, this idyllic village is a photographer&apos;s dream. Wander through its narrow streets lined with pastel-colored houses, visit the picturesque Catholic church with its iconic spire, and take a boat ride on the serene lake for a truly magical experience. Don&apos;t forget to explore the nearby salt mines, which have been in operation for over 7,000 years and offer fascinating insights into Hallstatt&apos;s rich history.",
    },
    {
      title: "Matera, Italy",
      subtitle:
        "Carved into the rugged hills of southern Italy, Matera is one of the world&apos;s oldest continuously inhabited cities, with a history that stretches back over 9,000 years. Its ancient cave dwellings, known as Sassi, are a UNESCO World Heritage Site and offer a unique glimpse into prehistoric life. Explore the winding alleyways and hidden courtyards of the Sassi, now transformed into boutique hotels, restaurants, and artisan workshops. Marvel at the breathtaking views of the city from the Belvedere lookout point, and immerse yourself in Matera&apos;s rich cultural heritage.",
    },
    {
      title: "Kotor, Montenegro",
      subtitle:
        "Nestled at the end of a secluded bay surrounded by cliffs, Kotor is a hidden gem on the Adriatic coast. Its well-preserved medieval old town, with its labyrinthine streets and ancient fortifications, is a UNESCO World Heritage Site and a testament to the city&apos;s rich maritime history. Climb the 1,350 steps to the top of the city walls for panoramic views of the bay and the surrounding mountains, or take a boat trip to the nearby islands of Our Lady of the Rocks and St. George for a tranquil escape from the hustle and bustle of modern life.",
    },
  ];

  return (
    <section className="w-[1300px] text-justify sm:w-full">
      <ReadBlogLayout
        bannerimage="/blogs/blog1.jpeg"
        heading="Hidden Gems: Exploring Europe&apos;s Off-the-Beaten-Path Destinations"
        author="Admin"
        date="24th April’24"
        shortdescription="Europe is a continent teeming with iconic landmarks, bustling cities, and well-trodden tourist trails. "
      >
        <p className="mt-6 font-medium">
          Europe is a continent teeming with iconic landmarks, bustling cities,
          and well-trodden tourist trails. From the Eiffel Tower in Paris to the
          Colosseum in Rome, these famous attractions draw millions of visitors
          each year. However, beyond the well-known tourist hotspots lie hidden
          gems waiting to be discovered by intrepid travelers. These
          off-the-beaten-path destinations offer a glimpse into Europe&apos;s
          lesser-known wonders, providing unique experiences away from the
          crowds. Let&apos;s embark on a journey to uncover some of Europe&apos;s
          best-kept secrets.
        </p>
        <ul className="w-full py-10 space-y-8">
          {datas.map((item, index) => (
            <Point key={index} title={item.title} subtitle={item.subtitle} />
          ))}
        </ul>

        <p className="mt-6 font-medium">
          In conclusion, Europe&apos;s off-the-beaten-path destinations offer a
          wealth of hidden treasures waiting to be discovered. From medieval
          towns steeped in history to enchanting villages nestled amidst
          breathtaking landscapes, these hidden gems promise unforgettable
          experiences for adventurous travelers. So, why not stray from the
          beaten path and embark on a journey of discovery to uncover Europe&apos;s
          best-kept secrets? Who knows what wonders you might find along the
          way?
        </p>
      </ReadBlogLayout>
    </section>
  );
}

export default page;
