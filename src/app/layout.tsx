// app/layout.tsx (updated with SEO meta tags)
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tushar Sheikh | Developer Portfolio",
  description: "Portfolio of Tushar Sheikh – a frontend developer and AI enthusiast building modern web experiences.",
  openGraph: {
    title: "Tushar Sheikh | Developer Portfolio",
    description: "Portfolio of Tushar Sheikh – a frontend developer and AI enthusiast building modern web experiences.",
    url: "https://tusharsheikh.dev",
    siteName: "TusharSheikh.dev",
    images: [
      {
        url: "https://i1.rgstatic.net/ii/profile.image/11431281113191064-1673761052270_Q512/Tushar-Sheikh.jpg",
        width: 1200,
        height: 630,
        alt: "Tushar Sheikh Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Sheikh | Developer Portfolio",
    description: "Portfolio of Tushar Sheikh – a frontend developer and AI enthusiast.",
    creator: "@yourtwitter"
  },
  icons: {
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThY7RYbQ9yU_T3h0BzJxpV1HFd6PWsx6KKQA&s',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300"}>
        <Navbar />
        <main className="px-4 md:px-12 max-w-6xl mx-auto py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
