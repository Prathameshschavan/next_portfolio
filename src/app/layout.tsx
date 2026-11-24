import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { themeScript } from "@/components/theme-script";
import { profile, siteUrl } from "@/content/profile";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = `${profile.name} — Frontend Engineer (React, Next.js, TypeScript)`;
const description =
  "Frontend Engineer with 3+ years building fast, SEO-friendly production web apps with React, Next.js and TypeScript — plus full-stack work in Node.js, GraphQL, PostgreSQL and Prisma.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.links.linkedin }],
  creator: profile.name,
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Server-Side Rendering",
    "Frontend Performance",
    "Mumbai",
    profile.name,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: profile.name,
    title,
    description,
    firstName: "Prathamesh",
    lastName: "Chavan",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
