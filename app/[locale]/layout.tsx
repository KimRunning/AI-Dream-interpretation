import "./globals.css";
import Header from "./components/header/header";
import Stars from "./components/stars/stars";
import { SearchProvider } from "./context/SearchContext";
import { Noto_Sans_KR } from "@next/font/google";
import TranslationServerWrapper from "./components/translationServerWrapper/translationServerWrapper";
import TranslationProvider from "./context/translationProvider";
import { LocaleTypes } from "@/utils/localization/settings";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title_ko: "꿈 해몽 - 꿈을 통해 알아보는 무의식",
  description_ko: "당신의 꿈을 분석하고 해석하여 무의식의 메시지를 알아보세요.",
  keywords_ko: "꿈 해몽, 꿈 분석, AI 꿈 해몽, 꿈 해석, 무의식, 꿈 풀이",
  title_en: "Dream Interpretation - AI-based Dream Analysis Service",
  description_en: "AI-powered dream interpretation service. Analyze and understand the messages of your subconscious through your dreams.",
  keywords_en: "dream interpretation, dream analysis, AI dream interpretation, dream decoding, subconscious, dream meaning",
  title_in: "Interpretasi Mimpi - Layanan Analisis Mimpi Berbasis AI",
  description_in: "Layanan interpretasi mimpi yang didukung oleh AI. Analisis dan pahami pesan dari alam bawah sadar Anda melalui mimpi Anda.",
  keywords_in: "interpretasi mimpi, analisis mimpi, interpretasi mimpi AI, dekode mimpi, bawah sadar, arti mimpi",
  title_de: "Traumdeutung - KI-basierter Traumanalyse-Service",
  description_de: "KI-gestützter Traumdeutungsdienst. Analysieren und verstehen Sie die Botschaften Ihres Unterbewusstseins durch Ihre Träume.",
  keywords_de: "Traumdeutung, Traumanalyse, KI-Traumdeutung, Traumdeutung, Unterbewusstsein, Traumdeutung",
  title_ja: "夢の解釈 - AIベースの夢分析サービス",
  description_ja: "AIが提供する夢の解釈サービス。あなたの夢を分析し、潜在意識のメッセージを理解しましょう。",
  keywords_ja: "夢の解釈, 夢の分析, AI夢の解釈, 夢の解読, 潜在意識, 夢の意味",
  title_fr: "Interprétation des rêves - Service d'analyse des rêves basé sur l'IA",
  description_fr: "Service d'interprétation des rêves alimenté par l'IA. Analysez et comprenez les messages de votre subconscient à travers vos rêves.",
  keywords_fr: "interprétation des rêves, analyse des rêves, interprétation des rêves par l'IA, décryptage des rêves, subconscient, signification des rêves",
  author: "Turtle Step",
  og_site_name: "Dream Interpretation AI",
  twitter_card: "summary_large_image",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: LocaleTypes;
  };
}

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  return (
    <html lang="ko" className="scrollbar-hide">
      <head>
        <link rel="icon" href="/HeamongIcon.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/HeamongIcon.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/HeamongIcon.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/HeamongIcon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/HeamongIcon.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content={metadata.description_ko} />
        <meta name="keywords" content={metadata.keywords_ko} />
        <meta name="author" content={metadata.author} />

        <meta property="og:title" content={metadata.title_ko} />
        <meta property="og:description" content={metadata.description_ko} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dreaminterpretaion.com" />
        <meta property="og:site_name" content={metadata.og_site_name} />

        <meta name="twitter:card" content={metadata.twitter_card} />
        <meta name="twitter:title" content={metadata.title_ko} />
        <meta name="twitter:description" content={metadata.description_ko} />

        <meta name="naver-site-verification" content="5b62779f512f001e2879a440d11ee8932c9ee9af" />

        <link rel="alternate" href="https://www.dreaminterpretaion.com/en" hrefLang="en" />
        <link rel="alternate" href="https://www.dreaminterpretaion.com/ko" hrefLang="ko" />
        <link rel="alternate" href="https://www.dreaminterpretaion.com/ja" hrefLang="ja" />
        <link rel="alternate" href="https://www.dreaminterpretaion.com/de" hrefLang="de" />
        <link rel="alternate" href="https://www.dreaminterpretaion.com/in" hrefLang="in" />
        <link rel="alternate" href="https://www.dreaminterpretaion.com/fr" hrefLang="fr" />
        <link rel="canonical" href="https://www.dreaminterpretationai.com/" />

        <title>{metadata.title_ko}</title>

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1780043475074752" crossOrigin="anonymous"></script>

        {locale === "ko" && (
          <>
            <meta name="description" content={metadata.description_ko} />
            <meta name="keywords" content={metadata.keywords_ko} />
            <meta property="og:title" content={metadata.title_ko} />
            <meta property="og:description" content={metadata.description_ko} />
            <meta name="twitter:title" content={metadata.title_ko} />
            <meta name="twitter:description" content={metadata.description_ko} />
          </>
        )}
        {locale === "en" && (
          <>
            <meta name="description" content={metadata.description_en} />
            <meta name="keywords" content={metadata.keywords_en} />
            <meta property="og:title" content={metadata.title_en} />
            <meta property="og:description" content={metadata.description_en} />
            <meta name="twitter:title" content={metadata.title_en} />
            <meta name="twitter:description" content={metadata.description_en} />
          </>
        )}
        {locale === "in" && (
          <>
            <meta name="description" content={metadata.description_in} />
            <meta name="keywords" content={metadata.keywords_in} />
            <meta property="og:title" content={metadata.title_in} />
            <meta property="og:description" content={metadata.description_in} />
            <meta name="twitter:title" content={metadata.title_in} />
            <meta name="twitter:description" content={metadata.description_in} />
          </>
        )}
        {locale === "de" && (
          <>
            <meta name="description" content={metadata.description_de} />
            <meta name="keywords" content={metadata.keywords_de} />
            <meta property="og:title" content={metadata.title_de} />
            <meta property="og:description" content={metadata.description_de} />
            <meta name="twitter:title" content={metadata.title_de} />
            <meta name="twitter:description" content={metadata.description_de} />
          </>
        )}
        {locale === "ja" && (
          <>
            <meta name="description" content={metadata.description_ja} />
            <meta name="keywords" content={metadata.keywords_ja} />
            <meta property="og:title" content={metadata.title_ja} />
            <meta property="og:description" content={metadata.description_ja} />
            <meta name="twitter:title" content={metadata.title_ja} />
            <meta name="twitter:description" content={metadata.description_ja} />
          </>
        )}
        {locale === "fr" && (
          <>
            <meta name="description" content={metadata.description_fr} />
            <meta name="keywords" content={metadata.keywords_fr} />
            <meta property="og:title" content={metadata.title_fr} />
            <meta property="og:description" content={metadata.description_fr} />
            <meta name="twitter:title" content={metadata.title_fr} />
            <meta name="twitter:description" content={metadata.description_fr} />
          </>
        )}
      </head>

      <body className={notoSansKr.className}>
        <TranslationServerWrapper locale={locale}>
          {translations => (
            <TranslationProvider translations={translations}>
              <SearchProvider>
                <Header params={{ locale: locale }} />
                <div className={"notice"}>
                  <Stars />
                  {children}
                </div>
              </SearchProvider>
            </TranslationProvider>
          )}
        </TranslationServerWrapper>
      </body>
    </html>
  );
}
