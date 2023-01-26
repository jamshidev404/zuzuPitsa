export const ADD_ORDER = "ADD_ORDER";
export const GET_PRODUCT = "GET_PRODUCT";
export const CLEAR_ALL_ORDERS = "CLEAR_ALL_ORDERS";
export const DELETE_ITEM = "DELETE_ITEM";
export const ORDER_COUNT_INCR_ACTION = "ORDER_COUNT_INCR_ACTION";
export const ORDER_COUNT_DECR_ACTION = "ORDER_COUNT_DECR_ACTION";

const initialState = {
  data: [],
  orders: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const findProduct = state.orders.find((el) => el.id == action.id);

      return {
        ...state,
        orders: [
          { ...(action.newProduct ? findProduct : action.newProduct) },
          ...state.orders,
        ],
      };
    case GET_PRODUCT:
      return { ...state, data: [...action.data] };
    case DELETE_ITEM:
      const filteredOrders = state.orders.filter((el) => el.id !== action.id);
      if(filteredOrders !== -1) {
        return {
          ...state,
          orders: [...filteredOrders],
        }
      }
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

export const addOrderAction = (newProduct, id) => ({
  type: ADD_ORDER,
  newProduct,
  id,
});
export const getProductsAction = (data) => ({ type: GET_PRODUCT, data });
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
