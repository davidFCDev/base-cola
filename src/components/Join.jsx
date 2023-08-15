export const Join = () => {
  return (
    <div className="w-full justify-center flex flex-col gap-16 items-center p-28 text-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-primary text-5xl title">
          Join <span className="text-red-600">US</span>!
        </h1>
        <h3 className="tracking-widest flex flex-col text-3xl">
          They are already with us. What are you waiting for?
        </h3>
      </div>

      <div className="flex gap-24">
        <img src="/public/vitalik.png" alt="vitalik" className="w-72 h-72" />
        <img src="/public/brian.png" alt="brian" className="w-72 h-72" />
        <img src="/public/trump.png" alt="trump" className="w-72 h-72" />
      </div>

      <div className="flex gap-10">
        <a
          href="https://t.me/basecolaentry"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary text-3xl font-bold"
        >
          Telegram
        </a>
        <a
          href="https://twitter.com/BaseColaToken"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary text-3xl font-bold"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};
