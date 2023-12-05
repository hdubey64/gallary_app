import React from "react";
import { Link } from "react-router-dom";

const Photo = () => {
   return (
      <div>
         <Link to={`photoDetails/`}>
            <img
               src="https://img.freepik.com/premium-photo/cute-baby-red-panda-lesser-panda-character-3d-rendering-cartoon-illustration_691560-4376.jpg?size=626&ext=jpg&ga=GA1.1.901052190.1701795903&semt=ais"
               alt=""
               className="w-64 rounded-2xl border-4 border-white"
            />
         </Link>
      </div>
   );
};

export default Photo;
