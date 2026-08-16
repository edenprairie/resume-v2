import './skills.css';

const groups = [
  { name: 'AI / Machine Learning', skills: ['Generative AI', 'LLM & RAG', 'Azure OpenAI', 'Prompt engineering'] },
  { name: 'Cloud & Platform', skills: ['Azure', 'AWS', 'Kubernetes', 'Terraform', 'Docker'] },
  { name: 'APIs & Services', skills: ['REST', 'gRPC', 'GraphQL', 'Microservices', 'API gateways'] },
  { name: 'Data', skills: ['MSSQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Elasticsearch', 'Kafka'] },
  { name: 'Languages', skills: ['C# / .NET', 'Java', 'Spring Boot', 'Python', 'TypeScript', 'JavaScript', 'React'] },
  { name: 'Engineering practices', skills: ['DevSecOps', 'CI/CD', 'GitHub Actions', 'Azure DevOps', 'Test automation'] },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container section-grid">
        <h2 className="section-label">Skills</h2>
        <div>
          {groups.map((g) => (
            <div className="skill-group" key={g.name}>
              <div className="skill-name">{g.name}</div>
              <div className="skill-list">
                {g.skills.map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
