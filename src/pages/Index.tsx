import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    // INÍCIO: Adicionado o Fragmento (<>) para envolver todos os elementos
    <> 
      <Helmet>
        <title>Lisomar Barbosa | Direito Digital & Blockchain</title>
        <meta
          name="description"
          content="Advogado especializado em Direito Digital, LGPD, contratos tech e consultoria estratégica."
        />
        <meta property="og:title" content="Lisomar Barbosa | Direito Digital & Blockchain" />
        <meta
          property="og:description"
          content="Advogado especializado em Direito Digital, LGPD, contratos tech e consultoria estratégica."
        />
        <meta property="og:image" content="/og.jpg" />
        <meta property="og:url" content="https://www.advlisomarbarbosa.com.br" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lisomar Barbosa | Direito Digital & Blockchain" />
        <meta
          name="twitter:description"
          content="Advogado especializado em Direito Digital, LGPD, contratos tech e consultoria estratégica."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <PracticeAreas />
          <Blog />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    {/* FIM: Fechado o Fragmento (</>) */}
    </>
  );
};

export default Index;
