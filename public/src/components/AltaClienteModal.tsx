//@ts-nocheck
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AltaCliente from '../pages/AltaCliente';
const AltaClienteModal = (props)  => {
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Alta Cliente
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
        <AltaCliente/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

 export default AltaClienteModal