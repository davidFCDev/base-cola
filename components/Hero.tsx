
export const Hero = () => {

  return (
    <div className="w-full flex flex-col gap-2 sm:gap-8 items-center mt-10 sm:mt-16">
      <h1 className="text-primary text-4xl sm:text-7xl title">
        Welcome to Base <span className="text-red-600">Cola</span>
      </h1>
      <div className="tracking-widest flex flex-col gap-2 text-center text-xl sm:text-2xl font-semibold">
        <h3>The most refreshing meme on BASE</h3>
        <h3><span className="text-red-500">CocaCola</span> and <span className="text-primary">BASE</span>,
          come together to create the Brian's favorite drink</h3>
      </div>
      <div className="flex flex-col sm:flex-row w-full justify-center gap-4 sm:gap-16 items-center">

        <img
          src="/heroweb.png"
          alt="Lata"
          className="w-80 sm:w-92 mb-0 sm:mb-16"
        />
        <img
          src="/brianhero.png"
          alt="Tweet"
          className="w-80 mb-0 sm:mb-16"
        />
      </div>
    </div>
  );
};
