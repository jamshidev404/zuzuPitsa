import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='container'>
        <div className='main'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
