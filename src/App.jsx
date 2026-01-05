import './App.css';
import SEO from './components/SEO/SEO';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Servicos from './components/Servicos/Servicos';
import Sobre from './components/Sobre/Sobre';
import Depoimentos from './components/Depoimentos/Depoimentos';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <div className="app">
      <SEO
        title="Criação de Sites e Consultoria Web"
        description="Transforme seu negócio com soluções digitais de alta performance. Consultoria em tecnologia, desenvolvimento web, arquitetura de software e transformação digital. Resultados mensuráveis e ROI comprovado. Solicite seu orçamento grátis!"
        image="/og-image.jpg"
      />
      <Navbar />
      <main>
        <Hero />
        <Servicos />
        <Sobre />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
