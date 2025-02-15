import styles from "./dot-article.module.css";

export interface DotArticleProps {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  text: string;
}

export default function DotArticle({ title, company, startDate, endDate, text }: DotArticleProps) {
  const dateView = (date: string) => {
    const parsedDate = new Date(date);
    const res = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    });

    return res.format(parsedDate);
  };
  return (
    <ul className={styles.container}>
      <li>
        <article className={styles.item}>
          <time dateTime={startDate} className={styles.datePillDate}>
            <span>{dateView(startDate)} - {endDate ? dateView(endDate) : "Present"}</span>
            <div className={styles.datePillCircleOuter}>
              <div className={styles.datePillCircleInner} />
            </div>
          </time>
          <h2>{title}</h2>
          <h3 className={styles.company}>{company}</h3>
          <div>
            <div>
              <p>{text}</p>
            </div>
          </div>
        </article>
      </li>
    </ul>
  );
}
