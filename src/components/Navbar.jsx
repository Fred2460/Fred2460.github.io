import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  // État pour gérer l'ouverture du menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour basculer l'état
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      {/* Icône pour ouvrir le menu */}
      <RxHamburgerMenu onClick={toggleMenu} size={30} />

      {/* Menu conditionnel */}
      {isMenuOpen && (
        <ul>
          <li><a href="#home">Accueil</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
