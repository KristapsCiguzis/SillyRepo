// This is for when switching languages, but the path url does not change
// Function are used in "Navbar"
// Example without : 'en/about' -> lv -> "lv/about"
// Example with : 'en/about' -> lv -> "lv/par-mums"

// This is a REVERSE function from 'app/[locale]/page.tsx' pageMappings function
export const routeMappings: Record<string, Record<string, string>> = {
  en: { about: "about", contact: "contact", tasks: "tasks" },
  lv: { about: "par-mums", contact: "kontakti", tasks: "uzdevumi" },
  ee: { about: "meist", contact: "kontakt", tasks: "ulesanded" },
};

export function getLocalizedPath(currentLocale: string, targetLocale: string, page: string): string {
  const currentLocaleMap = routeMappings[currentLocale] || {};
  const targetLocaleMap = routeMappings[targetLocale] || {};

  if (!page) return `/${targetLocale}`;
   
  const canonicalKey = Object.entries(currentLocaleMap).find(
    ([, value]) => value === page
  )?.[0]; //  Key in the locale map

  if (!canonicalKey) return `/${targetLocale}/${page}`; // Fallback to same page if not mapped

  const localizedPage = targetLocaleMap[canonicalKey] || canonicalKey;

  return `/${targetLocale}/${localizedPage}`;
}