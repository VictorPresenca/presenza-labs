import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Projetos from "./components/Projetos";

function App() {

  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <Sobre />
        <Projetos />
        <Contato />
      </div>
      <Footer />
    </div>
  )
}

export default App
