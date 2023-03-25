import Table from 'react-bootstrap/Table';
import { ICliente, IViaje } from  "../../utils/interfaces";

interface IViajesProps {
  viajes: Array<IViaje>; 
}

const ClientesTable = ({viajes}:IViajesProps) => {
  return (
    <>
      {/*//@ts-ignore*/}
      <Table striped bordered hover  >
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre Chofer</th>
            <th>Apellido Chofer</th>
            <th>DNI Chofer</th>
            <th>Patente</th>
            <th>CUIT</th>
            <th>Origen</th>
            <th>Destino</th>
          </tr>
        </thead>
        <tbody>
          {viajes.map((viaje: IViaje) => (
            <tr key={viaje.id}>
              <td>{viaje.id}</td>
              <td>{viaje.nombre_chofer}</td>
              <td>{viaje.apellido_chofer}</td>
              <td>{viaje.dni_chofer}</td>
              <td>{viaje.patente}</td>
              <td>{viaje.cuit_cliente}</td>
              <td>{viaje.origen}</td>
              <td>{viaje.destino}</td>
            </tr>
          ))}
        </tbody>
      
      </Table>
      
    </>
  );
};

export default ClientesTable;
