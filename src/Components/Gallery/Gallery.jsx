const Gallery = () => {
   return (
      <section className="bg-blue-500 w-screen">
         <main className="p-16 space-y-5">
            <header className="bg-white w-full">
               <h1 className="md:text-3xl md:font-bold md:py-2 md:px-5">
                  Album Mingle
               </h1>
            </header>
            <div className="flex flex-col flex-wrap justify-center items-center md:flex-row  gap-5 p-5">
               <img
                  src="https://img.freepik.com/premium-photo/cute-baby-red-panda-lesser-panda-character-3d-rendering-cartoon-illustration_691560-4376.jpg?size=626&ext=jpg&ga=GA1.1.901052190.1701795903&semt=ais"
                  alt=""
                  className="w-64 rounded-2xl border-4 border-white"
               />
               <img
                  src="https://img.freepik.com/premium-photo/cute-baby-red-panda-lesser-panda-character-3d-rendering-cartoon-illustration_691560-4376.jpg?size=626&ext=jpg&ga=GA1.1.901052190.1701795903&semt=ais"
                  alt=""
                  className="w-64 rounded-2xl border-4 border-white"
               />
               <img
                  src="https://img.freepik.com/premium-photo/cute-baby-red-panda-lesser-panda-character-3d-rendering-cartoon-illustration_691560-4376.jpg?size=626&ext=jpg&ga=GA1.1.901052190.1701795903&semt=ais"
                  alt=""
                  className="w-64 rounded-2xl border-4 border-white"
               />
               <img
                  src="https://img.freepik.com/premium-photo/cute-baby-red-panda-lesser-panda-character-3d-rendering-cartoon-illustration_691560-4376.jpg?size=626&ext=jpg&ga=GA1.1.901052190.1701795903&semt=ais"
                  alt=""
                  className="w-64 rounded-2xl border-4 border-white"
               />
               <img
                  src="https://img.freepik.com/premium-photo/cute-baby-red-panda-lesser-panda-character-3d-rendering-cartoon-illustration_691560-4376.jpg?size=626&ext=jpg&ga=GA1.1.901052190.1701795903&semt=ais"
                  alt=""
                  className="w-64 rounded-2xl border-4 border-white"
               />
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
