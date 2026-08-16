import './experience.css';

const projects = [
  {
    name: 'Oncology prior authorization',
    where: 'CVS Health',
    detail:
      'An industry-first regimen-based authorization system with a machine-learning recommendation engine for oncologists. Cut prior-authorization processing from two weeks to minutes.',
  },
  {
    name: 'Medical claims & rebates (EDI 837)',
    where: 'CVS Health',
    detail:
      'Rebuilt the claims and rebate pipeline — saved clients more than eight million dollars a year.',
  },
  {
    name: 'Claim editing to Azure',
    where: 'CVS Health',
    detail:
      'Migrated the medical claim editing system to Azure with Docker — a modernization that retired a datacenter dependency.',
  },
  {
    name: 'TnT — Tool n\u2019 Tool',
    where: 'Open source',
    detail:
      'A playground project I built with friends to try new things: Spring Boot, Gradle, Neo4J, Docker, Ionic 2, and a CI pipeline to hold it together.',
  },
  {
    name: 'Open-source contributions',
    where: 'github.com/edenprairie',
    detail:
      'Thirty-plus repositories contributed to over the years — including work preserved in the GitHub Arctic Code Vault.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container section-grid">
        <h2 className="section-label">Projects</h2>
        <div>
          {projects.map((p) => (
            <article key={p.name} className="role">
              <div className="role-head">
                <h3 className="role-title">{p.name}</h3>
              </div>
              <div className="role-company">{p.where}</div>
              <div className="role-body">
                <p>{p.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
