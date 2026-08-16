import './experience.css';

const items = [
  "For two years I taught a weekly natural-language-processing class to middle and high school students.",
  "I founded a non-profit that promotes STEM to young people.",
  "I'm an active volunteer in my local community and helped start a local ethnic group.",
];

export default function Community() {
  return (
    <section className="section">
      <div className="container section-grid">
        <h2 className="section-label">Community</h2>
        <div className="role-body">
          {items.map((t) => (
            <p key={t.slice(0, 24)} style={{ marginBottom: '0.8rem' }}>{t}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
