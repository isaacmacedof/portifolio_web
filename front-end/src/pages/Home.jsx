import HomePtBr from "../components/HomePtBr";
import About from "../components/About";
import '../styles/pages/Home.css';

const Home = () => {
  const whatHome = () => {
    return <HomePtBr />
  }

  return (
    <main className="home">
      { whatHome() }
      <About />
    </main>
  )
}

export default Home;
