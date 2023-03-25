 
import Router from "preact-router";
import AltaCliente from "./pages/AltaCliente";
import Home from "./pages/Home"
export function App() {
 

  return (
    <>
  <Router>
    {/*@ts-ignore */}
    <Home path="/" />
    {/*@ts-ignore */}
    <AltaCliente path="/clientes" />
  </Router>

    
    </>
  );
}
