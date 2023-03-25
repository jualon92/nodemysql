import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { apiMethods, clientesFormHeaders, fetcher } from "../../utils";
import { IFormCliente, IFormViaje } from "../../utils/interfaces";
import useSWR from "swr"
const AltaViaje = () => {
  const { data, isLoading, mutate } = useSWR(
    "http://localhost:3000/api/viajes",
    fetcher
  );


  const fetchAddViaje = async (viaje: IFormViaje, e: any ) => {
    console.log("pre fetch", viaje)
    try {
      const response = await fetch(
        `http://localhost:3000/api/viajes`,
        clientesFormHeaders(viaje, apiMethods.PUT)
      );
      console.log("response", response.status);
      if (response.status != 200) {
        throw new Error();
      }

      e.target.reset();
      /*
          sendNotification({
            msg: `actualizado exitosamente.`,
            variant: 'success',
        });*/
    } catch (err) {
      console.log("err", err);
      /*  sendNotification({
            msg: `Hubo un error al actualizar`,
            variant: "error",
          });*/
    }
  };

  const submitForm = (e: any) => {
    console.log("e", e.target[2].value)
    e.preventDefault();
    const nombre_chofer = e.target[0].value;
    const apellido_chofer = e.target[1].value;
    const dni_chofer = e.target[2].value;
    const patente = e.target[3].value;
    const cuit_cliente = e.target[4].value;
    const origen = e.target[5].value;
    const destino = e.target[6].value;
    const viaje = { nombre_chofer, apellido_chofer, dni_chofer, patente, cuit_cliente, origen, destino};

    fetchAddViaje(viaje, e); 
   //@ts-ignore
    //window.location.reload(false)

  };

  return (
    <div className="d-flex justify-content-center pt-5">
      {/*@ts-ignore */}
      <Form onSubmit={(e) => submitForm(e)}>
        {/*@ts-ignore */}
        <Form.Group className="mb-4" controlId="formNombre">
          {/*//@ts-ignore*/}
          <Form.Control
            type="text"
            placeholder="Ingresar Nombre"
            required
            pattern="[a-zA-Z]+"
          />
          <Form.Text className="text-muted"></Form.Text>
          <Form.Control.Feedback type="invalid">
            Agregar Nombre Chofer
          </Form.Control.Feedback>
        </Form.Group>
        {/*@ts-ignore */}
        <Form.Group className="mb-4" controlId="formApellido">
          {/*//@ts-ignore*/}
          <Form.Control
            type="text"
            placeholder="Ingresar Apellido"
            required
            pattern="[a-zA-Z]+"
          />
          <Form.Text className="text-muted"></Form.Text>
          <Form.Control.Feedback type="invalid">
            Agregar Apellido Chofer
          </Form.Control.Feedback>
        </Form.Group>
        {/*@ts-ignore */}
        <Form.Group className="mb-4" controlId="formDNI">
          {/*//@ts-ignore*/}
          <Form.Control type="text" placeholder="Ingresar DNI" required pattern="^\D*(?:\d\D*){7,14}$"/>
          <Form.Text className="text-muted"></Form.Text>
          <Form.Control.Feedback type="invalid">
            Agregar DNI Chofer
          </Form.Control.Feedback>
        </Form.Group>
        {/*@ts-ignore */}
        <Form.Group className="mb-4" controlId="formPatente">
          {/*//@ts-ignore*/}
          <Form.Control
            type="text"
            placeholder="Ingresar Patente"
            required 
          />
          <Form.Text className="text-muted"></Form.Text>
          <Form.Control.Feedback type="invalid">
            Agregar Patente
          </Form.Control.Feedback>
        </Form.Group>
        {/*@ts-ignore */}
        <Form.Group className="mb-2" controlId="formCUIT">
          {/*@ts-ignore */}
          <Form.Control
            type="text"
            placeholder="CUIT Cliente"
            pattern="^\D*(?:\d\D*){10,}$"
            required
          />
           <Form.Text className="text-muted">
           11 digitos
        </Form.Text>
          <Form.Control.Feedback type="invalid">
            Agregar CUIT de 11 digitos Cliente
          </Form.Control.Feedback>
        </Form.Group>

        {/*@ts-ignore */}
        <Form.Group className="mb-4" controlId="formOrigen">
          {/*//@ts-ignore*/}
          <Form.Control
            type="text"
            placeholder="Ingresar  Origen"
            required
            pattern="[a-zA-Z]+"
          />
          <Form.Text className="text-muted"></Form.Text>
          <Form.Control.Feedback type="invalid">
            Agregar Origen
          </Form.Control.Feedback>
        </Form.Group>
        {/*@ts-ignore */}
        <Form.Group className="mb-4" controlId="formDestino">
          {/*//@ts-ignore*/}
          <Form.Control
            type="text"
            placeholder="Ingresar Destino"
            required
            pattern="[a-zA-Z]+"
          />
          <Form.Text className="text-muted"></Form.Text>
          <Form.Control.Feedback type="invalid">
            Agregar Destino
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AltaViaje;
