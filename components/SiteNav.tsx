import './SiteNav.css';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
];

export default function SiteNav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand">
          Jun Wang
        </a>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
