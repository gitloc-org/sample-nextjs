import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './layout.module.css'

// Can be imported from a shared config
const locales = ['en', 'de'];

function LanguageSwitcher({ locale }) {
  return (
    <div className={styles.switcher}>
      {locales.map((lng) => (
        <Link
          key={lng}
          href={`${lng}/`}
          className={`${styles.link} ${locale === lng && styles.current}`}
        >
          {lng}
        </Link>
      ))}
    </div>
  );
}

export default function LocaleLayout({ children, params: {locale} }) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return (
    <html lang={locale}>
      <body>
        <LanguageSwitcher locale={locale} />
        {children}
      </body>
    </html>
  );
}