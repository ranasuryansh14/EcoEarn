import React, { useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

export const DragCloseDrawerExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <button
        onClick={() => setOpen(true)}
        className="font-medium rounded bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
      >
        FAQ's
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">
            FAQ: Spending and Redeeming Eco Points
          </h2>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-neutral-200">
              What are Eco Points?
            </h3>
            <p>
              Eco Points are rewards you earn for participating in eco-friendly
              activities, making sustainable purchases, or engaging with our platform. These points can be used to access discounts, exclusive offers, or redeem codes with our partner companies.
            </p>

            <h3 className="text-2xl font-semibold text-neutral-200">
              How can I spend Eco Points?
            </h3>
            <p>
              You can spend your Eco Points by navigating to the 'Rewards' section on our platform. Here, you can browse available rewards and redeem codes for discounts, products, or services from our partner companies. Each reward option shows the required points to redeem it.
            </p>

            <h3 className="text-2xl font-semibold text-neutral-200">
              How do I redeem Eco Points for a code?
            </h3>
            <p>
              To redeem your Eco Points for a specific code:
              <ol className="list-decimal list-inside space-y-2 mt-2">
                <li>Visit the Rewards section on our platform.</li>
                <li>Select the offer or partner company you’re interested in.</li>
                <li>Click on "Redeem" and confirm your choice.</li>
                <li>After confirmation, a unique code will be generated for you to use directly with the partner company.</li>
              </ol>
            </p>

            <h3 className="text-2xl font-semibold text-neutral-200">
              Where can I use my redeem code?
            </h3>
            <p>
              Your redeem code can be used with the specific partner company you selected. Check the details of each reward, as terms may vary between companies. Codes are usually valid for a limited time, so be sure to use them before they expire!
            </p>

            <h3 className="text-2xl font-semibold text-neutral-200">
              Are there any restrictions on using Eco Points?
            </h3>
            <p>
              Eco Points cannot be transferred to other users or exchanged for cash. They are intended to be used on rewards within our platform and may be subject to additional terms depending on the specific reward or partner company.
            </p>
          </div>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
