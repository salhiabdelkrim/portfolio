import { motion } from "framer-motion";

export default function Skills() {
  return (
        <motion.section
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
    <section className="py-20 text-center">
      <h2 className="text-3xl font-semibold text-blue-600 mb-8">
        Compétences Techniques
      </h2>

      <div className="max-w-4xl mx-auto text-left grid md:grid-cols-2 gap-10 text-gray-700">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 dark:text-gray-300">
            💻 Langages de Programmation
          </h3>
          <ul className="list-disc ml-6 space-y-1 dark:text-gray-300">
            <li>Java</li>
            <li>Python</li>
            <li>C</li>
            <li>HTML, CSS, JavaScript</li>
            <li>SQL</li>
            <li>PHP</li>
            <li>Kotlin</li>
            <li>C#, .NET</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 dark:text-gray-300">
            ⚙️ Frameworks & Outils
          </h3>
          <ul className="list-disc ml-6 space-y-1 dark:text-gray-300">
            <li>Spring Boot</li>
            <li>Jetpack Compose</li>
            <li>Oracle Developer</li>
            <li>UML</li>
            <li>Git / GitHub</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 dark:text-gray-300">
            🗃️ Bases de Données
          </h3>
          <ul className="list-disc ml-6 space-y-1 dark:text-gray-300">
            <li>Oracle</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 dark:text-gray-300">
            🧠 Compétences Générales
          </h3>
          <ul className="list-disc ml-6 space-y-1 dark:text-gray-300">
            <li>Conception et modélisation de bases de données</li>
            <li>Développement Web et Mobile</li>
            <li>Travail en équipe et gestion de projets</li>
            <li>Gestion d’équipe et leadership</li>
          </ul>
        </div>
      </div>
    </section>
    </motion.section>
  );
}
