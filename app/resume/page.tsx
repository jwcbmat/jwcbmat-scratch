import DotArticle, { type DotArticleProps } from "@/components/dot-article/dot-article";
import styles from "./resume.module.css";

const jobs: { [key: string]: DotArticleProps } = {
  goOnAssociated: {
    title: "Lead Software Developer",
    company: "Go On Associated",
    startDate: "2024-07-23",
    text: "Started as a full stack developer on WiseId and was promoted to lead. I work with GCP, AWS, Node.js, Java, Electron, and Vue.js. Optimized BigQuery and endpoints, reducing cloud costs by 30%. Daily tasks include documenting and assigning tasks, cloud maintenance, and developing new features."
  },
  stOne: {
    title: "Back End Developer",
    company: "ST-One",
    startDate: "2023-07-03",
    endDate: "2024-07-30",
    text: "Developed a data traffic system for CLPs to the data warehouse, processing 180 million records per day. Worked with Node.js, SQLite, and Linux."
  },
  embarca: {
    title: "Full Stack Developer",
    company: "Embarca",
    startDate: "2023-04-03",
    endDate: "2023-06-30",
    text: "Maintained and improved ticket purchasing services using Ruby on Rails, React, React Native, Heroku, and AWS."
  },
  setiTecnologia: {
    title: "Full Stack Developer",
    company: "Seti Tecnologia",
    startDate: "2022-08-06",
    endDate: "2023-03-30",
    text: "Developed and maintained a monitoring and security system using C++, MySQL, Java, TypeScript, Vue.js, PHP, and Linux."
  },
  clinicorpSolutions: {
    title: "Full Stack Developer",
    company: "Clinicorp Solutions",
    startDate: "2021-12-06",
    endDate: "2022-08-15",
    text: "Maintained internal products using GCP, React Native, React, and Node.js."
  },
  toUpSolutions: {
    title: "Full Stack Developer",
    company: "TO UP Solutions",
    startDate: "2020-11-27",
    endDate: "2021-11-30",
    text: "Developed and maintained internal products using Next.js, React, TypeScript, AWS, Node.js, and NestJS."
  }
};

export default function Resume() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1>Introduction</h1>
        <p>This is my professional resume, hire me!</p>
        <div className={styles.divider} />

        <div className={styles.section}>
          {Object.values(jobs).map((job, i) => (
            <DotArticle
              key={i}
              title={job.title}
              company={job.company}
              startDate={job.startDate}
              endDate={job.endDate}
              text={job.text}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
