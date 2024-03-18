
export const Video = () => {

  return (
    <div className="w-full flex flex-col gap-10 py-10 px-4 justify-center items-center text-center">
      <h1 className="text-primary text-4xl sm:text-5xl title">
        Coinbase ft. <span className="text-red-600">Cocacola</span>
      </h1>
      <h3 className="tracking-widest flex flex-col gap-2 text-xl sm:text-2xl w-[85%] md:w-[58%]">
        Two of the most important companies come together to bring the most refreshing meme. Brian's favorite drink is coming to revolutionize the crypto world. Don't miss the opportunity. Join us now!
      </h3>
      <div className="flex flex-col sm:flex-row gap-10 w-full items-center justify-center">
        <video className="w-[320px] sm:w-[560px] rounded " autoPlay loop muted>
          <source src="/videocola.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col gap-3">
          <img
            src="/coinbase.png"
            alt="Coinbase"
            className="w-80 sm:w-80 rounded shadow-sm shadow-gray-500 hover:shadow-gray-500 hover:shadow-md "
          />
          <img
            src="/onchain.png"
            alt="onchain"
            className="w-80 rounded shadow-sm shadow-gray-500 hover:shadow-gray-500 hover:shadow-md "
          />
          <img
            src="/cocacola.png"
            alt="Cocacola"
            className="w-80 rounded shadow-sm shadow-gray-500 hover:shadow-gray-500 hover:shadow-md "
          />
        </div>
      </div>
    </div>
  );
};
