const { createRoot } = ReactDOM;

function Card({ name, title, bio }) {
  return (
    <article className="card">
      <div className="avatar">
        {name.charAt(0)}
      </div>

      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>{bio}</p>
    </article>
  );
}

function App() {
  const profiles = [
    {
      id: 1,
      name: "Mark",
      title: "Frontend Developer",
      bio: "Me encanta crear interfaces limpias, accesibles y fáciles de usar con React.",
    },
    {
      id: 2,
      name: "Tiffany",
      title: "Gerente de ingeniería",
      bio: "He trabajado en tecnología por 15 años y me encanta ayudar a las personas a crecer en esta industria.",
    },
    {
      id: 3,
      name: "Doug",
      title: "Back-End Developer",
      bio: "He sido desarrollador de software por más de 20 años y me encanta trabajar con Go y Rust.",
    },
  ];

  return (
    <main className="app">
      <section className="hero">
        <span className="tag">React Mini Project</span>
        <h1>Reusable Profile Card</h1>
        <p>
          Proyecto para practicar componentes reutilizables, props, listas,
          renderizado dinámico y uso de keys en React.
        </p>
      </section>

      <section className="cards-container">
        {profiles.map((profile) => (
          <Card
            key={profile.id}
            name={profile.name}
            title={profile.title}
            bio={profile.bio}
          />
        ))}
      </section>
    </main>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);