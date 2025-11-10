import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "PlayTogether – Application mobile",
      tech: "Kotlin • Jetpack Compose • Spring Boot • SQL",
      description:
        "Application mobile d’organisation de rencontres sportives entre amis. Les utilisateurs peuvent créer, rejoindre et gérer des activités sportives en temps réel.",
    },
    {
      title: "Éco Voyage – Base de données pour agence de voyage",
      tech: "Oracle • SQL • UML • Oracle Developer",
      description:
        "Conception et implémentation d’une base de données complète pour la gestion globale d’une agence de voyages.",
    },
    {
      title: "Portfolio Web",
      tech: "React • TailwindCSS • TypeScript",
      description:
        "Ce site personnel conçu pour présenter mon parcours, mes compétences et mes réalisations.",
    },
  ];

  return (
    <section className="py-20 text-center bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-blue-600 mb-8"
      >
        Mes Projets
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{p.title}</h3>
            <p className="text-sm text-blue-500 mt-1">{p.tech}</p>
            <p className="text-gray-600 dark:text-gray-300 mt-4">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
