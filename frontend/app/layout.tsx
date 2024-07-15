import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { MyProvider } from "./redux/provider";
import { BASE_URL } from "./constant";

const popins = Poppins({ subsets: ["latin"], weight: "300" });

// export const metadata: Metadata = {
//   title: "Travel Agency in Kolkata | Travlio (Thomas Cook)",
//   description:
//     "Travlio is your go-to travel agent for international and domestic trips from Kolkata. Book now for expert assistance, exclusive deals, and forex card!",
//   alternates: {
//     canonical: BASE_URL,
//   },
// };
//adsf
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="s-9GCCA6Jp6qLihIFxw1m1Md4VxgsAKxyedRySvV1CE"
        />
      </head>
      <body
        className={popins.className + " bg-[#FFFFFF]"}
      >
        <MyProvider child={children} />
      </body>
    </html>
  );
}
