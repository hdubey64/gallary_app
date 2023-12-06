import { Link } from "react-router-dom";

const Photo = ({ galleyPic }) => {
   return (
      <div>
         <Link to={`photoDetails/`}>
            <img
               src={galleyPic}
               alt="Gallery Pic"
               className="w-64 rounded-2xl border-4 border-white"
            />
         </Link>
      </div>
   );
};

export default Photo;
