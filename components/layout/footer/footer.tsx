"use client"

import styles from "./footer.module.css";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeSwitcher from "@/components/theme-switcher/theme-switcher";
import Logo from "@/ui/logo/logo";

interface FooterParams {
  user: { image: string }
}

export default function Footer({ user }: FooterParams) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.company}>
          <Logo ghPicture={user.image} />
        </div>

        <div className={styles.column}>
          <h1 className={styles.columnTitle}>Company</h1>
          <div className={styles.items}>
            <Link href="https://github.com/jwcbmat" target="_blank">GitHub</Link>
            <Link href="https://www.linkedin.com/in/jwcbmat" target="_blank">Linkedin</Link>
          </div>
        </div>
        <div className={styles.column}>
          <h1 className={styles.columnTitle}>Nextjs Learn</h1>
          <div className={styles.items}>
            <Link href="https://nextjs.org/learn-pages-router/seo/introduction-to-seo" target="_blank">Search Engine Optmization</Link>
            <Link href="https://nextjs.org/learn-pages-router/seo/web-performance" target="_blank">Web Performance & Core Web Vitals</Link>
            <Link href="https://nextjs.org/learn-pages-router/basics/assets-metadata-css" target="_blank">Assets, Metadata, and CSS</Link>
          </div>
        </div>
        <div className={styles.column}>
          <h1 className={styles.columnTitle}>Nodejs Learn</h1>
          <div className={styles.items}>
            <Link href="https://nodejs.org/en/learn/getting-started/security-best-practices" target="_blank">Security Best Practices</Link>
            <Link href="https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick" target="_blank">The Node.js Event Loop</Link>
            <Link href="https://nodejs.org/en/learn/command-line/how-to-use-the-nodejs-repl" target="_blank">REPL Node.js</Link>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <span>2025</span>
        <ThemeSwitcher theme={theme} setTheme={setTheme} /> </div>
    </footer>
  );
}
