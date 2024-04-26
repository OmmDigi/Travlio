export const GLOBAL_X_PADDING = "px-24 sm:px-3";

export let BASE_URL = "http://localhost:3000";
export let API_BASE_URL = "http://localhost:8080";

export const SEND_EMAIL_API = `${API_BASE_URL}/sendemail`

const env = process.env.NODE_ENV;
if(env == "development"){
  // do something
  BASE_URL = "http://localhost:3000";
  API_BASE_URL = "http://localhost:8080";
}
else if (env == "production"){
 // do something
 BASE_URL = "https://travlio.in";
 API_BASE_URL = "https://travliobackend.vercel.app";
}

export const MOBILE_VIEW_WIDTH = 639;

export const BLOGS_LIST_DATA = [
  {
    id: "1",
    title: "Hidden Gems: Exploring Europe's Off-the-Beaten-Path Destinations",
    date: "24th April’24",
    author: "Admin",
    img: "/blogs/blog1.jpeg",
    link: "/blogs/hidden-gems-europe-destinations",
    description : "Europe is a continent teeming with iconic landmarks, bustling cities, and well-trodden tourist trails.",
  },

  {
    id: "2",
    title: "A Culinary Tour of Europe: Must-Try Dishes and Foodie Hotspots",
    date: "24th April’24",
    author: "Admin",
    img: "/blogs/blog2.webp",
    link: "/blogs/must-try-dishes-europe",
    description : "Europe's rich tapestry of cultures, landscapes, and traditions is beautifully reflected in its diverse culinary scene.",
  },

  {
    id: "3",
    title: "Europe on a Budget: Tips and Tricks for Affordable Travel",
    date: "24th April’24",
    author: "Admin",
    img: "/blogs/blog3.jpeg",
    link: "/blogs/tips-tricks-budget-europe-travel",
    description : "Europe: a continent steeped in history, culture, and charm. From the picturesque streets of Paris to the stunning coastlines of Croatia, Europe offers a plethora of experiences for travelers.",
  },

  {
    id: "4",
    title: "The Ultimate Guide: Best Places to See the Northern Lights, from Iceland to Alaska",
    date: "26th April’24",
    author: "Admin",
    img: "/blogs/blog4.webp",
    link: "/blogs/ultimate-guide-best-places-to-see-northern-lights",
    description : "The dancing colors of the Northern Lights, also known as the Aurora Borealis, have captivated humanity for centuries.",
  },
];