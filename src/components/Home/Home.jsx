import { createContext, useState } from "react";
import Banner from "../Banner/Banner";
import CardComponent from "../CardComponent/CardComponent";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import Order from "../Order/Order";
import {
  addOrderAction,
  getProductsAction,
  setCategoriesAction,
} from "../../redux/productReducer";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "../Loader/Loader";
import Category from "../Category/Category";
import { instance } from "../API/Axios";
import { getProducts } from "../API/services/productServices";
import { getCategories } from "../API/services/categoryServices";

export const Context = createContext(null);

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.data);
  const [currentProduct, setcurrentProduct] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((response) => {
        console.log();
        dispatch(getProductsAction(response.data));
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
   getCategories()
      .then((response) => {
        dispatch(setCategoriesAction(response.data));
      });
  }, []);

  const formatCategories = (arr) => {
    const categories = arr.reduce(
      (total, v) =>
        total.includes(v.category) ? total : [...total, v.category],
      []
    );
    return categories.reduce((total, category) => {
      return [
        ...total,
        { category, products: arr.filter((e) => e.category === category) },
      ];
    }, []);
  };

  const onProductButtonClick = (id) => {
    handleOpen();
    // const products = data.reduce((total, el) => [...total, ...el.products], []);
    setcurrentProduct(data.find((el) => el.id === id));
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

  const states = {
    handleOpen,
    onProductButtonClick,
    addToOrders,
  };

  const formatAllCategories = formatCategories(data);
  return (
    <>
      <Context.Provider value={states}>
        {/* <SideBar /> */}

        <Banner />
        <Category />
        {isLoading ? (
          <Spinner />
        ) : (
          formatAllCategories?.map((el) => (
            <CardComponent
              id={el?.category}
              key={el?.id}
              category={el?.category}
              products={el?.products}
            />
          ))
        )}
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
