import axios from "axios";

let API_URL = "https://localhost:7198";

const getVideosList = async () => {
  try {
    let response = await axios.get(API_URL + "/api/videos");
    return response.data;
  } catch (exception) {
    console.error("An error occurred:", exception.message);
  }
};

const getVideoById = async (id) => {
  try {
    let response = await axios.get(API_URL + `/api/videos/${id}`);
    console.log(response);
    return response.data;
  } catch (exception) {
    console.error("An error occurred:", exception.message);
  }
};

const addVideo = async (video) => {
  try {
    let response = await axios.post(API_URL + `/api/videos`, video);
    console.log("video added successfully:", response.data);
    return "video added successfully";
  } catch (exception) {
    console.error("An error occurred:", exception.message);
  }
};

const updateVideo = async (id, video) => {
  try {
    let response = await axios.put(API_URL + `/api/videos/${id}`, video);
    console.log("video updated successfully:", response.data);
    return "video detail updated successfully";
  } catch (exception) {
    console.error("An error occurred:", exception.message);
  }
};

const videoService = { getVideosList, getVideoById, addVideo, updateVideo };

export default videoService;
