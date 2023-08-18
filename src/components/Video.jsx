import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Video = () => {
  const animationOptions = {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2 },
  };

  const [ref1, inView1] = useInView({ threshold: 0.6, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.6, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.6, triggerOnce: true });

  return (
    <div className="w-full flex flex-col gap-10 py-20 justify-center items-center text-center">
      <h1 className="text-primary text-4xl sm:text-5xl title">
        Coinbase Onchain <span className="text-red-600">Summer</span>
      </h1>
      <h3 className="tracking-widest flex flex-col gap-2 text-xl sm:text-2xl w-[75%] md:w-[58%]">
        A multi-week celebration of onchain art, music, and more, powered by
        Base. Cocacola is bringing their Global Masterpiece campaign onchain
        with iconic works from leading artists, and we helped them with the
        special edition!
      </h3>
      <div className="flex flex-col sm:flex-row gap-10 w-full items-center justify-center">
        <video className="w-[300px] sm:w-[560px] rounded " autoPlay loop muted>
          <source src="/COLA.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col gap-3">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={inView1 ? animationOptions : {}}
            ref={ref1}
            src="/coinbase.png"
            alt="Coinbase"
            className="w-80 rounded shadow-sm shadow-gray-500 hover:shadow-gray-500 hover:shadow-md "
          />
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={inView2 ? animationOptions : {}}
            ref={ref2}
            src="/onchain.png"
            alt="onchain"
            className="w-80 rounded shadow-sm shadow-gray-500 hover:shadow-gray-500 hover:shadow-md "
          />
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={inView3 ? animationOptions : {}}
            ref={ref3}
            src="/cocacola.png"
            alt="Cocacola"
            className="w-80 rounded shadow-sm shadow-gray-500 hover:shadow-gray-500 hover:shadow-md "
          />
        </div>
      </div>
    </div>
  );
};
