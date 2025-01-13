import type { Metadata } from "next";
import { Inter,Martel_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const martelSans = Martel_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-marten-sans",
});
export const metadata: Metadata = {
  title: "Huly: Everything App for your teams",
  description: "Huly, an open-source platform, serves as an all-in-one replacement of Linear, Jira, Slack, and Notion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`antialiased ${martelSans.variable}`} lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
