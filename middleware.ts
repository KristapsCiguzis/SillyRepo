import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'lv', 'ee'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(lv|en|ee)/:path*']
};