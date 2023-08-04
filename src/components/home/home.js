import { Form, FormControl, Button } from "react-bootstrap";
import React, { useState } from "react";
import DataList from "../data_list/data_list";
import ModalMain from "../modals/modal_main";

const Home = () => {
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
        <h2>Video Master Maintenence Screen</h2>
      </div>

      <h3 className="m-4">Search Videos</h3>
      <div className="search-form">
        <Form
          style={{ display: "flex", width: "30rem", margin: "1.25rem " }}
          onSubmit={(e) => handleSubmit(e)}
          className="mb-4"
        >
          <FormControl
            type="text"
            id="searchInput"
            placeholder="Search Videos..."
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
            style={{ marginRight: "1rem", width: "50%" }}
            variant="primary"
            type="submit"
            onClick={() => setShow(true)}
          >
            Add Video
          </Button>
        </Form>
        <DataList videoName={searchText} dataType={"video"} />
        <ModalMain
          show={show}
          onHide={() => setShow(false)}
          dataType={"video"}
          action="add"
        />
      </div>
    </>
  );
};

export default Home;
