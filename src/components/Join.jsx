import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Join = () => {
  const animationOptions = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  };

  const [ref1, inView1] = useInView({ threshold: 0.6, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.6, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.6, triggerOnce: true });

  return (
    <div className="w-full justify-center flex flex-col gap-16 items-center p-28 text-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-primary text-5xl title">
          Join <span className="text-red-600">US</span>!
        </h1>
        <h3 className="tracking-widest flex flex-col text-2xl sm:text-3xl">
          They are already with us. What are you waiting for?
        </h3>
      </div>

      <div className="flex flex-col sm:flex-row gap-10">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? animationOptions : {}}
          ref={ref1}
          src="/vitalik.png"
          alt="vitalik"
          className="w-48 h-48"
        />
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? animationOptions : {}}
          ref={ref2}
          src="/brian.png"
          alt="brian"
          className="w-48 h-48"
        />
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? animationOptions : {}}
          ref={ref3}
          src="/trump.png"
          alt="trump"
          className="w-48 h-48"
        />
      </div>

      <div className="flex gap-10">
        <a
          href="https://t.me/basecolaentry"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary text-3xl font-bold animate-pulse"
        >
          Telegram
        </a>
        <a
          href="https://twitter.com/BaseColaToken"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary text-3xl font-bold animate-pulse"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};
