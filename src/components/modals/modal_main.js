import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalContentVideos from "../modals/modal_content_videos";
import ModalContentCustomers from "../modals/modal_content_customers";

const ModalMain = (props) => {
  const title =
    props.action + " " + (props.dataType === "video" ? "video" : "customer");

  return (
    <>
      <Modal show={props.show} onHide={props.onHide} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        {props.dataType !== "video" ? (
          <ModalContentCustomers
            selectedItem={props.selectedItem}
            action={props.action}
          />
        ) : (
          <ModalContentVideos
            selectedItem={props.selectedItem}
            action={props.action}
          />
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalMain;
