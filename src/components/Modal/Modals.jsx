import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProfileForm from './ProfileForm';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter Your Email for Updates
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProfileForm/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Modals() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button style={{backgroundColor: "#b40e0e", padding: "20px", fontSize: "18px"}} onClick={() => setModalShow(true)}>
        Get Update
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Modals