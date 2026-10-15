import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sarahhamilton.work"),
  title: { default: "Sarah Hamilton | Implementation Program Manager", template: "%s | Sarah Hamilton" },
  description: "Sarah Hamilton leads people- and process-centered implementations from planning through rollout, adoption, training, and continuous improvement.",
  alternates: { canonical: "/" },
  openGraph: { title: "Sarah Hamilton | Implementation Program Manager", description: "People- and process-centered implementation leadership from planning through sustained adoption.", url: "https://sarahhamilton.work", siteName: "Sarah Hamilton", images: [{ url: "/sarah-hamilton-headshot.jpg", width: 900, height: 1125 }], type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#content">Skip to content</a><Header/><div id="content">{children}</div><Footer/></body></html>;
}