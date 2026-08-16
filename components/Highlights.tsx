const stats = [
  { number: '6M+', caption: 'members supported at Optum Behavioral Health' },
  { number: '180+', caption: 'web applications on the shared API platform' },
  { number: '30', caption: 'critical (P1/P2) systems under my team' },
  { number: '$8M/yr', caption: 'client savings delivered on claims at CVS Health' },
];

export default function Highlights() {
  return (
    <section className="section" style={{ paddingTop: '1rem' }}>
      <div className="container">
        <div className="stat-band">
          {stats.map((s) => (
            <div className="stat-card" key={s.caption}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-caption">{s.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
