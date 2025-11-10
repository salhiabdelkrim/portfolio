import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useLocation } from "react-router-dom";



export default function Home() {
    const location = useLocation();
    const iconClass = "text-3xl text-gray-800 dark:text-white hover:text-blue-600 transition";
  return (
    <motion.div
  key={location.pathname}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5 }}
>
    <section className="flex flex-col items-center justify-center text-center py-20 min-h-screen 
  bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-blue-600 mb-4 dark:text-blue-400"
      >
        Abdelkrim Salhi
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-2xl text-gray-700 mb-6 dark:text-gray-300"
      >
        Développeur Web & Mobile | Full Stack Junior
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="text-lg text-gray-600 max-w-2xl dark:text-gray-400"
      >
        Passionné par la création d’expériences numériques intuitives et performantes,
        je combine mes compétences en développement web et mobile pour concevoir des
        applications modernes et fonctionnelles.
      </motion.p>

      <motion.div
        className="mt-10 flex space-x-6 "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a href="https://github.com/salhiabdelkrim" target="_blank" rel="noreferrer">
          <FaGithub className={iconClass} />
        </a>
        <a href="https://www.linkedin.com/in/abdelkrim-salhi-b98998200" target="_blank" rel="noreferrer">
          <FaLinkedin className={iconClass}/>
        </a>
        <a href="mailto:abdelkrim.salhi@uqtr.ca">
          <FaEnvelope className={iconClass} />
        </a>
      </motion.div>
    </section>
    </motion.div>
  );
}
