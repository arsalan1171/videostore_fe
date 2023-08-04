import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import videoService from "../../api/videos_api";

const ModalContentVideos = ({ selectedItem, action }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoCopies, setVideoCopies] = useState(0);
  const [rentalPrice, setRentalPrice] = useState(0.0);

  const videoObj = {
    title: title.trim() || selectedItem?.title,
    description: description.trim() || selectedItem?.description,
    numberOfCopies:
      videoCopies !== 0 ? videoCopies : selectedItem?.numberOfCopies,
    rentalPrice: rentalPrice !== 0 ? rentalPrice : selectedItem?.rentalPrice,
  };

  const updateVideo = async () => {
    try {
      let response = await videoService.updateVideo(
        selectedItem.videosId,
        videoObj
      );
      alert(response);
    } catch (e) {
      console.error(e);
    }
  };

  const addVideo = async () => {
    try {
      let response = await videoService.addVideo(videoObj);
      alert(response);
    } catch (e) {
      console.error(e);
    }
  };

  const makeRequest = () => {
    action !== "add" ? updateVideo() : addVideo();
  };

  return (
    <Modal.Body>
      <div>
        <Row>
          <Col>
            <h4>Title: </h4>
            <input
              defaultValue={action !== "add" ? selectedItem?.title : ""}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: `${selectedItem?.title?.length}ch` }}
            />
            <h4>Description:</h4>
            <input
              defaultValue={action !== "add" ? selectedItem?.description : ""}
              onChange={(e) => setDescription(e.target.value)}
              style={{ width: `${selectedItem?.description?.length}ch` }}
            />
            <h4>Number of Video Copies:</h4>
            <input
              defaultValue={action !== "add" ? selectedItem.numberOfCopies : ""}
              onChange={(e) => setVideoCopies(e.target.value)}
              style={{ width: `${selectedItem?.numberOfCopies?.length}ch` }}
            />
            <h4>Rental Price:</h4>
            <input
              defaultValue={action !== "add" ? selectedItem.rentalPrice : ""}
              onChange={(e) => setRentalPrice(e.target.value)}
              style={{ width: `${selectedItem?.rentalPrice?.length}ch` }}
            />
          </Col>
        </Row>
      </div>
      <br></br>
      <Button
        style={{ marginRight: "1rem" }}
        variant="primary"
        type="submit"
        onClick={makeRequest}
      >
        {action !== "update" ? "Save Video" : "Update Video"}
      </Button>
    </Modal.Body>
  );
};

export default ModalContentVideos;
