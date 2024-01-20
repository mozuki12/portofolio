import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link href="/" passHref>
            <div className="text-white font-bold text-lg">Home</div>
          </Link>
          <div className="space-x-4">
            <Link href="/about" passHref>
              <div className="text-white hover:text-gray-300">Portofolio</div>
            </Link>
            <Link href="/contact" passHref>
              <div className="text-white hover:text-gray-300">Contact</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;