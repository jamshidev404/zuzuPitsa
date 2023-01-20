const initialState = {
  data: [
    {
      category: "pizza",
      products: [
        {
          image: "../../Images/pizza1.png",
          title: "Барбекюm",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          image: "../../Images/pizza2.png",
          title: "Барбекюnop",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          image: "../../Images/pizza3.png",
          title: "Барбекюpo",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          image: "../../Images/pizza1.png",
          title: "Барбекюsz",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          image: "../../Images/pizza2.png",
          title: "Барбекюmu",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          image: "../../Images/pizza3.png",
          title: "Барбекюny",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          image: "../../Images/pizza1.png",
          title: "Барбекюt",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          image: "../../Images/pizza2.png",
          title: "Барбекюse",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          image: "../../Images/pizza3.png",
          title: "Барбекюmv",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
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
          image: "../../Images/pasta.png",
          title: "Барбекюmw",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
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
          image: "../../Images/salat.png",
          title: "Барбекюmk",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          image: "../../Images/salat.png",
          title: "Барбекюnn",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
      ],
    },
  ],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "":
      return {};
    default:
      return state;
  }
};
