import { FaLayerGroup, FaShieldAlt, FaBookOpen } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";

export const Description = () => {

  return (
    <div className="w-full justify-center flex flex-col gap-16 items-center text-center p-10 sm:p-28 bg-gradient text-white">
      <h1 className="text-4xl sm:text-5xl title">
        What's Base<span className="text-red-500">Cola</span>?
      </h1>
      <div className="flex flex-col sm:flex-row gap-5">
        <div
          className="flex flex-col gap-10 items-center p-3 text-center"
        >
          <FaLayerGroup className="text-8xl shadow-md rounded-3xl p-5 text-primary bg-white" />
          <div className="items-center flex flex-col">
            <h2 className="text-3xl font-bold ">Built on BASE</h2>
            <p className="text-2xl">
              Built on the best, rapid and efficient Blockchain.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col gap-10 items-center p-3 text-center"
        >
          <FaShieldAlt className="text-8xl shadow-md rounded-3xl p-5 text-primary bg-white" />
          <div className="items-center flex flex-col">
            <h2 className="text-3xl font-bold">High Security</h2>
            <p className="text-2xl">
              Liquidity has been locked for 1 year and contract renounced.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col gap-10 items-center p-3 text-center"
        >
          <FaBookOpen className="text-8xl shadow-md rounded-3xl p-5 text-primary bg-white" />
          <div className="items-center flex flex-col">
            <h2 className="text-3xl font-bold">Funny Narrative</h2>
            <p className="text-2xl">
              Based on the Cocacola and Coinbase collaboration.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col gap-10 items-center p-3 text-center"
        >
          <RiTeamFill className="text-8xl shadow-md rounded-3xl p-5 text-primary bg-white" />
          <div className="items-center flex flex-col">
            <h2 className="text-3xl font-bold">Strong Team</h2>
            <p className="text-2xl">
              Led by a great team that does not stop working.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
