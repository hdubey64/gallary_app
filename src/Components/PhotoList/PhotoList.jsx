import axios from "axios";
import { useEffect, useState } from "react";
import Photo from "../Photo/Photo";

const PhotoList = () => {
   const [isLoading, setIsLoading] = useState(true);

   const [photoList, setPhotoList] = useState([]);

   async function downloadPhoto() {
      setIsLoading(true);
      const response = await axios.get(
         "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
      );

      setPhotoList(response.data.photos);
      setIsLoading(false);
   }

   useEffect(() => {
      downloadPhoto();
   }, []);

   return (
      <div className=" space-y-10">
         <div className="flex flex-wrap justify-center items-center gap-4 raounded">
            {isLoading
               ? "Loading....."
               : photoList.map((e) => (
                    // <img key={e.id} src={e.url} alt="pic" />
                    <Photo key={e.id} galleyPic={e.url} id={e.id} />
                 ))}
         </div>
      </div>
   );
};

export default PhotoList;
