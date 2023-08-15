export const About = () => {
  return (
    <div className="w-full justify-center flex gap-36 items-center p-28">
      <img src="/public/howTO.png" alt="prueba" className="w-[700px] shadow-lg rounded-2xl shadow-gray-300" />
      <div className="flex flex-col w-96 gap-4 items-start">
        <h2 className="text-primary text-5xl title">How to Connect.</h2>
        <h3 className="tracking-widest flex flex-col gap-2 text-2xl">
          To join the family you need to add the new Base Network on your
          metamask. Import:
        </h3>
        <ol className="text-2xl font-bold">
          <li className="flex gap-4">
            <img src="iconoTick.png" alt="icono azul" className="w-10" />
            Network name: Base
          </li>
          <li className="flex gap-4">
            <img src="iconoTick.png" alt="icono azul" className="w-10" />
            Network URL: https://mainnet.base.org
          </li>
          <li className="flex gap-4">
            <img src="iconoTick.png" alt="icono azul" className="w-10" />
            Chain ID: 8453
          </li>
        </ol>
        <a
          href="https://chainlist.org/chain/8453"
          target="_blank"
          rel="noreferrer"
          className="border-2 border-primary text-primary text-3xl font-bold hover:bg-primary hover:text-white transition-all px-5 py-2 rounded-3xl"
        >
          Connect BASE
        </a>
      </div>
    </div>
  );
};
