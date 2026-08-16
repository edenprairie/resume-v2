import './experience.css';

const entries = [
  {
    degree: "Master's in Software Engineering",
    school: 'University of St. Thomas',
    note: 'in progress',
  },
  {
    degree: "Bachelor's in Electrical and Electronics",
    school: 'North China Electric Power University',
    note: '',
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container section-grid">
        <h2 className="section-label">Education</h2>
        <div>
          {entries.map((e) => (
            <div className="role" key={e.school}>
              <h3 className="role-title" style={{ fontSize: '1.05rem' }}>
                {e.degree}
                {e.note ? (
                  <span style={{ color: 'var(--ink-muted)', fontStyle: 'italic', fontWeight: 400 }}>
                    {' '}({e.note})
                  </span>
                ) : null}
              </h3>
              <div className="role-company">{e.school}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
