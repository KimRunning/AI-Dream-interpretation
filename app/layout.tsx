import "./globals.css";
import Header from "./components/header/header";
import Stars from "./components/stars/stars";
import { SearchProvider } from "./context/SearchContext";
import { Noto_Sans_KR } from "@next/font/google";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title_ko: "꿈 해몽 - AI 기반 꿈 분석 서비스",
  description_ko: "AI가 제공하는 꿈 해몽 서비스. 당신의 꿈을 분석하고 해석하여 무의식의 메시지를 알아보세요.",
  keywords_ko: "꿈 해몽, 꿈 분석, AI 꿈 해몽, 꿈 해석, 무의식, 꿈 풀이",
  title_en: "Dream Interpretation - AI-based Dream Analysis Service",
  description_en: "AI-powered dream interpretation service. Analyze and understand the messages of your subconscious through your dreams.",
  keywords_en: "dream interpretation, dream analysis, AI dream interpretation, dream decoding, subconscious, dream meaning",
  author: "DreamAI",
  // og_image: "https://yourwebsite.com/og-image.jpg",
  og_site_name: "DreamAI",
  twitter_card: "summary_large_image",
  // twitter_image: "https://yourwebsite.com/twitter-image.jpg",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scrollbar-hide">
      <head>
        <link rel="icon" href="/HeamongIcon.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/HeamongIcon.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/HeamongIcon.png" /> <meta name="description" content={metadata.description_ko} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description_ko} />
        <meta name="keywords" content={metadata.keywords_ko} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.title_ko} />
        <meta property="og:description" content={metadata.description_ko} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dreaminterpretaion.com/ko" />
        {/* <meta property="og:image" content={metadata.og_image} /> */}
        <meta property="og:site_name" content={metadata.og_site_name} />
        <meta name="twitter:card" content={metadata.twitter_card} />
        <meta name="twitter:title" content={metadata.title_ko} />
        <meta name="twitter:description" content={metadata.description_ko} />
        {/* <meta name="twitter:image" content={metadata.twitter_image} /> */}
        <link rel="alternate" href="https://www.dreaminterpretaion.com" hrefLang="en" />
        <link rel="alternate" href="https://www.dreaminterpretaion.com/ko" hrefLang="ko" />
        <link rel="alternate" href="https://www.dreaminterpretaion.com/es" hrefLang="es" />
        <title>{metadata.title_ko}</title>
      </head>
      <body className={notoSansKr.className}>
        <SearchProvider>
          <Header />
          <div className={"notice"}>
            <Stars />
            <div className="bg-white fixed left-2 top-[110px] z-10 w-[9%] h-[600px] hidden sm:inline">광고 사이드 배너</div>
            <div className="bg-white fixed right-2 top-[110px] z-10 w-[9%] h-[600px] hidden sm:inline">광고 사이드 배너</div>
            {children}
            <div className="flex items-center justify-center">
              <div className="fixed w-full h-[100px] bg-violet-600 sm:w-[500px] md:w-[700px] hide-on-small-height">광고배너</div>
            </div>
          </div>
        </SearchProvider>
      </body>
    </html>
  );
}
