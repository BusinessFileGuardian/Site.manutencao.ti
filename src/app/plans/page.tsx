// app/plans/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

const Plans = () => {
  return (
    <main>
      <Header />
      <section className="p-8">
        <h2 className="text-2xl text-center">Planos de Assinatura</h2>
        <p className="mt-4 text-center">
          Escolha um dos nossos planos de manutenção e garanta a proteção do seu negócio.
        </p>
        {/* Adicione os detalhes dos planos aqui */}
      </section>
      <Footer />
    </main>
  );
};

export default Plans;
