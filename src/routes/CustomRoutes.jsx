import { Routes, Route } from "react-router-dom";
import { Gallery, PhotoDetails } from "../Components";
const CustomRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Gallery />} />
         <Route path="/photoDetails/" element={<PhotoDetails />} />
      </Routes>
   );
};

export default CustomRoutes;
