const contact = [
  { label: 'Email', value: 'junwang01@gmail.com', href: 'mailto:junwang01@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/junwang03', href: 'https://www.linkedin.com/in/junwang03/' },
  { label: 'GitHub', value: 'github.com/edenprairie', href: 'https://github.com/edenprairie' },
];

export default function SiteHeader() {
  return (
    <header id="top" className="container" style={{ paddingTop: '5.5rem', paddingBottom: '4rem' }}>
      <p
        style={{
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
        }}
      >
        Director of Software Engineering
      </p>
      <h1
        style={{
          fontSize: 'clamp(2.8rem, 7vw, 4.6rem)',
          fontWeight: 700,
          lineHeight: 1.02,
          marginTop: '0.8rem',
        }}
      >
        Jun Wang
      </h1>
      <p
        style={{
          fontSize: '1.15rem',
          fontStyle: 'italic',
          color: 'var(--ink-soft)',
          maxWidth: '36rem',
          marginTop: '1.6rem',
        }}
      >
        I'm a software engineering leader in the Twin Cities. I currently lead
        technical architecture at Optum Behavioral Health — the shared platform
        that 180+ applications run on, serving more than six million members.
        Before that I ran engineering teams at Amazon and CVS Health. I've been
        writing code for over twenty years, and I still enjoy it.
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem 2rem',
          marginTop: '2.2rem',
          fontSize: '0.9rem',
          color: 'var(--ink-muted)',
        }}
      >
        <span>Eden Prairie, MN</span>
        {contact.map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer">
            {c.value}
          </a>
        ))}
      </div>
    </header>
  );
}
