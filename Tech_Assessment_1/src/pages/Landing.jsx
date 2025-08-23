import { motion } from "framer-motion";

function Landing({ onStart }) {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/src/assets/bg_landing.png')" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold drop-shadow-lg"
      >
        Welcome to Weatherly 🌦️
      </motion.h1>
      <motion.button
        onClick={onStart}
        className="mt-10 px-6 py-3 bg-blue-500 rounded-2xl shadow-lg hover:bg-blue-600 transition"
        whileHover={{ scale: 1.1 }}
      >
        Get Started
      </motion.button>
    </div>
  );
}

export default Landing;
