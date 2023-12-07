import axios from "axios";
import { useEffect, useState } from "react";
import Photo from "../Photo/Photo";

const PhotoList = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [photoList, setPhotoList] = useState([]);

   const [photoUrl, setPhotoUrl] = useState(
      "https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20"
   );
   const [urlOffest, setUrlOffest] = useState(0);

   const handlePrev = () => {
      urlOffest === 0 ? alert("Start of List") : setUrlOffest(urlOffest - 20);
   };

   const handleOffset = () => {
      urlOffest === 120 ? alert("End of List") : setUrlOffest(urlOffest + 20);
   };

   async function downloadPhoto() {
      setIsLoading(true);

      const response = await axios.get(
         // "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
         photoUrl
      );

      setPhotoList(response.data.photos);
      setIsLoading(false);
   }

   useEffect(() => {
      setPhotoUrl(
         `https://api.slingacademy.com/v1/sample-data/photos?offset=${urlOffest}&limit=20`
      );
   });

   useEffect(() => {
      downloadPhoto();
   }, [photoUrl]);

   return (
      <div className=" space-y-10">
         <div className="flex flex-wrap relative justify-center items-center gap-4 raounded">
            {isLoading
               ? "Loading....."
               : photoList.map((e) => (
                    // <img key={e.id} src={e.url} alt="pic" />
                    <>
                       <Photo key={e.id} galleyPic={e.url} id={e.id} />
                    </>
                 ))}
         </div>
         <div className="flex justify-center items-center  gap-10">
            <button
               onClick={handlePrev}
               className="hover:bg-white rounded  py-2 px-12 bg-slate-300 font-semibold"
            >
               Prev
            </button>
            <button
               onClick={handleOffset}
               className="hover:bg-white rounded  py-2 px-12 bg-slate-300 font-semibold"
            >
               Next
            </button>
         </div>
      </div>
   );
};

export default PhotoList;
