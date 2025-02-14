import Image from "next/image"
// import { useTheme } from "next-themes"

interface LogoParams {
  ghPicture: string
}

export default function Logo({ ghPicture }: LogoParams) {
  // const { theme, systemTheme } = useTheme();
  // const appliedTheme = theme === "system" ? systemTheme : theme;

  // TODO: crate a new logo
  // return <Image src={appliedTheme === "dark" ? "/white-logo.svg" : "/black-logo.svg"} priority width={90} height={18} />
  return <Image src={ghPicture} alt="GitHub jwcbmat picture" width={25} height={25} style={{ "borderRadius": 30 }} />
}
