import { Link } from "react-router-dom";

const Photo = ({ galleyPic }) => {
   return (
      <Link to={`photoDetails/`}>
         <img
            src={galleyPic}
            alt="Gallery Pic"
            className="w-full md:w-48 rounded md:rounded-2xl border-4 border-white"
         />
      </Link>
   );
};

export default Photo;
