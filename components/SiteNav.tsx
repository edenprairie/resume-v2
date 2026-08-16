const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
];

export default function SiteNav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: 'var(--paper)',
        borderBottom: '1px solid var(--rule)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '0.9rem',
          paddingBottom: '0.9rem',
        }}
      >
        <a
          href="#top"
          style={{
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
        >
          Jun Wang
        </a>
        <div style={{ display: 'flex', gap: '1.6rem' }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
