import Header from "../components/Header";
import '../styles/pages/Home.css';

const Home = () => {
  return (
    <main className="home">
      <div>
        <Header />
      </div>
      <div className="main-containt">
        <h3>Olá! Me chamo Isaac,</h3>
        <h1>Desenvolvedor Web</h1>
        <p>Sou um desenvolvedor Full Stack brasileiro que adora estar por dentro das tecnologias! Atualmente desenvolvendo ainda mais meus conhecimentos em React, Docker, MySQL e Node.js </p>
      </div>
    </main>
  )
}

export default Home;
