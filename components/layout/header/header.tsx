"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu } from "lucide-react";
import styles from "./header.module.css";
import Logo from "@/ui/logo/logo";
import ThemeSwitcher from "@/components/theme-switcher/theme-switcher";

interface HeaderParams {
  user: { image: string, alt?: string }
}

export default function Header({ user }: HeaderParams) {
  const { theme, setTheme } = useTheme();
  const [mobileNavShown, setMobileNavShown] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const toggle = () => setMobileNavShown(!mobileNavShown);

  useEffect(() => {
    const handlerResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handlerResize);
    return () => window.removeEventListener("resize", handlerResize);
  }, [isMobile]);

  return (
    <>
      <header className={styles.header}>

        <div className={styles.row}>
          <ThemeSwitcher theme={theme} setTheme={setTheme} />
          <Link href="/">
            <Logo ghPicture={user.image} />
          </Link>
        </div>

        {!isMobile && (
          <nav className={styles.navbar}>
            <Link title="home" href="/">
              home
            </Link>
            <Link title="posts" href="/posts">
              posts
            </Link>
            <Link title="resume" href="/resume">
              resume
            </Link>
          </nav>
        )}

        <span className={styles.toggle} onClick={toggle}>
          <Menu height={32} width={32} />
        </span>
      </header>

      <nav
        className={`${styles.mobileNav} ${mobileNavShown ? styles.active : ""}`}
      >
        <Link title="home" href="/">
          home
        </Link>
        <Link title="posts" href="/posts">
          posts
        </Link>
        <Link title="resume" href="/resume">
          resume
        </Link>
      </nav>
    </>
  );
}
