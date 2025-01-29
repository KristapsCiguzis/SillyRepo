import { getMessages } from "next-intl/server";
import HomePage from "./pages/home";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  try {
    const resolvedParams = await params;
    const { locale } = resolvedParams;
    if (!locale) {
      throw new Error("Locale is undefined or invalid");
    }
    const messages: any = await getMessages({ locale });
    if (!messages) {
      console.error(`No messages found for locale: ${locale}`);
      return {
        title: "Default Title",
      };
    }
    const navbarLinks = messages.NavbarLinks || {};
    const title = navbarLinks.homeTitle || "Default Title";

    return {
      title,
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Default Title",
    };
  }
}

export default async function Page() {
  return <HomePage />;
}