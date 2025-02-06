import { motion } from "motion/react";

const App = () => {
  return (
    <div>
      <motion.div
        className="box"
        animate={{
          x: 100,
        }}
        transition={{
          duration: 3,
          delay: 1,
        }}
      ></motion.div>
      <motion.div className="circle"></motion.div>
    </div>
  );
};

export default App;
