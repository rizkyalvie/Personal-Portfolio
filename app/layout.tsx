import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rizky Alvie | Personal Portfolio",
  description: "Rizky Alvie is a Front End Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-100 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]" />
        <div className="bg-[#dbd7fb] absolute top-[20rem] left-[-35rem] h-[30rem] w-[50rem] -z-10 rounded-full blur-[5rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
        <Header />
        {children}
      </body>
    </html>
  );
}
