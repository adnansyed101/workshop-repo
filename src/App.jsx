import { motion } from "motion/react";

const App = () => {
  return (
    <div>
      <motion.div
        className="box"
        animate={{
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300, 300, 0],
        }}
        transition={{
          duration: 3,
          delay: 1,
        }}
      ></motion.div>
    </div>
  );
};

export default App;
