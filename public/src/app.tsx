 
//@ts-nocheck
import Router from "preact-router";
import { Tabs, Tab, Container, Nav, Navbar } from "react-bootstrap";
import AltaCliente from "./components/Clientes/AltaCliente";
import Home from "./pages/Home"
import Viajes from "./pages/Viajes"

export function App() {
 

  return (
    <> 
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Seguimiento</Navbar.Brand>
          <Nav className="me-auto"> 
          <Nav.Link href="/">Clientes</Nav.Link>
            <Nav.Link href="/viajes">Viajes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
   
    
  <Router>
    {/*@ts-ignore */}
    <Home path="/" />
    <Viajes path="/viajes" />
    
  </Router>

    
    </>
  );
}
