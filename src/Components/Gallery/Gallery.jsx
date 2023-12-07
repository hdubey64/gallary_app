import PhotoList from "../PhotoList/PhotoList";

const Gallery = () => {
   return (
      <section className="bg-blue-500 w-full  pb-5">
         <main className="p-6 space-y-10">
            <div className="lg:px-4">
               <PhotoList />
            </div>
         </main>
      </section>
   );
};

export default Gallery;
