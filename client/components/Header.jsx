import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white p-4 flex justify-between items-center h-20 relative z-10">
      <h1 className="text-4xl font-bold">
        <span className="text-header">BRIDGE</span> THE GAP
      </h1>

      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className="hidden md:flex gap-5 px-2">
        <Link to="/" className="no-underline font-semibold text-black">
          Home
        </Link>
        <Link to="/digital-skills" className="no-underline font-semibold text-black">
          Courses
        </Link>
        <Link to="/institutions" className="no-underline font-semibold text-black">
          Institutions
        </Link>
        <Link to="/sign-up" className="no-underline font-semibold text-black">
          Sign up
        </Link>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex flex-col items-center justify-center">
          <nav className="bg-white p-4 rounded-lg flex flex-col items-center gap-5">
            <button onClick={toggleMenu} className="self-end">
              <X size={24} />
            </button>
            <Link to="/" className="no-underline font-semibold text-black" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/digital-skills" className="no-underline font-semibold text-black" onClick={toggleMenu}>
              Courses
            </Link>
            <Link to="/institutions" className="no-underline font-semibold text-black" onClick={toggleMenu}>
              Institutions
            </Link>
            <Link to="/sign-up" className="no-underline font-semibold text-black" onClick={toggleMenu}>
              Sign up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
