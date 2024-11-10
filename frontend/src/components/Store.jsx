import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Store = () => {
  return (
    <div className="bg-white">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Shop Here
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        {/* <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p> */}
      </div>
    </div>
  );
};

export default Store;

const cards = [
  {
    url: "1.jpg",
    title: "Big-Bazar",
    id: 1,
  },
  {
    url: "4.png",
    title: "Pantaloons",
    id: 4,
  },
  {
    url: "3.jpg",
    title: "Nike",
    id: 3,
  },
  {
    url: "5.jpg",
    title: "HM",
    id: 5,
  },
  {
    url: "6.jpg",
    title: "Zara",
    id: 6,
  },
  {
    url: "7.jpg",
    title: "Being Human",
    id: 7,
  },
  {
    url: "2.jpg",
    title: "Parada",
    id: 2,
  },
];