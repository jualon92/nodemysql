import React from "react"; 
import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import useSWR from "swr";
import { fetcher } from "../utils";
import ClientesTable from "../components/Clientes/ClientesTable";
import ProgressBar from "react-bootstrap/ProgressBar";
import Spinner from "react-bootstrap/Spinner";
import { Button, Container } from "react-bootstrap";
import Router from "preact-router";
import AltaClienteModal from "../components/Clientes/AltaClienteModal"
const Home = () => {
  const { data, isLoading, mutate } = useSWR(
    "http://localhost:3000/api/clientes",
    fetcher
  );
  const [modalShow, setModalShow] = React.useState(false);


  
  return (
    <>
      
      
      <Button variant="primary"   className=" m-4" onClick={() => setModalShow(true)}>
        Alta Cliente
      </Button>{" "}
     
      <AltaClienteModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      {!isLoading && data ? (
        <ClientesTable   clientes={data.message} />
      ) : (
        <Spinner animation="border" role="status">
          {/*@ts-ignore */}
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default Home;
