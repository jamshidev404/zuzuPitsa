import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./mock/routes";
import { useSelector } from "react-redux";

function App() {
  return (
    <>
      <Routes>
        {routes.map((el) => (
          <Route key={el.path} path={el.path} element={el.element}>
            {el.childs.map((e) =>
              e.path === el.path ? (
                <Route key={el.path} index element={e.element} />
              ) : (
                <Route key={el.path} path={e.path} element={e.element} />
              )
            )}
          </Route>
        ))}
      </Routes>
    </>
  );
}

export default App;
