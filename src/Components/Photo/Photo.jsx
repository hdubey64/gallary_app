import { Link } from "react-router-dom";

const Photo = ({ galleyPic, id }) => {
   return (
      <Link to={`photoDetails/${id}`}>
         <img
            src={galleyPic}
            alt="Gallery Pic"
            className="w-full md:w-72 rounded md:rounded-lg "
         />
      </Link>
   );
};

export default Photo;
