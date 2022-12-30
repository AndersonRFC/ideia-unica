import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Link legacyBehavior href="/sobre">
        <a>Acessar página Sobre</a>
      </Link>
    </div>
  );
}

export default Home;
