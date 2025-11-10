export default function Contact() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6">Contact</h2>
      <p className="text-gray-700 mb-8 dark:text-gray-300">
        Je suis ouvert à toute opportunité de collaboration ou de stage dans le
        domaine du développement web et mobile. N’hésitez pas à me contacter !
      </p>

      <div className="space-y-3 text-lg">
        <p>📧 <strong>Email :</strong> abdelkrim.salhi@uqtr.ca</p>
        <p>📱 <strong>Téléphone :</strong> 873 307-3821</p>
        <p>🏠 <strong>Adresse :</strong> 2-3084 Rue Courval, Trois-Rivières</p>
        <p>
          💼 <strong>LinkedIn :</strong>{" "}
          <a
            href="https://www.linkedin.com/in/abdelkrim-salhi-b98998200"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abdelkrim Salhi
          </a>
        </p>
        <p>
          💻 <strong>GitHub :</strong>{" "}
          <a
            href="https://github.com/salhiabdelkrim"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            salhiabdelkrim
          </a>
        </p>
      </div>
    </section>
  );
}

