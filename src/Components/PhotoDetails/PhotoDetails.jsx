import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PhotoDetails = () => {
   // State to track loading status
   const [isLoading, setIsLoading] = useState(true);

   // Extract the 'id' parameter from the route
   const { id } = useParams();

   // State to store photo details
   const [photo, setPhoto] = useState({});

   // Function to fetch photo details from the API
   async function downloadPhoto() {
      try {
         // Set loading to true to indicate the start of data fetching
         setIsLoading(true);

         // Make an API request to get photo details based on the 'id'
         const response = await axios.get(
            `https://api.slingacademy.com/v1/sample-data/photos/${id}`
         );

         // Update the state with photo details from the API response
         setPhoto({
            image: response.data.photo.url,
            title: response.data.photo.title,
            description: response.data.photo.description,
         });

         // Set loading to false to indicate the successful completion of data fetching
         setIsLoading(false);
      } catch (error) {
         // Log an error if there's an issue with the API request
         console.error("Error fetching photo details:", error);
      }
   }

   // Fetch photo details when the component mounts or when 'id' changes
   useEffect(() => {
      downloadPhoto();
   }, [id]);

   // Render the photo details with responsive styling
   return (
      <div className="bg-blue-500">
         <main className="py-10 lg:py-10 px-5 lg:px-24">
            <div className="flex flex-col lg:flex-row shadow-xl bg-white justify-center items-center gap-2 md:gap-10 ">
               {/* Display loading message if data is being fetched */}
               {isLoading ? (
                  <div className="text-[5rem] lg:w-5/12 text-blue-500">
                     Loading...
                  </div>
               ) : (
                  /* Display the larger view of the photo if data has been loaded */
                  <div className="text-[5rem] lg:w-5/12">
                     <img
                        src={photo.image}
                        alt="Larger View"
                        className="w-full"
                     />
                  </div>
               )}
               {/* Display photo title and description */}
               <div className="lg:w-7/12 py-5 px-5">
                  <h1 className="text-blue-500 my-2 text-3xl md:leading-[2rem] md:text-[2rem] lg:leading-[3rem] lg:text-[2.1rem] xl:leading-[4rem] xl:text-[3.5rem] font-semibold text-left">
                     {photo.title}
                  </h1>
                  <p className="text-left md:text-xl text-blue-500 opacity-80 font-semibold">
                     {photo.description}
                  </p>
               </div>
            </div>
         </main>
      </div>
   );
};

export default PhotoDetails;
