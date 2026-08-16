export default function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--rule)',
        marginTop: '3rem',
        padding: '1.6rem 0',
        fontSize: '0.8rem',
        color: 'var(--ink-muted)',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.8rem' }}>
        <span>© {new Date().getFullYear()} Jun Wang</span>
        <span>
          <a href="/JunWangResume.pdf" download style={{ color: 'var(--accent)', fontWeight: 600 }}>
            Download PDF
          </a>
        </span>
      </div>
    </footer>
  );
}
