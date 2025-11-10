import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-10 dark:bg-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Mon Portfolio</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium dark:text-gray-200">
          <li><Link to="/" className="hover:text-blue-600">Accueil</Link></li>
          <li><Link to="/academic-career" className="hover:text-blue-600">Parcours</Link></li>
          <li><Link to="/projects" className="hover:text-blue-600">Projets</Link></li>
          <li><Link to="/skills" className="hover:text-blue-600">Compétences</Link></li>
          <li><Link to="/experience" className="hover:text-blue-600">Expériences</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
