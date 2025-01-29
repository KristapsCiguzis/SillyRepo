import { notFound } from 'next/navigation';
import { getMessages } from "next-intl/server";
import { env } from 'process';

type PageParams = Promise<{ locale: string, page: string }>;
type PageProps = {
  params: PageParams;
};

const pageMappings: Record<string, Record<string, string>> = {
  en: {
    about: 'about',
    contact: 'contact',
    tasks: 'tasks'
  },
  lv: {
    'par-mums': 'about',
    'kontakti': 'contact',
    'uzdevumi': 'tasks',
  },
  ee: {
    "meist": 'about',
    'kontakt': 'contact',
    "ulesanded": 'tasks',
  }
};

export async function generateMetadata({
  params,
}: PageProps) {
  const { locale, page } = await params;
  const messages: any = await getMessages({ locale });

  const titleMappings: Record<string, string> = {
    'about': 'aboutTitle',
    'contact': 'contactTitle',
    'tasks': 'tasksTitle',
  };

  const titleKey = titleMappings[pageMappings[locale]?.[page]];
  const title = titleKey ? messages.NavbarLinks[titleKey] : "Default Title";

  return {
    title
  };
}

export default async function Page({ params }: PageProps) {
  const { locale, page } = await params;
  const componentName = await pageMappings[locale]?.[page];

  if (!componentName) {
    notFound();
  }

  const Component = (await import(`@/components/pages/${componentName}`)).default;

  return (
    <div>
      <Component />
    </div>
  );
}

