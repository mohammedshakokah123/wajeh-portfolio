import type { Metadata } from "next";
import "./globals.css";
import ConnectToast from "@/components/ConnectToast";

export const metadata: Metadata = {
  title: "Wajeh Al-Hawari | Flutter Developer Portfolio",
  description:
    "Experienced Flutter Developer with 3+ years building production-ready mobile applications. Specialized in Clean Architecture, Bloc/Cubit, Firebase, and App Store submissions.",
  keywords: [
    "Flutter Developer",
    "Mobile App Developer",
    "Clean Architecture",
    "Bloc Cubit",
    "Firebase",
    "Dart",
    "iOS Developer",
    "Android Developer",
  ],
  authors: [{ name: "Wajeh Al-Hawari" }],
  openGraph: {
    title: "Wajeh Al-Hawari | Flutter Developer Portfolio",
    description:
      "Experienced Flutter Developer with 3+ years building production-ready mobile applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="flex min-h-full flex-col">
        {children}
        <ConnectToast />
      </body>
    </html>
  );
}
