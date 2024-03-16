import { Space_Grotesk } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
// const cret = Creato({ subsets: ["latin"] });
const space = Space_Grotesk({ subsets: ["latin"]})

export const metadata = {
  title: "Reward Token",
  description: "The most rewarding reflections token on BSC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space.className}>{children}</body>
    </html>
  );
}
