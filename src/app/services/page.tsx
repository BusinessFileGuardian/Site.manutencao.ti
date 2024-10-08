// app/services/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Dropdown } from 'compontizes';
const Services = () => {
  return (
    <main>
      <Header />
      <section className="p-8">
        <h2 className="text-2xl text-center">Nossos Serviços</h2>
        <p className="mt-4 text-center">
          Oferecemos uma variedade de serviços de suporte em TI para atender às necessidades da sua empresa.
        </p>

        {/* Adicione mais detalhes sobre os serviços aqui */}
      </section>
      <Footer />
    </main>
  );
};

export default Services;
