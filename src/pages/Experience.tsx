import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Responsable de groupe – Majorel Africa",
      date: "Août 2023 – Juin 2024",
      tasks: [
        "Gestion et accompagnement d’une équipe de conseillers clients.",
        "Suivi de la productivité et mise en place de plans d’action pour améliorer les ventes.",
        "Animation d’équipe et gestion de la relation entre collaborateurs et direction.",
      ],
    },
    {
      title: "Conseiller commercial – Majorel Africa",
      date: "Octobre 2021 – Juillet 2023",
      tasks: [
        "Service à la clientèle et accompagnement des clients dans leurs démarches.",
        "Contribution à l’amélioration du taux de satisfaction client.",
      ],
    },
  ];

  return (
    <motion.section
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
    <section className="py-20 text-center">
      <h2 className="text-3xl font-semibold text-blue-600 mb-8">
        Expériences Professionnelles
      </h2>

      <div className="max-w-4xl mx-auto space-y-8 text-left text-gray-700">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
            <p className="text-sm text-blue-500 mb-4">{exp.date}</p>
            <ul className="list-disc ml-6 space-y-1">
              {exp.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    </motion.section>
  );
}
