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
import AltaClienteModal from "../components/Clientes/AltaClienteModal";
import ViajesTable from "../components/Viajes/ViajesTable";
import AltaViajeModal from "../components/Viajes/AltaViajeModal";

const Viajes = () => {
  const { data, isLoading, mutate } = useSWR(
    "http://localhost:3000/api/viajes",
    fetcher
  );

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Button
        variant="primary"
        className=" m-4"
        onClick={() => setModalShow(true)}
      >
        Alta Viaje
      </Button>{" "}
      <AltaViajeModal show={modalShow} onHide={() => setModalShow(false)} />
      {!isLoading && data ? (
        <ViajesTable viajes={data.message} />
      ) : (
        <Spinner animation="border" role="status">
          {/*@ts-ignore */}
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default Viajes;
