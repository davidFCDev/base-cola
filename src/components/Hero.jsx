
export const Hero = () => {
  
  return (
    <div className="w-full p-5 flex flex-col gap-8 items-center">
      <h1 className="text-primary text-4xl sm:text-7xl title">
        Welcome to Base <span className="text-red-600">Cola</span>
      </h1>
      <div className="tracking-widest flex flex-col gap-2 text-center text-xl sm:text-2xl font-semibold">
        <h3>The most refreshing meme on BASE</h3>
        <h3><span className="text-red-500">CocaCola</span> and <span className="text-primary">BASE</span> are the new alliance, will you join us?</h3>
      </div>
      <div className="flex flex-col-reverse sm:flex-row w-full justify-center m-5 gap-16 items-center">
        <img
          src="/tweet.png"
          alt="Tweet"
          className="shadow-sm rounded-md h-40 lg:h-56 w-64 lg:w-[450px]"
        />
        <img
          src="/public/lataCola.png"
          alt="Lata"
          className="w-96"
        />
      </div>
    </div>
  );
};
