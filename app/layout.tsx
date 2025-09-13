import type { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from '../contexts/AuthContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Philip Maulidi - Fullstack Software Engineer & Educator",
  description: "Portfolio of Philip Maulidi, a passionate Fullstack Software Engineer with a Bachelor of Education from University of Malawi Chancellor College. Specializing in modern web development technologies and educational technology solutions.",
  keywords: ["Fullstack Developer", "Software Engineer", "Web Development", "React", "Next.js", "TypeScript", "Educational Technology", "Malawi Developer"],
  authors: [{ name: "Philip Maulidi" }],
  openGraph: {
    title: "Philip Maulidi - Fullstack Software Engineer & Educator",
    description: "Passionate Fullstack Software Engineer combining education expertise with modern web development",
    url: "https://philip-maulidi-wqoz.vercel.app",
    siteName: "Philip Maulidi Portfolio",
    images: [
      {
        url: "/profile-photo.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Philip Maulidi - Fullstack Software Engineer & Educator",
    description: "Passionate Fullstack Software Engineer combining education expertise with modern web development",
    images: ["/profile-photo.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}