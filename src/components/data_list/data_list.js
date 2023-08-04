import videoService from "../../api/videos_api";
import customerService from "../../api/customers_api";
import ListGroup from "react-bootstrap/ListGroup";
import { useState, useEffect } from "react";
import ModalMain from "../modals/modal_main";

const DataList = (searchQuery) => {
  const [DataList, setDataList] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedItem, setselectedItem] = useState({});

  const { dataType } = searchQuery;

  const handleClose = () => {
    setShow(false);
    setselectedItem({});
  };

  const handleShowselectedItem = async (id) => {
    setShow(true);
    if (dataType === "video") {
      const getDesiredVideo = await videoService.getVideoById(id);
      setselectedItem(getDesiredVideo);
    } else if (dataType === "customer") {
      const getCustomer = await customerService.getCustomerById(id);
      setselectedItem(getCustomer);
    } else {
      setselectedItem({});
    }
  };

  useEffect(() => {
    let isComponentMounted = true;
    const loadDataList = async () => {
      if (isComponentMounted) {
        if (dataType === "video") {
          const getVideosList = await videoService.getVideosList();
          setDataList(getVideosList);
        } else if (dataType === "customer") {
          const getCustomersList = await customerService.getCustomersList();
          setDataList(getCustomersList);
        } else {
          setDataList([]);
        }
      }
    };
    loadDataList();

    return () => {
      isComponentMounted = false;
    };
  }, [dataType]);

  const filteredVideo = !searchQuery?.videoName
    ? DataList
    : DataList.filter((video) =>
        video.title.toLowerCase().includes(searchQuery?.videoName.toLowerCase())
      );

  const filteredCustomer = !searchQuery?.customerName
    ? DataList
    : DataList.filter((customer) =>
        customer.name
          .toLowerCase()
          .includes(searchQuery?.customerName.toLowerCase())
      );

  const filteredFinal = dataType === "video" ? filteredVideo : filteredCustomer;

  return (
    <>
      {filteredFinal?.length !== 0 ? (
        <div style={{ height: "20rem", overflowY: "scroll" }}>
          {filteredFinal?.map((data, index) => {
            const id = dataType === "video" ? data.videosId : data.customerId;
            return (
              <ListGroup variant="flush" key={index}>
                <ListGroup.Item
                  action
                  onClick={() => handleShowselectedItem(id)}
                >
                  {dataType === "video" ? data.title : data.name}
                </ListGroup.Item>
              </ListGroup>
            );
          })}
        </div>
      ) : (
        <> </>
      )}

      <ModalMain
        show={show}
        onHide={() => handleClose()}
        animation={false}
        dataType={dataType}
        selectedItem={selectedItem}
        action="update"
      ></ModalMain>
    </>
  );
};

export default DataList;
