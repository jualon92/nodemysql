import React from "react"; 
import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import useSWR from "swr";
import { fetcher } from "../utils";
import ClientesTable from "../components/ClientesTable";
import ProgressBar from "react-bootstrap/ProgressBar";
import Spinner from "react-bootstrap/Spinner";
import { Button, Container } from "react-bootstrap";
import Router from "preact-router";

const Home = () => {
  const { data, isLoading, mutate } = useSWR(
    "http://localhost:3000/api/clientes",
    fetcher
  );

  return (
    <>
      <h1>Clientes</h1>
 
      <Button variant="primary" href="/clientes"  className=" my-3">
        Alta Cliente
      </Button>{" "}
     
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
