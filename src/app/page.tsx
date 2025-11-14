import styles from "./page.module.css";

const highlights = [
  {
    title: "Bonjour, Monde",
    description:
      "Une introduction chaleureuse au français moderne avec des astuces pour chaque occasion.",
  },
  {
    title: "Moments Quotidiens",
    description:
      "Des scénarios concrets pour dire salut comme un vrai local dans vos conversations quotidiennes.",
  },
  {
    title: "Ambiance et Culture",
    description:
      "Plongez dans la culture et découvrez quand utiliser bonjour, salut, coucou et bien plus encore.",
  },
];

const itinerary = [
  {
    time: "Matin Doux",
    detail: "Un café, un croissant et un salut qui illumine la journée.",
  },
  {
    time: "Après-Midi Curieux",
    detail: "Explorez la langue à travers mini-jeux et conversations guidées.",
  },
  {
    time: "Soirée Lumineuse",
    detail: "Partagez vos propres salutations dans un atelier créatif ouvert.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <span className={styles.badge}>Salut Studio</span>
        <h1>
          Une invitation à dire <strong>salut</strong> avec style.
        </h1>
        <p>
          Découvrez un atelier immersif où la simplicité d&apos;un salut devient un
          art de vivre, nourri par la créativité, la musique et la culture
          francophone.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href="#atelier">
            Réserver une place
          </a>
          <a className={styles.secondary} href="#programme">
            Voir le programme
          </a>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section} id="atelier">
          <h2>Pourquoi commencer par salut&nbsp;?</h2>
          <p>
            Un mot simple qui ouvre des portes. Nous avons conçu Salut Studio
            pour les curieux, les créatifs et toute personne qui souhaite tisser
            des liens authentiques en français.
          </p>
          <div className={styles.cards}>
            {highlights.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="programme">
          <div className={styles.sectionHeader}>
            <h2>Programme d&apos;une journée lumineuse</h2>
            <p>
              Chaque étape est pensée pour vous faire vivre la langue comme une
              expérience vivante, ponctuée de musique et de rencontres.
            </p>
          </div>
          <ol className={styles.timeline}>
            {itinerary.map((step) => (
              <li key={step.time}>
                <span className={styles.timelineLabel}>{step.time}</span>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section} id="inscription">
          <div className={styles.sectionHeader}>
            <h2>Prêt à dire salut&nbsp;?</h2>
            <p>
              Rejoignez la prochaine session à Paris ou en ligne. Les places sont
              limitées pour préserver une ambiance intime et conviviale.
            </p>
          </div>
          <form className={styles.form}>
            <div className={styles.formRow}>
              <label htmlFor="name">Votre prénom</label>
              <input id="name" name="name" type="text" placeholder="Camille" />
            </div>
            <div className={styles.formRow}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="vous@example.com"
              />
            </div>
            <div className={styles.formRow}>
              <label htmlFor="session">Session</label>
              <select id="session" name="session" defaultValue="paris">
                <option value="paris">Paris — 18 juin</option>
                <option value="lyon">Lyon — 25 juin</option>
                <option value="en-ligne">En ligne — 3 juillet</option>
              </select>
            </div>
            <button type="submit" className={styles.primary}>
              Envoyer ma demande
            </button>
          </form>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Salut Studio. Cultivez la joie de dire salut.</p>
      </footer>
    </div>
  );
}
