import Image from 'next/image'
import styles from './page.module.css'
import { useTranslations } from 'next-intl';
 
export default function Index(props) {
  const t = useTranslations('Index');
  return <main className={styles.main}>
  <div className={styles.description}>
    <h1>{t('title')}</h1>
    <p>
      {t.rich('getStarted', {
        page: (chunks) => <code className={styles.code}>src/app/[locale]/page.tsx</code>
      })}
    </p>
    <div>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.rich('links.by', {
          vercel: (chunks) => <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        })}
      </a>
    </div>
  </div>

  <div className={styles.center}>
    <Image
      className={styles.logo}
      src="/next.svg"
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
    />
  </div>

  <div className={styles.grid}>
    <a
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>{t('links.docs.title')} <span>-&gt;</span></h2>
      <p>{t('links.docs.message')}</p>
    </a>

    <a
      href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>{t('links.learn.title')} <span>-&gt;</span></h2>
      <p>{t('links.learn.message')}</p>
    </a>

    <a
      href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>{t('links.templates.title')} <span>-&gt;</span></h2>
      <p>{t('links.templates.message')}</p>
    </a>

    <a
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>{t('links.deploy.title')} <span>-&gt;</span></h2>
      <p>{t('links.deploy.message')}</p>
    </a>
  </div>
</main>;
}