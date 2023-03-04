import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import Project from "../src/pages/project.jsx";
import PropertyDetail from "../src/widgets/cards/PropertyDetail.js";

function App() {
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />

        <Route path={"/projects/:id/:title"} element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
