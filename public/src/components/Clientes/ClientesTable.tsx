import Table from 'react-bootstrap/Table';
import { ICliente } from "../../utils/interfaces";

interface IClientesProps {
  clientes: Array<ICliente>; 
}

const ClientesTable = ({clientes}:IClientesProps) => {
  return (
    <>
      {/*//@ts-ignore*/}
      <Table striped bordered hover  >
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cuit</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente: ICliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.cuit}</td>
            </tr>
          ))}
        </tbody>
      
      </Table>
      
    </>
  );
};

export default ClientesTable;
