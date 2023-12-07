import { Link } from "react-router-dom";

const Photo = ({ galleyPic, id }) => {
   return (
      <Link className="relative" to={`photoDetails/${id}`}>
         <span className="w-full  h-full bg-transparent rounded md:rounded-lg hover:bg-black opacity-40 block  absolute "></span>
         <div className="z-0">
            <img
               src={galleyPic}
               alt="Gallery Pic"
               className="w-full md:w-72 rounded border-2 border-blue-500 hover:border-white md:rounded-lg "
            />
            <h1 className="absolute top-0 py-2 bg-blue-500 w-6  font-bold left-0">
               {id}
            </h1>
         </div>
      </Link>
   );
};

export default Photo;
