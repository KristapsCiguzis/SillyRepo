import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

const locales = ["en", "lv", "ee"];

export default getRequestConfig(async ({ requestLocale }) => {
  const headersInstance = headers();
  const localeHeaderValue = await headersInstance.then(h => h.get('X-NEXT-INTL-LOCALE'));
  const currentLocale = localeHeaderValue || requestLocale;

  return {
    messages: (await import(`./messages/${currentLocale}.json`)).default,
  };
});

export { locales };
