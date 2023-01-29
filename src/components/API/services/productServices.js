import { instance } from "../Axios";

export const getProducts = () => instance.get("products");
