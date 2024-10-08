// app/components/Header.tsx
"use client"
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [headerData, setHeaderData] = useState({ brand: '', links: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/headerData.json');
        const data = await response.json();
        setHeaderData(data);
      } catch (error) {
        console.error('Erro ao carregar os dados do cabeçalho:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">{headerData.brand}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {headerData.links.map((link, index) => (
                <Nav.Item key={index}>
                  <Link href={link.href} passHref legacyBehavior>
                    <Nav.Link>{link.label}</Nav.Link>
                  </Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
