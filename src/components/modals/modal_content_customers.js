import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import customerService from "../../api/customers_api";
import Button from "react-bootstrap/Button";

const ModalContentCustomers = ({ selectedItem, action }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(0);

  const customerObj = {
    name: name.trim() || selectedItem?.name,
    address: address.trim() || selectedItem?.address,
    phoneNumber: phone !== 0 ? phone : selectedItem?.phoneNumber,
  };

  const updateCustomer = async () => {
    try {
      let response = await customerService.updateCustomer(
        selectedItem.customerId,
        customerObj
      );
      alert(response);
    } catch (e) {
      console.error(e);
    }
  };

  const addCustomer = async () => {
    try {
      let response = await customerService.addCustomer(customerObj);
      alert(response);
    } catch (e) {
      console.error(e);
    }
  };

  const makeRequest = () => {
    action !== "add" ? updateCustomer() : addCustomer();
  };

  return (
    <Modal.Body>
      <div>
        <Row>
          <Col>
            <h4>Name: </h4>
            <input
              defaultValue={action !== "add" ? selectedItem?.name : ""}
              onChange={(e) => setName(e.target.value)}
              style={{ width: `${selectedItem?.title?.length}ch` }}
            />
            <h4>Address: </h4>
            <input
              defaultValue={action !== "add" ? selectedItem?.address : ""}
              onChange={(e) => setAddress(e.target.value)}
              style={{ width: `${selectedItem?.title?.length}ch` }}
            />
            <h4>Phone: </h4>
            <input
              defaultValue={action !== "add" ? selectedItem?.phoneNumber : ""}
              onChange={(e) => setPhone(e.target.value)}
              style={{ width: `${selectedItem?.title?.length}ch` }}
            />
          </Col>
        </Row>
      </div>
      <br></br>
      <Button
        style={{ marginRight: "1rem" }}
        onClick={makeRequest}
        variant="primary"
        type="submit"
      >
        {action !== "update" ? "Save Customer" : "Update Customer"}
      </Button>
    </Modal.Body>
  );
};

export default ModalContentCustomers;
