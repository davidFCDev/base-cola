export const Header = () => {
  return (
    <header className="flex justify-around items-center p-4 text-3xl font-semibold">
      <img src="/public/logoWeb.png" alt="Letra logos" className="w-56" />
      <div className="flex gap-10">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          Telegram
        </a>
        <a
          href="https://twitter.com/BaseColaToken"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          Twitter
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          Telegram
        </a>
        <a
          href="https://chainlist.org/chain/8453"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          Add BASE
        </a>
      </div>
      <div>
        <a
          href="https://baseswap.fi/swap"
          className="border-2 border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all px-5 py-2 rounded-3xl"
        >
          Trade Now
        </a>
      </div>
    </header>
  );
};
