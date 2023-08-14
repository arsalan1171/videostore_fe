import axios from "axios";

let API_URL = "http://localhost:5254";

const getCustomersList = async () => {
  try {
    let response = await axios.get(API_URL + "/api/customers");
    return response.data;
  } catch (exception) {
    console.error("An error occurred:", exception.message);
  }
};

const getCustomerById = async (id) => {
  try {
    let response = await axios.get(API_URL + `/api/customers/${id}`);
    return response.data;
  } catch (exception) {
    console.error("An error occurred:", exception.message);
  }
};

const addCustomer = async (customer) => {
  try {
    let response = await axios.post(API_URL + `/api/customers`, customer);
    console.log("Customer added successfully:", response.data);
    return "customer added successfully";
  } catch (exception) {
    console.error("An error occurred:", exception.message);
  }
};

const updateCustomer = async (id, customer) => {
  try {
    let response = await axios.put(API_URL + `/api/customers/${id}`, customer);
    console.log("Customer updated successfully:", response.data);
    return "customer detail updated successfully";
  } catch (exception) {
    console.error("An error occurred:", exception.message);
  }
};

const customerService = {
  getCustomersList,
  getCustomerById,
  addCustomer,
  updateCustomer,
};

export default customerService;
