import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { apiMethods, clientesFormHeaders, fetcher } from "../utils"; 
import { IFormCliente } from "../utils/interfaces";
const AltaCliente = () => {
  const fetchAddCliente = async (cliente: IFormCliente, e:any) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/clientes`,
        clientesFormHeaders(cliente, apiMethods.PUT)
      );
      console.log("response", response.status)
      if (response.status != 200) {
        throw new Error();
      }

      e.target.reset()
      /*
      sendNotification({
        msg: `actualizado exitosamente.`,
        variant: 'success',
    });*/
    } catch (err) {
        console.log("err", err)
      /*  sendNotification({
        msg: `Hubo un error al actualizar`,
        variant: "error",
      });*/
    }
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    const nombre = e.target[0].value;
    const cuit = e.target[1].value;
    const cliente = { nombre, cuit };

    fetchAddCliente(cliente,e);
  };

  return (
    <div className="d-flex justify-content-center pt-5">
      {/*@ts-ignore */}
      <Form onSubmit={(e) => submitForm(e)}>
        {/*@ts-ignore */}
        <Form.Group className="mb-4" controlId="formNombre">
          <Form.Control type="text" placeholder="Ingresar Nombre" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formCUIT">
          {/*@ts-ignore */}
          <Form.Control type="text" placeholder="CUIT" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AltaCliente;
