import axios from "axios";
import { useEffect, useState } from "react";
import Photo from "../Photo/Photo";

const PhotoList = () => {
   const [photoList, setPhotoList] = useState([]);

   async function downloadPhoto() {
      const response = await axios.get(
         "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
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
      <div className="border-2 flex flex-wrap    justify-center items-center gap-5 border-blue-500 raounded">
         {photoList.map((e) => (
            // <img key={e.id} src={e.url} alt="pic" />
            <Photo key={e.id} galleyPic={e.url} id={e.id} />
         ))}
      </div>
   );
};

export default PhotoList;
