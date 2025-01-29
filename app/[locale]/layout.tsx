// layout.tsx
import Navbar from "@/components/Navbar";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>; 
}>) {  
  const resolvedParams = await params;  
  const { locale } =  resolvedParams || { locale: "en" };;     
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={locale} />
          <main className="pt-16"> {/* Keeping only the top padding for navbar */}
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}