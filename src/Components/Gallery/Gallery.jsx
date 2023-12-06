import Photo from "../Photo/Photo";
import PhotoList from "../PhotoList/PhotoList";

const Gallery = () => {
   return (
      <section className="bg-blue-500 w-screen pb-5">
         <header className="bg-white w-full">
            <h1 className="md:text-3xl md:font-bold md:py-2 md:px-5">
               Album Mingle
            </h1>
         </header>
         <main className="px-6">
            <div className="flex flex-col flex-wrap justify-center items-center md:flex-row  gap-5 p-5">
               <PhotoList />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
               <button className="bg-white md:text-2xl md:font-semibold rounded md:py-1 md:px-8 hover:bg-slate-200  ">
                  Prev
               </button>
               <button className="bg-white md:text-2xl md:font-semibold rounded md:py-1 md:px-8 hover:bg-slate-200  ">
                  Next
               </button>
            </div>
         </main>
      </section>
   );
};

export default Gallery;
