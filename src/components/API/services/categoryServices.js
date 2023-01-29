import { instance } from "../Axios";

export const getCategories = () => instance.get("products/categories");
