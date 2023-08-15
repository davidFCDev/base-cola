import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const animationOptions = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  };

  const [ref1, inView1] = useInView({ threshold: 0.6, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.6, triggerOnce: true });
  return (
    <div className="w-full justify-center flex flex-col sm:flex-row gap-10 lg:gap-36 items-center p-10 sm:p-28">
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        animate={inView1 ? animationOptions : {}}
        ref={ref1}
        src="/howTO.png"
        alt="prueba"
        className="min-w-[350px] sm:min-w-[400px] lg:w-[700px] shadow-lg rounded-2xl shadow-gray-300"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? animationOptions : {}}
        ref={ref2}
        className="flex flex-col w-96 gap-5 items-center sm:items-start p-6 sm:p-0"
      >
        <h2 className="text-primary text-4xl sm:text-5xl title">
          How to Connect.
        </h2>
        <h3 className="tracking-widest flex flex-col gap-2 text-xl sm:text-2xl">
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
      </motion.div>
    </div>
  );
};
