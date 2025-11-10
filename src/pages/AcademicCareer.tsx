import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';

export default function AcademicCareer() {
    const location = useLocation(); 
  return (
    <motion.div
  key={location.pathname}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5 }}
>
    <section className="py-20 text-center">
      <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
        Parcours Académique
      </h2>
      <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed text-left space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            🎓 Baccalauréat en Informatique (en cours)
          </h3>
          <p>Université du Québec à Trois-Rivières — 2024 - …</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Formation axée sur le développement logiciel, les bases de données,
            la conception d’interfaces et la programmation mobile.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            🎓 Licence en Informatique, Réseaux et Multimédia
          </h3>
          <p>Université Hassan II, Casablanca — 2018 - 2021</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Approfondissement en programmation, modélisation UML, conception de
            bases de données et développement web.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            🎓 Baccalauréat en Sciences Mathématiques A
          </h3>
          <p>Lycée Mustapha Elmaani, Maroc — 2015 - 2018</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            🧾 Certification CCNA Security
          </h3>
          <p>Cisco Networking Academy — Juin 2021</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8">🌐 Langues</h3>
          <ul className="list-disc ml-6">
            <li>Français : Courant</li>
            <li>Anglais : Intermédiaire (B2)</li>
          </ul>
        </div>
      </div>
    </section>
    </motion.div>
  );
}
