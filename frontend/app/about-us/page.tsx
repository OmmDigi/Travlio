import Image from "next/image";
import React from "react";
import { GLOBAL_X_PADDING } from "../constant";
import PageIntroBanner from "../components/PageIntroBanner";

function page() {
  return (
    <section className={`${GLOBAL_X_PADDING}`}>
      <PageIntroBanner src="/About-us.jpg" text="ABOUT US" />
      <div className={`w-full grid grid-cols-2 py-10 sm:grid-cols-1 sm:gap-10`}>
        <Image
          className="w-[35rem] h-full"
          src="/thumbnail_thomas-cook-chinarpark.jpg"
          alt="thumbnail_thomas-cook-chinarpark"
          height={720}
          width={1280}
        />

        <div>
          <h2 className="text-2xl font-bold">
            ABOUT TRAVLIO(Partner of ThomasCook)
          </h2>
          <p className="mt-4 text-slate-500 text-justify font-[500]">
            We as a travel agency are a part of your tour planning as we offer
            you packages that are reliable, safe, and affordable, making your
            experience more memorable with us. Our services for diverse tour
            packages with exciting offers have made us the best travel agency in
            Kolkata. As we provide International tour packages from Kolkata,
            guiding you through the plans makes your tour more exciting. Our
            services and packages for international or domestic tours make our
            offers affordable while giving you the best consultancy. Our tour
            packages make you more inclined towards the customization offers,
            being more curious about us. As our packages can be customized with
            your preferences, we provide offers for lodging and food in our
            family tour packages from Kolkata. We also offer Europe tour
            packages from Kolkata in affordable ranges while giving you an
            exotic experience in foreign lands. <br />
            <br /> We offer cheap international tour packages from Kolkata that
            help you explore your dream destinations with ease. As we are the
            best travel agency in Kolkata, collaborated with Thomas Cook India,
            the offers and exclusive tour packages provide you with a clear
            conception about us, while making your tours budget-friendly. Being
            a travel agency in Kolkata, our packages provide extensive rewards,
            allowing you to explore exotic international destinations like the
            Northern Lights. With our tour travel agency, you gain the chance to
            explore world destinations with better strategic planning while
            keeping your budget safe. Our tour packages give you the best ideas
            for both, international and domestic destinations while making it
            affordable and safe for you. With our travel agency, the approach of
            destination planning for long tours becomes more susceptible since
            we focus on every possible aspect that needs to be evaluated with
            proper planning for you.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default page;
