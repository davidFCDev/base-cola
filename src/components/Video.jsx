export const Video = () => {
  return (
    <div className="w-full flex flex-col gap-10 py-20 justify-center items-center text-center">
      <h1 className="text-primary text-4xl sm:text-5xl title">
        Coinbase Onchain <span className="text-red-600">Summer</span>
      </h1>
      <h3 className="tracking-widest flex flex-col gap-2 text-xl sm:text-2xl w-[58%]">
        A multi-week celebration of onchain art, music, and more, powered by
        Base. Cocacola is bringing their Global Masterpiece campaign onchain
        with iconic works from leading artists, and we helped them with the special edition!
      </h3>
      <div className="flex flex-col sm:flex-row gap-10 w-full items-center justify-center">
        <video
          className="w-full sm:w-[560px] rounded "
          autoPlay
          loop
          muted
        >
          <source src="/COLA.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col gap-3">
          <img
            src="/coinbase.png"
            alt="Coinbase"
            className="w-80 rounded shadow-sm shadow-gray-500 hover:shadow-gray-500 hover:shadow-md "
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
