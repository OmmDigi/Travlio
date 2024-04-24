import Image from "next/image";
import React from "react";
import ReadBlogLayout from "../ReadBlogLayout";
import Point from "../Point";

function page() {
  const datas = [
    {
      title: "Paella in Valencia, Spain",
      subtitle:
        "Our culinary journey begins in the vibrant city of Valencia, where the aroma of saffron-infused rice fills the air. Paella, Spain&apos;s most famous rice dish, is a colorful medley of flavors featuring ingredients such as succulent seafood, tender chicken, and earthy vegetables. Head to the waterfront district of El Cabanyal or the bustling Central Market to sample authentic paella cooked over an open flame in traditional paellera pans. Pair it with a glass of crisp Spanish wine for a truly unforgettable dining experience.",
    },
    {
      title: "Croissants in Paris, France",
      subtitle:
        "No culinary tour of Europe would be complete without a visit to the City of Light, where the scent of freshly baked croissants wafts from every corner bakery. These buttery, flaky pastries are a quintessential part of French breakfast culture and are best enjoyed with a strong cup of coffee at a sidewalk cafe. For the ultimate croissant experience, head to Maison Landemaine or Du Pain et des Idées, where master bakers craft these golden delights with precision and passion.",
    },
    {
      title: "Goulash in Budapest, Hungary",
      subtitle:
        "Next, we venture to the heart of Eastern Europe to sample Hungary&apos;s national dish, goulash. This hearty stew, traditionally made with tender beef, paprika, and root vegetables, is the perfect comfort food on a chilly day. Head to one of Budapest&apos;s cozy taverns or traditional Hungarian restaurants, known as csárdás, to savor a steaming bowl of goulash served with crusty bread and a dollop of sour cream. Don&apos;t forget to pair it with a glass of pálinka, Hungary&apos;s famous fruit brandy, for an authentic taste of Hungarian hospitality.",
    },
    {
      title: "Moules Frites in Brussels, Belgium",
      subtitle:
        "Our culinary adventure continues in the charming city of Brussels, where the smell of steaming mussels fills the air. Moules frites, or mussels with fries is a beloved Belgian dish that combines plump, juicy mussels cooked in a fragrant broth with crispy golden fries on the side. Head to a traditional brasserie such as Chez Léon or La Roue d&apos;Or to sample this iconic dish, washed down with a refreshing pint of Belgian beer. Bon appétit!",
    },
    {
      title: "Pasta in Bologna, Italy",
      subtitle:
        "No culinary tour of Europe would be complete without a visit to the birthplace of pasta, Bologna. Known as the &apos;food capital&apos; of Italy, Bologna is famous for its rich, hearty pasta dishes such as tagliatelle al ragù (Bolognese sauce) and tortellini en brodo (tortellini in broth). Head to a traditional osteria or trattoria in the historic city center to sample handmade pasta served with authentic Italian sauces made from fresh, locally sourced ingredients. Buon appetito!",
    },
  ];

  return (
    <section className="w-[1300px] text-justify">
      <ReadBlogLayout
        bannerimage="/blogs/blog2.webp"
        heading="A Culinary Tour of Europe: Must-Try Dishes and Foodie Hotspots"
        author="Admin"
        date="24th April’24"
        shortdescription="Europe&apos;s rich tapestry of cultures, landscapes, and traditions is beautifully reflected in its diverse culinary scene."
      >
        <p className="mt-6 font-medium">
          Europe&apos;s rich tapestry of cultures, landscapes, and traditions is
          beautifully reflected in its diverse culinary scene. From hearty stews
          in the mountains to delicate pastries in quaint cafes, every corner of
          the continent offers a unique gastronomic experience. Join me on a
          culinary tour of Europe as we explore must-try dishes and foodie
          hotspots that will tantalize your taste buds and satisfy your appetite
          for adventure.
        </p>
        <ul className="w-full py-10 space-y-8">
          {datas.map((item, index) => (
            <Point key={index} title={item.title} subtitle={item.subtitle} />
          ))}
        </ul>

        <p className="mt-6 font-medium">
          In conclusion, Europe&apos;s culinary landscape is as diverse and delicious
          as the continent itself. From savory stews in Hungary to delicate
          pastries in France, there&apos;s something to satisfy every palate on this
          culinary tour of Europe. So, pack your appetite and embark on a
          gastronomic adventure to discover the flavors of the continent. Who
          knows what delicious delights await you along the way?
        </p>
      </ReadBlogLayout>
    </section>
  );
}

export default page;
