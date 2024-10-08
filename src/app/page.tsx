// app/page.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import CustomAlert from './components/CustomAlert';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <main>
      <Header />

      {/* Custom Alert */}
      <section className="mt-4">
        <CustomAlert />
      </section>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Serviços Oferecidos</h2>
          <Row>
            <Col md={4} className="mb-4">
              <ServiceCard 
                title="Manutenção de Computadores"
                description="Serviços preventivos e corretivos." 
              />
            </Col>
            <Col md={4} className="mb-4">
              <ServiceCard 
                title="Suporte Remoto" 
                description="Atendimento rápido e eficiente." 
              />
            </Col>
            <Col md={4} className="mb-4">
              <ServiceCard 
                title="Oficina Completa"
                description="Reparos com peças de qualidade."
              />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
