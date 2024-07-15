import BannerImage from "./components/BannerImage";
import { GLOBAL_X_PADDING } from "./constant";
import HomeInfo from "./components/HomeInfo";
import TourPackages from "./components/TourPackages";
import Deal from "./components/Deal";
import CollapsibleMenu from "./components/CollapsibleMenu";
import Service from "./components/Service";
import NewTestimonial from "./components/NewTestimonial/NewTestimonial";
import Blogs from "./components/blogs/Blogs";

export default async function Home() {
  return (
    <main className={`w-full`}>
      <BannerImage />
      <HomeInfo />
      <div className="w-full">
        <TourPackages
          tourType="Trending Tour"
          title="Trending Tour Packages"
          subtitle="Discover the best offers on trending international tour packages from Kolkata with us."
          linktxt="View All Tour Packages"
          link="/tour-packages/all"
        />
        <Deal />
        <TourPackages
          tourType="International Tour"
          title="International Tour Packages"
          subtitle="Embark on global adventures with our international tour packages from Kolkata."
          linktxt="View All International Tour Packages"
          link="/tour-packages/international-tour"
        />
        <TourPackages
          tourType="Domestic Tour"
          title="Domestic Tour Packages"
          subtitle="Embark on seamless adventures with our diverse array of domestic tour packages from Kolkata."
          linktxt="View All Domestic Tour Packages"
          link="tour-packages/domestic-tour"
        />
        <div className={`${GLOBAL_X_PADDING} pt-10`}>
          <h2 className="font-semibold text-2xl text-gray-700 w-full text-center leading-none">WHY TRAVLIO</h2>
          <div
            className={`w-full grid grid-cols-4 mt-0 gap-7 pb-20 sm:mt-0 sm:grid-cols-2 sm:gap-3`}
          >
            <Service
              bgColor="#4E76B1"
              imgsrc="/Your-reliable-advisor.png"
              text="YOUR RELIABLE ADVISOR"
              subtext="Embark on your travels with confidence as we guide, support, and advise you every step of the way. Experience the best in travel with us."
            />
            <Service
              bgColor="#F1A75E"
              imgsrc="/Remarkable-adventure.png"
              text="REMARKABLE ADVENTURES"
              subtext="No matter how much you indulge in every aspect, your holiday experience will be truly extraordinary."
            />
            <Service
              bgColor="#35BEC4"
              imgsrc="/Seamless-Journey.png"
              text="SEAMLESS JOURNEY"
              subtext="Experience stress-free travel with us. That’s our promise, because we believe your journey should be nothing short of flawless."
            />
            <Service
              bgColor="#898AC3"
              imgsrc="/Value-hearing.png"
              text="WE VALUE HEARING"
              subtext="Customize your vacation your way with us. Let us handle all the details to effortlessly create your ideal trip."
            />
          </div>
        </div>
        {/* <Testimonial /> */}
        <NewTestimonial />
        {/* <RecentBlogs /> */}
        <Blogs />
        <div className="w-full mb-10">
          <CollapsibleMenu heading="More About Us">
            <p>
              We are one of the most eligible travel agency in Kolkata that
              provides tour packages to customers with a proper understanding of
              their choices and preferences in the tour. With our services of
              tour packages, we provide extensive management which makes the
              tourists more comfortable with us. Details of the tour with proper
              managerial assistance are provided to our users which makes the
              experiences more successful making our customers further inclined
              to our packages. Our tour packages are primarily reliant on the
              resources of good places that provide comfortable facilities to
              our travelers while providing them with better conveniences.{" "}
              <br />
              <br />
              As we have different packages of tour destinations, it helps us to
              focus on our attributes while making the services more
              customer-centric. We provide various tour packages to our
              consumers as we tend to identify international packages alongside
              domestic destinations. We provide Europe tour packages that are
              quite exclusive in our agency as we have various packages for
              different destinations in Europe. Since we are quite a renowned
              travel agency in Kolkata, it has made our attributes for packaging
              tour resources more intriguing for the customers. As our packages
              are developed with proper customer preferences, it helps us to
              design package costs and other facilities for the tourists.
            </p>
          </CollapsibleMenu>
        </div>
      </div>
    </main>
  );
}
