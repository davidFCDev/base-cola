import { FaLayerGroup, FaShieldAlt, FaBookOpen } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Description = () => {
  const animationOptions = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  };

  const [ref1, inView1] = useInView({ threshold: 0.6, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.6, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.6, triggerOnce: true });
  const [ref4, inView4] = useInView({ threshold: 0.6, triggerOnce: true });
  return (
    <div className="w-full justify-center flex flex-col gap-16 items-center p-28">
      <h1 className="text-primary text-5xl title">
        What's Base<span className="text-red-600">Cola</span>?
      </h1>
      <div className="flex gap-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? animationOptions : {}}
          ref={ref1}
          className="flex flex-col gap-10 items-center p-3 text-center"
        >
          <FaLayerGroup className="text-8xl shadow-md rounded-3xl p-5 text-primary" />
          <div className="items-center flex flex-col">
            <h2 className="text-3xl font-bold text-primary">Built on BASE</h2>
            <p className="text-2xl">
              Built on the best, rapid and efficient Blockchain.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? animationOptions : {}}
          ref={ref2}
          className="flex flex-col gap-10 items-center p-3 text-center"
        >
          <FaShieldAlt className="text-8xl shadow-md rounded-3xl p-5 text-primary" />
          <div className="items-center flex flex-col">
            <h2 className="text-3xl font-bold text-primary">High Security</h2>
            <p className="text-2xl">
              Liquidity has been locked for 1 year and contract renounced.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? animationOptions : {}}
          ref={ref3}
          className="flex flex-col gap-10 items-center p-3 text-center"
        >
          <FaBookOpen className="text-8xl shadow-md rounded-3xl p-5 text-primary" />
          <div className="items-center flex flex-col">
            <h2 className="text-3xl font-bold text-primary">Funny Narrative</h2>
            <p className="text-2xl">
              Based on the Cocacola and Coinbase collaboration.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView4 ? animationOptions : {}}
          ref={ref4}
          className="flex flex-col gap-10 items-center p-3 text-center"
        >
          <RiTeamFill className="text-8xl shadow-md rounded-3xl p-5 text-primary" />
          <div className="items-center flex flex-col">
            <h2 className="text-3xl font-bold text-primary">Strong Team</h2>
            <p className="text-2xl">
              Led by a great team that does not stop working.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
