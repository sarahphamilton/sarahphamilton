import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sarahhamilton.work"),
  title: { default: "Sarah Hamilton | Program & Operations Manager", template: "%s | Sarah Hamilton" },
  description: "Sarah Hamilton finds operational friction, builds the system, aligns the people, and measurably improves execution.",
  openGraph: { title: "Sarah Hamilton | Complex work. Simple systems.", description: "Program management, implementation, operations, customer operations, and enablement.", url: "https://sarahhamilton.work", siteName: "Sarah Hamilton", images: [{ url: "/sarah-hamilton-headshot.jpg", width: 900, height: 1125 }], type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#content">Skip to content</a><Header/><div id="content">{children}</div><Footer/></body></html>;
}
