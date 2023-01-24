import { createContext, useState } from "react";
import Korzinka from "../Korzinka/Korzinka";
import Banner from "../Banner/Banner";
import styles from "./Home.module.scss";
import CardComponent from "../CardComponent/CardComponent";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import Order from "../Order/Order";
import { addOrderAction } from "../../redux/productReducer";
import SideBar from "../SideBar/Sidebar";
import axios from "axios";
import { useEffect } from "react";

export const Context = createContext(null);

const Home = () => {
  const data = useSelector((state) => state.products.data);
  const orders = useSelector((state) => state.products.orders);
  const [currentProduct, setcurrentProduct] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const onProductButtonClick = (id) => {
    const products = data.reduce((total, el) => [...total, ...el.products], []);
    setcurrentProduct(products.find((el) => el.id === id));
    handleOpen();
  };

  const addToOrders = (currentProduct, count) => {
    const newProduct = {
      ...currentProduct,
      count,
      totalSum: currentProduct.price * count,
    };
    dispatch(addOrderAction(newProduct));
    handleClose();
  };

  useEffect(() => {
    const response = axios
      .get("https://fakestoreapi.com/products")
      .then(() => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  const formatCategories = (arr) => {};

  const states = {
    handleOpen,
    onProductButtonClick,
    addToOrders,
  };

  return (
    <>
      <Context.Provider value={states}>
        const getting = formatCategories(data)
        <SideBar />
        <Korzinka />
        <Banner />
        {data.map((el) => (
          <CardComponent
            key={el.category}
            category={el.category}
            products={el.products}
          />
        ))}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Order
            product={currentProduct}
            onClickClose={handleClose}
            addToOrders={addToOrders}
          />
        </Modal>
      </Context.Provider>
    </>
  );
};

export default Home;
