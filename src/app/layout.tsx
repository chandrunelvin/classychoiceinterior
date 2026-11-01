import type { Metadata } from "next";
import { Marcellus, Poppins } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Classy Choice Interiors | Modern Interiors for Modern Living",
  description:
    "Personalised home interiors designed around your lifestyle. Modular kitchens, living rooms, bedrooms, wardrobes and full home interiors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marcellus.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
