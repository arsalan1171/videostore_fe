import { Form, FormControl, Button } from "react-bootstrap";
import React, { useState } from "react";
import DataList from "../data_list/data_list";
import ModalMain from "../modals/modal_main";

const CustomerComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.searchInput.value;
    setSearchText(inputValue);
  };

  return (
    <>
      <div className="ms-4">
        <h2>Customer Master Maintenence Screen</h2>
      </div>

      <h3 className="m-4">Search Customers</h3>
      <div className="search-form">
        <Form
          style={{ display: "flex", width: "30rem", margin: "1.25rem " }}
          onSubmit={(e) => handleSubmit(e)}
          className="mb-4"
        >
          <FormControl
            type="text"
            id="searchInput"
            placeholder="Search Customers..."
            className="me-3"
          />
          <Button
            style={{ marginRight: "1rem" }}
            variant="primary"
            type="submit"
          >
            Search
          </Button>

          <Button
            style={{ marginRight: "1rem", width: "70%" }}
            variant="primary"
            type="button"
            onClick={() => setShow(true)}
          >
            Add Customer
          </Button>
        </Form>
        <DataList customerName={searchText} dataType={"customer"} />
      </div>

      <ModalMain
        show={show}
        onHide={() => setShow(false)}
        dataType={"customer"}
        action="add"
      />
    </>
  );
};

export default CustomerComponent;
