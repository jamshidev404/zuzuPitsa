import FilialInfo from "../components/FilialInfo/Info";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";
import NotFound from "../components/NotFound/NotFound";
import Filial from "../components/Filial/Filial";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    childs: [
      {
        path: "contacts",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "filial",
        element: <Filial />,
      },
      {
        path: "filial/:id",
        element: <FilialInfo />,
      },
      {
        path: "notfound",
        element: <NotFound />,
      },
    ],
  },
];
