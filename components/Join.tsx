

export const Join = () => {

  return (
    <div className="w-full justify-center flex flex-col gap-10 sm:gap-16 items-center p-10 sm:p-28 text-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-primary text-5xl title">
          Join <span className="text-red-600">US</span>!
        </h1>
        <h3 className="tracking-widest flex flex-col text-2xl sm:text-3xl">
          They are already with us. What are you waiting for?
        </h3>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 lg:gap-36">
        <img
          src="/toshi-cola.png"
          alt="toshi"
          className="w-80 h-80"
        />
        <img
          src="/mochi-cola.png"
          alt="mochi"
          className="w-80 h-80"
        />
      </div>

      <div className="flex gap-10">
        <a href="https://t.me/basecolaentry" target="_blank" rel="noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/480px-Telegram_logo.svg.png"
            alt="telegram"
            className="w-10 hover:scale-110 transition-all"
          />
        </a>
        <a
          href="https://twitter.com/BaseColaCoin"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10809.jpg?w=2000"
            alt="twitter"
            className="w-10 hover:scale-110 transition-all"
          />
        </a>
        <a
          href="https://warpcast.com/basecolaonbase"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://pipedream.com/s.v0/app_X2Rh9R/logo/orig"
            alt="twitter"
            className="w-10 hover:scale-110 transition-all"
          />
        </a>
      </div>
      <p className="text-xl">basecolacoin@gmail.com</p>
    </div>
  );
};
