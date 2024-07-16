import { Poppins } from "next/font/google";
import "./globals.css";
import { MyProvider } from "./redux/provider";

const popins = Poppins({ subsets: ["latin"], weight: "300" });

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
