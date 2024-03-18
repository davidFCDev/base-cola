import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-around sm:justify-between items-center lg:py-2 lg:px-10 font-semibold bg-gradient text-white shadow shadow-primary h-16 sm:h-20">
      <img src="/delicious.webp" alt="Letra logos" className="w-16 hidden lg:block hover:scale-105" />
      <div className="flex gap-4 sm:gap-10 text-md md:text-3xl ">
        <a
          href="https://www.dextools.io/app/es/base/pair-explorer/0x2cbb3dcf27b462462684f6bf915d83d98bbe7673?t=1710255711083"
          target="_blank"
          rel="noreferrer"
          className="hover:text-red-600"
        >
          DexTools
        </a>
        <a
          href="https://t.me/basecolaentry"
          target="_blank"
          rel="noreferrer"
          className="hover:text-red-600"
        >
          Telegram
        </a>
        <a
          href="https://twitter.com/BaseColaCoin"
          target="_blank"
          rel="noreferrer"
          className="hover:text-red-600"
        >
          X
        </a>
        <a
          href="https://chainlist.org/chain/8453"
          target="_blank"
          rel="noreferrer"
          className="hover:text-red-600"
        >
          Add BASE
        </a>
      </div>
      <div className="border border-white px-4 py-1 sm:py-2 rounded-md hover:text-primary hover:bg-white hover:cursor-pointer text-2xl sm:text-3xl">
        <Link href={"dapp"} >
          Dapp
        </Link>
      </div>
    </header>
  );
};
