import axios from "axios";
import { useEffect, useState } from "react";
import Photo from "../Photo/Photo";

const PhotoList = () => {
   const [photoList, setPhotoList] = useState([]);

   async function downloadPhoto() {
      const response = await axios.get(
         "https://api.slingacademy.com/v1/sample-data/photos"
      );
      // const abcd = response;

      console.log("Response", response);
      // const photoResultPromise = response.map((e) => axios.get(e.data));
      // const photoData = await axios.all(photoResultPromise);
      // const photoResult = response.data.photos;
      // console.log("Photo Result", photoResult);

      // const photo = photoResult.map((e) => e.url);
      // console.log("Photo", photo);

      // setPhotoList(photoResult.map((e) => e));
      setPhotoList(response.data.photos);

      // console.log("List", photoList);
   }

   useEffect(() => {
      downloadPhoto();
   }, []);
   useEffect(() => {
      console.log("List", photoList);
   }, [photoList]);

   return (
      <div className="border-2 flex justify-between items-center border-blue-500 raounded">
         <div>
            {photoList.map((e) => (
               // <img key={e.id} src={e.url} alt="pic" />
               <Photo key={e.id} galleyPic={e.url} />
            ))}
         </div>
      </div>
   );
};

export default PhotoList;
