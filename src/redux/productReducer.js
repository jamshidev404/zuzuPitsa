export const ADDORDER = "ADDORDER";

const initialState = {
  data: [
    {
      category: "pizza",
      products: [
        {
          id: "ft46yh6",
          image: "../../Images/pizza1.png",
          title: "Барбекюm",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "67ujbgy5g",
          image: "../../Images/pizza2.png",
          title: "Барбекюnop",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "56788",
          image: "../../Images/pizza3.png",
          title: "Барбекюpo",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "g45b6d",
          image: "../../Images/pizza1.png",
          title: "Барбекюsz",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "gv456b5",
          image: "../../Images/pizza2.png",
          title: "Барбекюmu",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "g45yg",
          image: "../../Images/pizza3.png",
          title: "Барбекюny",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "f45yb",
          image: "../../Images/pizza1.png",
          title: "Барбекюt",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "g5u7h4",
          image: "../../Images/pizza2.png",
          title: "Барбекюse",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "g54",
          image: "../../Images/pizza3.png",
          title: "Барбекюmv",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "rgb45",
          image: "../../Images/pizza1.png",
          title: "Барбекюnee",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
      ],
    },
    {
      category: "pasta",
      products: [
        {
          id: "vgr",
          image: "../../Images/pasta.png",
          title: "Барбекюmw",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "vrbg",
          image: "../../Images/pasta.png",
          title: "Барбекюnaa",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
      ],
    },
    {
      category: "salat",
      products: [
        {
          id: "derh",
          image: "../../Images/salat.png",
          title: "Барбекюmk",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "dede",
          image: "../../Images/salat.png",
          title: "Барбекюnn",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
      ],
    },
  ],

  orders: [
  
  ],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDORDER":
      return { ...state, orders: [{ ...action.newOrder }, ...state.orders] };
    default:
      return state;
  }
};

export const addOrderAction = (newOrder) => ({ type: "ADDORDER", newOrder });
