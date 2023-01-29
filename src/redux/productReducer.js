export const ADD_ORDER = "ADD_ORDER";
export const GET_PRODUCT = "GET_PRODUCT";
export const CLEAR_ALL_ORDERS = "CLEAR_ALL_ORDERS";
export const DELETE_ITEM = "DELETE_ITEM";
export const ORDER_COUNT_INCR_ACTION = "ORDER_COUNT_INCR_ACTION";
export const ORDER_COUNT_DECR_ACTION = "ORDER_COUNT_DECR_ACTION";
export const SET_CATEGORIES = "SET_CATEGORIES";

const initialState = {
  data: [],
  orders: [],
  categories: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const findProduct = state.orders.findIndex(
        (el) => el.id === action.newProduct.id
      );
      if (findProduct === -1) {
        return {
          ...state,
          orders: [{ ...action.newProduct }, ...state.orders],
        };
      } else {
        state.orders[findProduct].count += action.newProduct.count;
        state.orders[findProduct].totalSum += action.newProduct.totalSum;
        return {
          ...state,
        };
      }
      // return { ...state, findProduct };

    case GET_PRODUCT:
      return { ...state, data: [...action.data] };

    case SET_CATEGORIES:
      return { ...state, categories: [...action.categories] };

    case DELETE_ITEM:
      const filteredOrders = state.orders.filter((el) => el.id !== action.id);
      return {
        ...state,
        orders: [...filteredOrders],
      };

    case CLEAR_ALL_ORDERS:
      return { ...state, orders: [] };

    case ORDER_COUNT_INCR_ACTION:
      const incrOrder = state.orders.find((el) => el.id === action.id);
      return { ...state, order_incr: [...(incrOrder + 1)] };

    case ORDER_COUNT_DECR_ACTION:
      const decrOrder = state.orders.find((el) => el.id === action.id);
      return { ...state, order_decr: [...(decrOrder - 1)] };

    default:
      return state;
  }
};

export const addOrderAction = (newProduct) => ({
  type: ADD_ORDER,
  newProduct,
});
export const getProductsAction = (data) => ({ type: GET_PRODUCT, data });
export const setCategoriesAction = (categories) => ({
  type: SET_CATEGORIES,
  categories,
});
export const deleteItemAction = (id) => ({ type: DELETE_ITEM, id });
export const deleteAllOrdersAction = () => ({ type: CLEAR_ALL_ORDERS });
export const incrActionCreator = (id) => ({
  type: ORDER_COUNT_INCR_ACTION,
  id,
});
export const decrActionCreator = (id) => ({
  type: ORDER_COUNT_DECR_ACTION,
  id,
});
