import { useState } from "preact/hooks";
import React from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSWRConfig } from "swr";
import { apiMethods, viajesFormHeaders } from "../../utils";
import { ICliente, IViaje } from "../../utils/interfaces";
import EditViajeModal from "./EditViajeModal";

interface IViajesProps {
  viajes: Array<IViaje>;
}

const ViajesTable = ({ viajes }: IViajesProps) => {
  const [viajesState, setViajesState] = useState(viajes)
  const [inputsInfo, setinputsInfo] = useState<IViaje>()
  const [modalShow, setModalShow] = React.useState(false);
 
  const editViaje = async (viaje:IViaje) => {
   
    setinputsInfo(viaje)
     setModalShow(true) 
     
  }


  const deleteViaje = async (viaje:IViaje) => {
    console.log("e", viaje)
    console.log("viajes", viajesState)
    try{
  
      await fetch(`http://localhost:3000/api/viajes/${viaje.id}`,  { method: 'DELETE',})
      const newArray = [...viajesState]
      const index = viajes.findIndex(e => e.id === viaje.id)

      newArray.splice(index, 1);

      setViajesState(newArray)

    } catch(e){
      //notify error
      console.log("err", e)
    }
  }
  return (
    <>
      <EditViajeModal
        show={modalShow}
        inputInfo={inputsInfo}
        onHide={() => setModalShow(false)}
      />

      {/*//@ts-ignore*/}
      <Table striped bordered hover>
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
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {viajesState.map((viaje: IViaje) => (
            <tr key={viaje.id}>
              <td>{viaje.id}</td>
              <td>{viaje.nombre_chofer}</td>
              <td>{viaje.apellido_chofer}</td>
              <td>{viaje.dni_chofer}</td>
              <td>{viaje.patente}</td>
              <td>{viaje.cuit_cliente}</td>
              <td>{viaje.origen}</td>
              <td>{viaje.destino}</td>
              <td>
                      {/*@ts-ignore*/}
                <Container className="d-flex flex-row"> 
                <Button variant="success" className="mx-2 my-2  " onClick={ (e) => editViaje(viaje)} >  
                {/*@ts-ignore*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                  </svg> 
                </Button>

                <Button variant="danger"  className="mx-2 my-2" onClick={ (e) => deleteViaje(viaje)}> 
                    {/*@ts-ignore*/}
                   <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                  
                 </Button>
                 </Container>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ViajesTable;
