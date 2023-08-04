import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import CustomerComponent from "./components/customer_component/customer_component";
import Home from "./components/home/home";
import Navigation from "./components/navigation/navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers_view" element={<CustomerComponent />} />
      </Routes>
    </>
  );
};

export default App;
