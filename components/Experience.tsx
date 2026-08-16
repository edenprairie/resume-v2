import './experience.css';

const roles = [
  {
    title: 'Director of Software Engineering',
    company: 'Optum · Behavioral Health',
    dates: 'Oct 2022 — Present',
    body: [
      "I lead the technical architecture team for Optum's behavioral health division. My team owns the shared API layer that carries 180+ web applications, thirty of them critical.",
      "I work with the CTO office on engineering maturity, and I'm driving a generative-AI program in utilization management — applying large language models to help review clinical decisions.",
    ],
  },
  {
    title: 'Software Development Manager',
    company: 'Amazon · Buy with Prime',
    dates: 'Mar 2021 — Oct 2022',
    body: [
      "I ran a two-pizza team on Buy with Prime, Amazon's merchant checkout product. We shipped changes that touched shopper and merchant discovery, working across several teams inside the program.",
      "The scale was enormous — which is exactly why you learn to keep things simple.",
    ],
  },
  {
    title: 'Senior Manager',
    company: 'CVS Health · PBM Systems',
    dates: 'Nov 2013 — Mar 2021',
    body: [
      "I managed five scrum teams — about thirty engineers across five locations — building medical and pharmacy benefit systems.",
      "The work I'm proudest of: an oncology prior-authorization system with a machine-learning recommendation engine that cut review time from two weeks to minutes, and a claims system that saved clients over eight million dollars a year.",
    ],
  },
  {
    title: 'Senior Technical Architect',
    company: 'Bluestem Brands',
    dates: 'May 2003 — Nov 2013',
    body: [
      "Designed enterprise integrations — BizTalk, SSIS, .NET services and Web APIs — including a custom eConnect adapter for Microsoft Great Plains transactions.",
    ],
  },
  {
    title: 'Software Developer · Software Engineer',
    company: 'Boombuy Inc. · AMAX Engineering',
    dates: 'Apr 2001 — May 2003',
    body: [
      "Built B2B and B2C web applications with ASP, XML/XSLT, SQL Server, and Commerce Server — full-text search, SSL, and everything around it.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container section-grid">
        <h2 className="section-label">Experience</h2>
        <div>
          {roles.map((r) => (
            <article className="role" key={r.title + r.company}>
              <div className="role-head">
                <h3 className="role-title">{r.title}</h3>
                <span className="role-dates">{r.dates}</span>
              </div>
              <div className="role-company">{r.company}</div>
              <div className="role-body">
                {r.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
