import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PhotoDetails = () => {
   const { id } = useParams();

   const [photo, setPhoto] = useState({});

   async function dowmloadPhoto() {
      const response = await axios.get(
         `https://api.slingacademy.com/v1/sample-data/photos/${id}`
      );
      console.log("details", response);
      setPhoto({ image: response.data.photo.url });
   }
   useEffect(() => {
      dowmloadPhoto();
   }, []);

   console.log(id);
   return (
      <div className="bg-blue-500 text-[5rem]">
         <img src={photo.image} alt="" />
      </div>
   );
};

export default PhotoDetails;
