import DotArticle from "@/components/dot-article/dot-article";
import styles from "./resume.module.css";

export default function Resume() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1>Introduction</h1>
        <p>This is my professional resume, hire-me!</p>
        <div className={styles.divider} />

        <DotArticle
          title="Lead Software Developer"
          company="Go On Associated"
          startDate="2024-07-23"
          text="experience description"
        />
        <DotArticle
          title="Back End Developer"
          company="ST-One"
          startDate="2023-07-03"
          endDate="2024-07-30"
          text="experience description"
        />
        <DotArticle
          title="Full Stack Developer"
          company="Embarca"
          startDate="2023-04-03"
          endDate="2023-06-30"
          text="experience description"
        />
        <DotArticle
          title="Full Stack Developer"
          company="Seti Tecnologia"
          startDate="2022-08-06"
          endDate="2023-03-30"
          text="experience description"
        />
        <DotArticle
          title="Full Stack Developer"
          company="Clinicorp Solutions"
          startDate="2021-12-06"
          endDate="2022-08-15"
          text="experience description"
        />
        <DotArticle
          title="Full Stack Developer"
          company="TO UP Solutions"
          startDate="2020-11-27"
          endDate="2021-11-30"
          text="experience description"
        />
      </div>
    </main>
  );
}
