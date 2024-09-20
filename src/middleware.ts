import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import { NextRequest, NextResponse } from "next/server";

const locales = ["ru", "kk"];
const defaultLocale = "ru";
const cookieName = "i18nlang";

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): string {
  // Get locale from cookie
  if (request.cookies.has(cookieName))
    return request.cookies.get(cookieName)!.value;

  // Get accept language from HTTP headers
  const acceptLang = request.headers.get("Accept-Language");
  if (!acceptLang) return defaultLocale;

  // Get match locale
  const headers = { "accept-language": acceptLang };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/_next")) return NextResponse.next();

  const { pathname } = request.nextUrl;

  // Get the locale from cookies or accept language
  const cookieLocale = getLocale(request);

  // Find if the pathname already contains any locale
  const pathnameLocale = locales.find((locale) =>
    pathname.startsWith(`/${locale}`)
  );

  // If the locale in the pathname matches the locale in the cookie, no redirection is needed
  if (pathnameLocale && pathnameLocale === cookieLocale) {
    return NextResponse.next();
  }

  // If the pathname contains a locale, remove it before constructing the new path
  const newPathname = pathnameLocale
    ? pathname.replace(`/${pathnameLocale}`, "")
    : pathname;

  // Construct the new pathname with the locale from the cookie
  const newUrl = new URL(`/${cookieLocale}${newPathname}`, request.url);
  const response = NextResponse.redirect(newUrl);

  // Set the new locale in the cookie if it changed
  response.cookies.set(cookieName, cookieLocale);

  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
  ],
};