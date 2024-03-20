import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper";


const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Reward Token",
  description: "The most rewarding reflections token on BSC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space.className}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
