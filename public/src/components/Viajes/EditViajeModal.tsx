//@ts-nocheck
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 
import EditViaje from './EditViaje';
const EditViajeModal = (props)  => {
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Viaje 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
        <EditViaje inputsInfo={props.inputInfo}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

 export default EditViajeModal