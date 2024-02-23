import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// const cret = Creato({ subsets: ["latin"] });

export const metadata = {
  title: "Reward Token",
  description: "The most rewarding reflections token on BSC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
