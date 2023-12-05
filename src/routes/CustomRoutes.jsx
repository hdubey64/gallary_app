import { Routes, Route } from "react-router-dom";
import { Gallery, PhotoDetails } from "../Components";
const CustomRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Gallery />} />
         <Route path="/photo/" element={<PhotoDetails />} />
      </Routes>
   );
};

export default CustomRoutes;
