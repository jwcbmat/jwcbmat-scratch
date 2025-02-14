import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/layout/footer/footer";
import dynamic from "next/dynamic";
import ThemeProvider from "@/components/theme-provider";

import "./global.css";

const Header = dynamic(() => import("@/components/layout/header/header"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "yes, just another project",
  description: "maybe this will be a blog",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // TODO: create a new logo
  const ghUserData = await fetch("https://api.github.com/users/jwcbmat")
  const { avatar_url } = await ghUserData.json();

  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <Header
            user={{
              image: avatar_url,
            }}
          />
          {children}
          <Footer
            user={{
              image: avatar_url,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
