import { Routes, Route } from "react-router-dom";
import { Gallery, Photo } from "../Components";
const CustomRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Gallery />} />
         <Route path="/photo/" element={<Photo />} />
      </Routes>
   );
};

export default CustomRoutes;
