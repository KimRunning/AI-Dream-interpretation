// middleware.ts
import { NextResponse, NextRequest } from "next/server";
import { fallbackLng, locales } from "@/utils/localization/settings";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const acceptLanguage = request.headers.get("accept-language") || "";
  const languages = acceptLanguage.split(",");

  // Check if the pathname already includes a supported locale
  const pathnameHasLocale = locales.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  // If pathname includes a locale, do nothing
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Determine the locale based on the Accept-Language header
  let localePath = `/${fallbackLng}`; // Default locale

  if (languages.length > 0) {
    const primaryLanguage = languages[0].split(";")[0]; // Extract the primary language without q-factor weighting

    switch (true) {
      case primaryLanguage.startsWith("ko"):
        localePath = "/ko";
        break;
      case primaryLanguage.startsWith("ja"):
        localePath = "/ja";
        break;
      case primaryLanguage.startsWith("de"):
        localePath = "/de";
        break;
      case primaryLanguage.startsWith("in"):
        localePath = "/in";
        break;
      case primaryLanguage.startsWith("fr"):
        localePath = "/fr";
        break;
      case primaryLanguage.startsWith("en"):
        localePath = "/en";
        break;
    }
  }

  // Redirect to the determined locale path
  const url = request.nextUrl.clone();
  url.pathname = `${localePath}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|.*\\..*|_next/static|_next/image|manifest.json|assets|favicon.ico).*)"],
};
