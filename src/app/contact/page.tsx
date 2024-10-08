// app/contact/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <main>
      <Header />
      <section className="p-8">
        <h2 className="text-2xl text-center">Entre em Contato</h2>
        <form className="mt-4">
          <div className="flex flex-col space-y-4">
            <input type="text" placeholder="Seu Nome" className="p-2 border rounded" required />
            <input type="email" placeholder="Seu Email" className="p-2 border rounded" required />
            <textarea placeholder="Sua Mensagem" className="p-2 border rounded" required />
            <button type="submit" className="bg-blue-600 text-white p-2 rounded">Enviar</button>
          </div>
        </form>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
